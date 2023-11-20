function renderAll() {
  const productContainer = document.getElementById("imageSales");
  const getOrder = getAllItems("product_new");
  let totalOrder = document.getElementById("CostOrder");
  let totalPrice = 0;
  getOrder.sort((a, b) => a.stock - b.stock); //lấy ra các product có quantity có stock từ nhỏ đến lớn
  getOrder.forEach((item) => {
    totalPrice += (100 - item.stock) * item.cost;
    productContainer.innerHTML += `
        <div class="productOrders">
          <img src="../../../${item.image}" alt="product" />
          <span>${100 - item.stock}</span>
          <strong>${((100 - item.stock) * item.cost).toLocaleString()}đ</strong>
        </div>`;
  });
  totalOrder.innerHTML = totalPrice.toLocaleString() + "đ";
}
document.getElementById("setProduct").addEventListener("click", function () {
  document.querySelector(".setSub").style.display = "block";
});
document.querySelector("main").addEventListener("click", function () {
  document.querySelector(".setSub").style.display = "none";
});
document.querySelector(".setSub").addEventListener("click", function () {
  window.location.href = "../LoginAdmin/login.html";
  JSON.parse(localStorage.removeItem("LoginAdmin"));
});

function renderNewUser() {
  let container = document.getElementById("userOrders");
  let getUser = getAllItems("user");
  getUser.forEach((item) => {
    container.innerHTML += `
        <div class="userOderNew">
            <div>${item.name}</div>
            <div>${item.number}</div>
            <div>${item.email}</div>
          </div>`;
  });
}
renderNewUser();
