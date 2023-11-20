function getLogin() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let login = new User();
  let checkLogin = login.Login(email, password);
  if (checkLogin) {
    window.location.href = "../../../index.html";
    localStorage.setItem("userLogin", JSON.stringify(checkLogin));
  } else if (checkLogin == false) {
    alert("không có quyền truy cập");
  } else {
    alert("tài khoản không tồn tại");
  }
}
