class User {
  // thực hiện cong việc register
  Register(email, checkPassword) {
    let getLocal = getAllItems("user");
    let checkEmail = getLocal.find((item) => {
      return item.email === email;
    });
    if (checkEmail || checkPassword[0] !== checkPassword[1]) {
      return false;
    } else {
      return true;
    }
  }
  // thực hiện công việc login
  Login(email, password) {
    let localLogin = getAllItems("user");
    let checkLogin = localLogin.find((item) => {
      return item.email == email && item.password == password;
    });
    if (checkLogin.status == 1) {
      return {
        name: checkLogin.name,
        id: checkLogin.id,
        status: 1,
      };
    } else {
      return false;
    }
  }
}
