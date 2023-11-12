function renderCart() {
  let local_cart = JSON.parse(localStorage.getItem("product_new"));
  let container = document.querySelector("#container_detail_card");
  let getURL = window.location.href;
  let index = getURL.split("=")[1];
  let cart = local_cart.find((item) => {
    return item.id == index;
  });
  console.log(cart);
  container.innerHTML = `
  <section class="section-1">
        <div class="section-1-div-1">
          <span>Mới</span>
          <strong>Mua ${cart.name} Pro</strong>
          <p>
            Giới hạn 6 chiếc ${cart.name} Pro và 6 chiếc iPhone 15 Pro Max cho mỗi
            khách hàng.
          </p>
          <p>Từ 34.999.000đ hoặc 1.425.000đ/tháng mỗi tháng trong 24 tháng*</p>
          <p>
            Trả góp theo tháng với lãi suất 1.67%, sau khi thanh toán lần đầu
            20%.
          </p>
        </div>
        <div class="section-1-div-2">
          <span
            >Nhận 600.000đ-25.200.000đ.** <i class="fa-solid fa-plus"></i
          ></span>
        </div>
      </section>
      <section class="section-2">
        <div class="section-2-div-1" id="container_cart">
          <img
            src="../../../${cart.image}"
            alt="${cart.name}"
          />
        </div>
        <div class="section-2-div-2">
          <div class="section-2-div-2-image">
            <div class="cart-1">
              <h2>Phiên bản. <span>Mẫu nào phù hợp nhất với bạn?</span></h2>
              <p>${cart.content}</p>
                 <div class="cart-1-para">
                  <div class="para-1">
                    <strong>${cart.name}</strong>
                    <strong>Màn hình 6.7 inch¹</strong>
                  </div>
                  <div class="para-2">
                    <span>Từ 34.999.000đ</span>
                    <span>hoặc</span>
                    <span>1.425.000đ/tháng</span>
                    <span>trong 24 tháng*</span>
                  </div>
                 </div>
          </div>
          <div class="cart-2">
            <p>Trả góp theo tháng với lãi suất thực 1.67%, sau khi thanh toán lần đầu 20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.</p>
          </div>
        </div>
        <div class="cart-3">
          <div class="cart-3-content-1">
            <p>Bạn cần trợ giúp chọn một phiên bản?</p>
            <p>Khám phá sự khác biệt về kích thước màn hình và thời lượng pin.</p>
          </div>
          <div class="cart-plus">
            <span><i class="fa-solid fa-plus"></i></span>
          </div>
        </div>
        <div class="add">
          <button>add</button>
        </div>
      </section>
`;
}
renderCart();
