function getRegister() {
  let fulName = document.getElementById("fulname");
  let number = document.getElementById("number");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordAgain = document.getElementById("passwordagain");
  let localUser = JSON.parse(localStorage.getItem("user"));
  let checkEmail = localUser.find((item) => {
    return email.value === item.email;
  });
  if (checkEmail) {
    alert("tài khoản đã tồn tại");
  } else {
    if (password.value !== passwordAgain.value) {
      alert("nhập đúng mật khẩu");
    } else {
      localUser.push({
        id: localUser[localUser.length - 1].id + 1,
        name: fulName.value,
        email: email.value,
        number: number.value,
        password: password.value,
        role: 2,
        cart: [],
        status: 1,
      });
    }
  }
  localStorage.setItem("user", JSON.stringify(localUser));
  window.location.href = "../login/login.html";
}
