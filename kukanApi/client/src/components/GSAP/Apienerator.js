const backtoHome = $(".backtoHome");
const apkiekey_home = $(".apkie-key_home");

gsap.to(backtoHome, {
  yoyo: true,
  duration: 1,
  repeat: -1,
  scale: 1.1,
  ease: "bounce",
  color: "red",
});

gsap.from(apkiekey_home, {
  opacity: 0,
  duration: 1,
  y: 100,
  delay: 0.3,
});

var apiKey = sessionStorage.getItem("api_key");
console.log(apiKey);
document.getElementById("apiKey").innerText = apiKey;
const copyButton = document.querySelector(".copyButton");
// Add event listener to the copy button
copyButton.addEventListener("click", function () {
  // Use the Clipboard API to copy the API key to the clipboard
  navigator.clipboard
    .writeText(apiKey)
    .then(function () {
      $(".showCopyMesage").css({
        display: "block",
      });
      setInterval(() => {
        $(".showCopyMesage").css({
          display: "none",
        });
      }, 1000);
    })
    .catch(function (err) {
      console.error("Error copying text: ", err);
    });
});
