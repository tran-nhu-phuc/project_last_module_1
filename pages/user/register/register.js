function getRegister() {
  event.preventDefault();
  let fulName = document.getElementById("fulname").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let passwordAgain = document.getElementById("passwordagain").value;
  let arrayPassWord = [];
  arrayPassWord.push(password, passwordAgain);
  let getServices = new User();
  let checkRegister = getServices.Register(email, arrayPassWord);
  if (checkRegister === true) {
    localUser = {
      id: 0,
      name: fulName,
      email: email,
      number: number,
      password: password,
      role: 2,
      cart: [],
      status: 1,
    };
    insertItem("user", localUser);
    window.location.href = "../login/login.html";
  } else {
    alert("nhập lại email hoặc mật khẩu");
  }
}
