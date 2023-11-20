function getRenderNameUser() {
  let local = getAllItems("userLogin");
  document.querySelector(
    ".menu-list-small-6"
  ).innerHTML = `<strong id="contentLogout" class="contentLogout" onclick="dropdown()">${local.name}</strong>
  <div class="logout-dropdown">
    <button onclick="logout()">logout</button>
  </div>
`;
  let userLogin = document.querySelector(".logout-dropdown");
  userLogin.style.display = "none";
  if (local.name == undefined) {
    document.querySelector(
      ".menu-list-small-6"
    ).innerHTML = `<a href="http://127.0.0.1:5500/pages/user/login/login.html"><i class="fa-solid fa-user" style="font-size:20px"></i></a>`;
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

function searProductData() {
  const getProduct = getAllItems("product_new");
  const onSearchProduct = document.querySelector("#searchProduct").value;
  const containerProductSearch = document.getElementById("listSearchProduct");
  let productName = getProduct.filter((item) => {
    return item.name.toLowerCase().includes(onSearchProduct);
  });
  containerProductSearch.innerHTML = "";
  productName.forEach((element) => {
    containerProductSearch.innerHTML += `<li onclick="renderToDeTail(${element.id})">${element.name}</li>`;
  });
}
function renderToDeTail(id) {
  window.location.href = `./pages/user/cart_detail/cart.html?id=${id}`;
}
