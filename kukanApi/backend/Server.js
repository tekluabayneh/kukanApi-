let express = require("express");
const cors = require("cors");
const app = express();
const postRouter = require("./routes/postes/postRoute");
const userRoute = require("./routes/users/userRoute");
const quoteRouter = require("./routes/quote/quoteRouter");
const productRouter = require("./routes/product/productRouter");
const Api_and_user_Route = require("./userApi_And_email/Route");
const middleware = require("./middleWare/middleWare");
const db = require("./config/db");

let port = 8000;

/* middleware */
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  try {
    res.json("good start");
  } catch (error) {
    console.log(error);
  }
});
//  routes that don't need middleware before the global middleware
app.use("/user_apikey", Api_and_user_Route);

//middleware
app.use(middleware);

app.use("/posts", postRouter);
app.use("/users", userRoute);
app.use("/quotes", quoteRouter);
app.use("/products", productRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on port ${port} `);
});
