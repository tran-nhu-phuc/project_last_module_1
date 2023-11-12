function getNameUser() {
  let local = JSON.parse(localStorage.getItem("userLogin"));
  document.querySelector(
    ".menu-list-small-6"
  ).innerHTML = `<strong id="contentLogout" class="contentLogout" onclick="dropdown()">${local.name}</strong>
  <div class="logout-dropdown">
    <button onclick="logout()">logout</button>
    <button onclick="set()">set</button>
    <button onclick="new()">new</button>
  </div>
`;
}
getNameUser();
function logout() {
  localStorage.removeItem("userLogin"); //xóa khi logout
  window.location.href = "./pages/user/login/login.html";
  getNameUser();
}
function dropdown() {
  let dropdown = document.querySelector(".logout-dropdown");
  dropdown.style.display = "block";
}
let body = document.querySelector("main");
body.addEventListener("click", function () {
  let dropdown = document.querySelector(".logout-dropdown");
  dropdown.style.display = "none";
});
