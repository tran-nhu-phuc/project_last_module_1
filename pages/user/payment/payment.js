function checkNumber() {
  const phoneNumber = document.querySelector("#numberPay").value;
  const enterAddress = document.getElementById("addToAddress");
  const enterNumber = document.getElementById("enterNumber");
  const Payment = document.getElementById("typePay");
  let checkNumber = phoneNumber.split("");
  if (
    checkNumber[0] == 0 &&
    checkNumber[1] == 9 &&
    checkNumber.length > 8 &&
    checkAddress.length < 11
  ) {
    enterAddress.style.display = "block";
    Payment.style.display = "block";
    enterNumber.style.display = "none";
  } else {
    alert("vui lòng nhập đúng số điện thoại của bạn");
  }
}
function checkAddress() {
  const enterAddress = document.getElementById("addToAddress");
  if (enterAddress.length < 15 || enterAddress.length > 20) {
    alert("vui lòng nhập lại");
  } else {
    let alertProduct = document.getElementById("alertPayment");
    const Payment = document.getElementById("typePay");
    Payment.style.display = "none";
    alertProduct.style.display = "block";
    enterAddress.style.display = "none";
  }
}
function renderProductPayMent() {
  const render = document.getElementById("clickPayment");
  const getUser = getAllItems("user");
  const getUserLogin = getAllItems("userLogin");
  let user = getUser.findIndex((item) => {
    return item.id == getUserLogin.id;
  });
  render.innerHTML = "";
  getUser[user].cart.forEach((element) => {
    render.innerHTML += `
      <div class="listProduct">
            <img
              src="../../../${element.image}"
              alt="product"
            />
            <div class="stock">
              <p>count</p>
              <p>${element.quantity}</p>
            </div>
            <div class="price">
              <strong>TotalPrice</strong>
              <strong>${(
                element.cost * element.quantity
              ).toLocaleString()}đ</strong>
            </div>
          </div>
      `;
  });
}
renderProductPayMent();

function enterBuy() {
  let date = new Date();
  let dateUi =
    date.getDate() + "/" + (+date.getMonth() + 1) + "/" + date.getFullYear();
  const getUser = getAllItems("user");
  const getUserLogin = getAllItems("userLogin");
  const product = getAllItems("product_new");
  const orders = getAllItems("orders");
  let number = document.getElementById("numberPay");
  let address = document.getElementById("enterAddress");
  let user = getUser.findIndex((item) => {
    return item.id == getUserLogin.id;
  });
  let dataIdProduct = getUser[user].cart.map((item) => {
    return item.id;
  });
  let productPositions = dataIdProduct.map((productId) => {
    return product.findIndex((item) => item.id === productId);
  });
  productPositions.forEach((item, index) => {
    product[item] = {
      ...product[item],
      stock: product[item].stock - getUser[user].cart[index].quantity,
    };
  });
  orders.push({
    cart: getUser[user].cart,
    idOrders: orders[orders.length - 1].idOrder + 1,
    idUser: getUser[user].id,
    totalPrice: "total",
    address: address.value,
    phone: number.value,
    status: 1,
    date: dateUi,
    payment: 1,
  });
  localStorage.setItem("orders", JSON.stringify(orders));
  getUser[user].cart = [];
  localStorage.setItem("user", JSON.stringify(getUser));
  localStorage.setItem("product_new", JSON.stringify(product));
  window.location.href = "../historyUser/history.html";
}
