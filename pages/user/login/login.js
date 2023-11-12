function getLogin() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let localLogin = JSON.parse(localStorage.getItem("user"));
  let checkLogin = localLogin.find((item) => {
    return item.email === email.value && item.password === password.value;
  });
  if (checkLogin) {
    window.location.href = "../../../index.html";
    localStorage.setItem("userLogin", JSON.stringify(checkLogin)); //lưu login khi đăng nhập và sẽ xóa khi logout
  } else {
    alert("tài khoản không đúng");
  }
}
