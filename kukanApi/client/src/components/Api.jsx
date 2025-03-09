import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const ApiKeyGenerator = () => {
  const [apiKey, setApiKey] = useState(""); // State for the API key
  const [showCopyMessage, setShowCopyMessage] = useState(false); // State for copy message visibility
  const containerRef = useRef(null);

  // Generate a sample API key (replace with your actual generation logic)
  useEffect(() => {
    // Example: Generate a random API key (for demo purposes)
    const generateApiKey = () => {
      return "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, () =>
        Math.floor(Math.random() * 16).toString(16)
      );
    };
    setApiKey(generateApiKey());
    // GSAP animation for the container
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  // Copy API key to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div className="bg-gradient-to-t from-pink-50 to-gray-300 flex items-center justify-center min-h-screen relative">
      {/* API Key Container */}
      <div
        ref={containerRef}
        className="apkie-key_home bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Take Your API Key
        </h1>
        <p className="capitalize text-gray-500 text-[12px]">
          If you didn’t get your API key, register or login to your account
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="copyButton cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Copy
          </button>
          <p
            className={`showCopyMesage ${
              showCopyMessage ? "block" : "hidden"
            } bg-black text-[10px] text-white shadow p-1 rounded font-bold`}
          >
            API Key copied to clipboard!
          </p>
        </div>
        <div id="output" className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-800">Your API Key:</p>
          <code id="apiKey" className="block mt-1 text-blue-600 break-words">
            {apiKey}
          </code>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyGenerator;
