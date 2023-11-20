function loginAdmin() {
  event.preventDefault();
  window.location.reload();
  let getUser = getAllItems("user");
  let email = document.getElementById("form2Example1").value;
  let password = document.getElementById("form2Example2").value;
  let user = getUser.findIndex((item) => {
    return item.email == email;
  });
  if (
    getUser[user].password == password &&
    getUser[user].email == email &&
    getUser[user].role == 1
  ) {
    let admin = {
      name: getUser[user].name,
      id: getUser[user].id,
      status: 1,
    };
    localStorage.setItem("LoginAdmin", JSON.stringify(admin));
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert("không có quyền truy cập");
  }
}
