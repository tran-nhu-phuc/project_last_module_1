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
                <a href="#">${element.name}</a>
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
                <strong id="upStrong"><i class="fa-solid fa-chevron-up" onclick="cherryUp(${element.id})"></i>${element.quantity}<i class="fa-solid fa-chevron-down"onclick="cherryDown(${element.id})" ></i></strong>
              </div>
              <div class="priceProduct">
                <strong>${element.cost}</strong>
                <span>1.344.000đ/tháng*</span>
                <a onclick="deleteProduct(${element.id})" style=" cursor: pointer;">Xóa</a>
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
// tăng sản phẩm
function cherryUp(id) {
  let getUser = getAllItems("user");
  let getUserLogin = getAllItems("userLogin");
  let user = getUser.find((item) => {
    return item.id == getUserLogin.id;
  });
  let userCart = user.cart.findIndex((element) => {
    return element.id == id;
  });
  user.cart[userCart] = {
    ...user.cart[userCart],
    quantity: user.cart[userCart].quantity + 1,
  };
  if (user.cart[userCart].quantity > user.cart[userCart].stock) {
    document.getElementById("popUp").style.display = "block";
    setTimeout(popUp, 3000);
  } else {
    let indexUser = getUser.findIndex((item) => {
      return item.id == user.id;
    });
    getUser[indexUser].cart = user.cart;
    localStorage.setItem("user", JSON.stringify(getUser));
    RenderAddCart();
  }
}
//giảm sản phẩm
function cherryDown(id) {
  let getUser = getAllItems("user");
  let getUserLogin = getAllItems("userLogin");
  let user = getUser.find((item) => {
    return item.id == getUserLogin.id;
  });
  let userCart = user.cart.findIndex((element) => {
    return element.id == id;
  });
  if (user.cart[userCart].quantity > 1) {
    user.cart[userCart] = {
      ...user.cart[userCart],
      quantity: user.cart[userCart].quantity - 1,
    };
  }
  let indexUser = getUser.findIndex((item) => {
    return item.id == user.id;
  });
  getUser[indexUser].cart = user.cart;
  localStorage.setItem("user", JSON.stringify(getUser));
  RenderAddCart();
}

function deleteProduct(id) {
  let getUser = getAllItems("user");
  let getUserLogin = getAllItems("userLogin");
  let cof = confirm("are you sure wanna delete?");
  if (cof) {
    let user = getUser.findIndex((item) => {
      return item.id == getUserLogin.id;
    });
    let userCart = getUser[user].cart.findIndex((element) => {
      return element.id == id;
    });
    let resultFilter = getUser[user].cart.filter((item) => {
      return item.id != getUser[user].cart[userCart].id;
    });
    getUser[user].cart = resultFilter;
    let result = getUser.map((item, index) => {
      if (index == user) {
        return {
          ...getUser[user],
        };
      }
      return item;
    });
    localStorage.setItem("user", JSON.stringify(result));
  }
  RenderAddCart();
  window.location.reload();
}

function deleteProduct(id) {
  let getUser = getAllItems("user");
  let getUserLogin = getAllItems("userLogin");
  let cof = confirm("are you sure wanna delete?");
  if (cof) {
    let user = getUser.findIndex((item) => {
      return item.id == getUserLogin.id;
    });
    let userCart = getUser[user].cart.findIndex((element) => {
      return element.id == id;
    });
    let resultFilter = getUser[user].cart.filter((item) => {
      return item.id != getUser[user].cart[userCart].id;
    });
    getUser[user].cart = resultFilter;
    let result = getUser.map((item, index) => {
      if (index == user) {
        return {
          ...getUser[user],
        };
      }
      return item;
    });
    localStorage.setItem("user", JSON.stringify(result));
  }
  RenderAddCart();
}
function popUp() {
  const popUpContent = document.getElementById("popUp");
  popUpContent.style.display = "none";
}
