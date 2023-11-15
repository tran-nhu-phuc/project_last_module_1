function getRenderNameUser() {
  let local = getAllItems("userLogin");
  document.querySelector(
    ".menu-list-small-6"
  ).innerHTML = `<strong id="contentLogout" class="contentLogout" onclick="dropdown()">${local.name}</strong>
  <div class="logout-dropdown">
    <button onclick="logout()">logout</button>
    <button onclick="set()">set</button>
    <button onclick="new()">new</button>
  </div>
`;
  let userLogin = document.querySelector(".logout-dropdown");
  userLogin.style.display = "none";
  if (local.name == undefined) {
    document.querySelector(
      ".menu-list-small-6"
    ).innerHTML = `<a href="./pages/user/login/login.html">Chưa đăng nhập</a>`;
  }
}
function logout() {
  localStorage.removeItem("userLogin"); //xóa khi logout
  window.location.href = "http://127.0.0.1:5500/pages/user/login/login.html";
  getRenderNameUser();
}
function dropdown() {
  let noUser = document.querySelector("#user");
  let user = document.querySelector(".logout-dropdown");
  user.style.display = "block";
  noUser.style.display = "none";
  getRenderNameUser();
}

document.querySelector("main").addEventListener("click", function () {
  document.querySelector(".logout-dropdown").style.display = "none";
});
