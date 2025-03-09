$(function () {
  $("#registerBtn").on("click", (e) => {
    e.preventDefault();
    const email = $(".register_email").val();
    const password = $(".register_password").val();
    // console.log(email, password);

    // check and alert if the user didnt provider email and password
    if (!email || !password) {
      $(".show_registermessage").text("email and password must be provided");
      return;
    }

    $.ajax({
      url: "https://kukandummyjson.onrender.com/user_apikey/register",
      type: "POST",
      data: {
        email: email,
        password: password,
      },
      success: (response) => {
        // console.log(response);
        sessionStorage.setItem("useremail", email);
        sessionStorage.setItem("api_key", response.apiKey);
        $(".register_email").val("");
        $(".register_password").val("");
        window.location.href = "../pages/api.html";
        return;
      },
      error: (error) => {
        console.log(error);
      },
    });
  });

  /* login */
  $("#loginBtn").on("click", (e) => {
    e.preventDefault();
    const email = $(".login_email").val();
    const password = $(".login_password").val();
    // console.log(email, password);

    // check and alert if the user didnt provider email and password
    if (!email || !password) {
      $(".show_loginmessage").text("email and password must be provided");
      return;
    }

    $.ajax({
      url: "https://kukandummyjson.onrender.com/user_apikey/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        email: email,
        password: password,
      }),
      success: (response) => {
        // console.log(response);
        sessionStorage.setItem("useremail", email);
        sessionStorage.setItem("api_key", response.apiKey);
        $(".login_email").val("");
        $(".login_password").val("");
        window.location.href = "../pages/api.html";
        return;
      },
      error: (error) => {
        console.log(error);
      },
    });
  });
});
