const db = require("../config/db");

const middleware = async (req, res, next) => {
  try {
    const apiKey = req.query.api_key;

    if (!apiKey) {
      return res.status(400).json({ message: "API key is required" });
    }

    // Check if the API key exists in the database
    const [apiKeyResult] = await db.execute(
      "SELECT * FROM api_keys WHERE api_key = ?",
      [apiKey]
    );

    if (apiKeyResult.length === 0) {
      return res.status(403).json({ message: "Invalid API key" });
    }

    const apiKeyData = apiKeyResult[0];
    const currentTime = Date.now();
    const resetTime = new Date(apiKeyData.reset_time);
    const storedTime = new Date(resetTime).getTime();

    // Check if the reset time has passed
    const timeLimit = 24 * 60 * 60 * 1000;

    if (currentTime - storedTime >= timeLimit) {
      console.log("Time limit exceeded.");
      const newTime = new Date();
      newTime.setDate(newTime.getDate() + 1);
      await db.execute(
        "UPDATE api_keys SET request_count = 0, reset_time = ? WHERE api_key = ?",
        [newTime, apiKey]
      );
    } else {
      console.log("Still within the time limit.");
    }

    // Check if the rate limit is exceeded
    if (apiKeyData.request_count >= apiKeyData.request_limit) {
      return res.status(429).json({
        message: "Request limit exceeded. Please try again later.",
      });
    }

    // Increment the requests made count
    await db.execute(
      "UPDATE api_keys SET request_count = request_count + 1 WHERE api_key = ?",
      [apiKey]
    );

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = middleware;
