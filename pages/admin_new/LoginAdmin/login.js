function loginAdmin() {
  let getUser = getAllItems("user");
  let email = document.getElementById("form2Example1").value;
  let password = document.getElementById("form2Example2").value;
  let login = new User();
  let checkLogin = login.Login(email, password);
  let user = getUser.find((item) => {
    return item.id == checkLogin.id;
  });
  if (checkLogin && user.role == 1) {
    window.location.href = "../dashboard/dashboard.html";
    localStorage.setItem("LoginAdmin", JSON.stringify(checkLogin));
  } else if (checkLogin == false) {
    alert("không có quyền truy cập");
  } else {
    alert("tài khoản không tồn tại");
  }
}
