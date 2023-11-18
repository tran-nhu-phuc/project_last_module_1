function renderProduct() {
  const productContainer = document.getElementById("imageSales");
  const getOrder = getAllItems("product_new");
  getOrder.sort((a, b) => a.stock - b.stock); //lấy ra các product có quantity có stock từ nhỏ đến lớn
  getOrder.forEach((item) => {
    productContainer.innerHTML += `
        <div class="productOrders">
          <img src="../../../${item.image}" alt="product" />
          <span>${100 - item.stock}</span>
          <strong>${((100 - item.stock) * item.cost).toLocaleString()}đ</strong>
        </div>`;
  });
}
renderProduct();
