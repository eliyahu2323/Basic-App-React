const btnLogin = document.querySelector(".btn-login");
const btnSignUp = document.querySelector(".btn-signup");
const btnLarge = document.querySelector(".btn-large");
const login = document.querySelector(".sign-in");
const singUp = document.querySelector(".sign-up");

/**
 * Open/Close window of log-in
 */
btnLogin.addEventListener("click", function () {
  if (login.classList.contains("hidden")) {
    login.classList.remove("hidden");
    btnLogin.textContent = "Close";
    btnSignUp.classList.add("hidden");
  } else {
    login.classList.add("hidden");
    btnSignUp.classList.remove("hidden");
    btnLogin.textContent = "LOGIN";
  }
});

/**
 * Open/Close window of Sign-up
 */
btnSignUp.addEventListener("click", function () {
  if (singUp.classList.contains("hidden")) {
    singUp.classList.remove("hidden");
    btnSignUp.textContent = "Close";
    btnLogin.classList.add("hidden");
  } else {
    singUp.classList.add("hidden");
    btnLogin.classList.remove("hidden");
    btnSignUp.textContent = "SIGN-UP";
  }
});

/**
 * 1. take email and password from user
 * 2. check if current this user in data-base
 */
btnLarge.addEventListener("click", async function (e) {
  e.preventDefault();
  const data = {
    email: document.getElementById("EMAIL").value,
    password: document.getElementById("PASSWORD").value,
  };

  console.log(JSON.stringify(data));

  // console.log(data);
  try {
    const user = await fetch("http://127.0.0.1:8080/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
      },
      mode: "no-cors",
    });
  } catch (err) {
    console.log(err);
  }
  // console.log(user);
  // alert(user.json());
});
