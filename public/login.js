const button_login_admin = window.document.querySelector(".log_admin");
const button_login_user = window.document.querySelector(".log_user");
const button_username = document.querySelector(".username");
const button_password = document.querySelector(".password");
const exit_red = document.querySelector(".exit-red");
const exit_yellow = document.querySelector(".exit-yellow");
const exit_green = document.querySelector(".exit-green");
const pop_red = document.querySelector(".alert-red");
const pop_yellow = document.querySelector(".alert-yellow");
const pop_green = document.querySelector(".alert-green");
let element = document.createElement("warning");
const container = window.document.querySelector(".movements");
const button_artikli = document.querySelector(".artikli");
const admin_username = "admin";
const admin_password = "123";
const user_username = "user";
const user_password = "456";

//funckija za login

//poziv za exit button na error ispisu
exit_red.addEventListener("click", function () {
  pop_red.classList.add("hidden");
});
//poziv za exit button na warning ispisu
exit_yellow.addEventListener("click", function () {
  pop_yellow.classList.add("hidden");
});
//poziv za exit button na succes ispisu
exit_green.addEventListener("click", function () {
  pop_green.classList.add("hidden");
});

const check_hidden = function (element) {
  if (
    !pop_green.classList.contains("hidden") ||
    !pop_red.classList.contains("hidden") ||
    !pop_yellow.classList.contains("hidden")
  ) {
    pop_green.classList.add("hidden");
    pop_red.classList.add("hidden");
    pop_yellow.classList.add("hidden");
  }
};

button_login_user.addEventListener("click", function () {
  const username = button_username.value;
  const password = button_password.value;

  if (admin_username === username && admin_password === password) {
    window.location = "http://localhost:3000/main.html";
  } else if (user_username === username && user_password === password) {
    window.location = "http://localhost:3000/user.html";
  } else {
    if (username && password) {
      element.innerHTML = "Netočni podaci";
      check_hidden(element);
      pop_yellow.classList.remove("hidden");
      pop_yellow.appendChild(element);
      button_username.value = "";
      button_password.value = "";
    }
    if (username && !password) {
      element.innerHTML = "Upisati polje password";
      check_hidden(element);
      pop_yellow.classList.remove("hidden");
      pop_yellow.appendChild(element);
    }
    if (!username && password) {
      element.innerHTML = "Upisati polje username";
      check_hidden(element);
      pop_yellow.classList.remove("hidden");
      pop_yellow.appendChild(element);
      button_username.value = "";
      button_password.value = "";
    }
  }
});

/*button_login_admin.addEventListener("click", function () {
  button_username.value = admin_username;
  button_password.value = admin_password;

  loginUser(admin_username, admin_password);
});

button_login_user.addEventListener("click", function () {
  button_username.value = user_username;
  button_password.value = user_password;
  loginUser(user_username, user_password);
});

function loginUser(username, password) {
  if (username === admin_username && password === admin_password) {
    window.location = "http://localhost:3000/main.html";
  } else if (username === user_username && password === user_password) {
    window.location = "http://localhost:3000/main.html";
  } else {
    console.log("greska");
  }
}
*/
