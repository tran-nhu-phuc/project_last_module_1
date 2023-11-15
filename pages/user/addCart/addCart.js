function RenderAddCart() {
  let placeCart = document.querySelector(".productCart");
  let getUserCart = getAllItems("user");
  let getUserLogin = getAllItems("userLogin");
  let totalPrice = 0;
  let getIndexUser = getUserCart.find((item) => {
    return item.id === getUserLogin.id;
  });
  let cartUser = getIndexUser.cart;
  placeCart.innerHTML = "";
  cartUser.forEach((element) => {
    totalPrice += element.cost * element.quantity;
    placeCart.innerHTML += `
            <div class="product">
            <div class="content">
              <div class="imageProduct">
                <img
                  src="../../../${element.image}"
                  alt="mac"
                />
              </div>
              <div class="contentProduct">
                <a href="#">MacBook Air 15 inch với chip M2 - Đêm Xanh Thẳm</a>
                <p>
                  Thanh toán 1.67% lãi suất thực trong 24 tháng sau khi thanh
                  toán lần đầu 20% là 6.600.000đ.
                </p>
                <a href="#"
                  >Hiển thị chi tiết sản phẩm
                  <i class="fa-solid fa-chevron-down"></i
                ></a>
              </div>
              <div class="countProduct">
                <strong>${element.quantity}<i class="fa-solid fa-chevron-down"></i></strong>
              </div>
              <div class="priceProduct">
                <strong>32.999.000đ</strong>
                <span>1.344.000đ/tháng*</span>
                <a href="#">Xóa</a>
              </div>
            </div>
            <div class="textCart">
              <div class="textCart-1">
                <div class="paragrap">
                  <i class="fa-brands fa-apple" style="color: red"></i>
                  <strong
                    >Thêm AppleCare+ cho MacBook Air (M2) 15 inch cho mức giá
                    5.999.000đ</strong
                  >
                  <br />
                  <a>Tìm hiểu thêm <i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div class="addProductVoucher">
                  <a href="#">Thêm</a>
                </div>
              </div>
              <div class="textCart-2">
                <div class="paragrap">
                  <i class="fa-solid fa-box"></i>
                </div>
                <div class="addProductVoucher">
                  <p>Còn hàng</p>
                  <p>Tùy chọn giao hàng <span>chọn quận</span></p>
                </div>
              </div>
          </div>
      `;
  });
  document.querySelector("#totalPrice").innerHTML = totalPrice.toLocaleString();
}
