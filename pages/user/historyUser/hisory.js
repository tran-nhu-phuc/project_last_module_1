let result;
function renderOrders() {
  const getLocal = getAllItems("orders");
  const getUser = getAllItems("user");
  const container = document.getElementById("boxOrders");
  const getUserLogin = getAllItems("userLogin");
  //tìm ra vị trí user đã đăng nhập
  const user = getUser.findIndex((item) => {
    return item.id == getUserLogin.id;
  });
  //lấy ra tất cả đồ mà user đang đăng nhập đã mua
  const userOrder = getLocal.filter((item) => {
    return getUser[user].id == item.idUser;
  });
  //lấy ngày mà user đã mua
  let getOrder = userOrder.map((item) => {
    return item.date;
  });
  let getdateOrders = new Set(getOrder);
  let ordersDate = Array.from(getdateOrders);
  container.innerHTML = "";
  ordersDate.forEach((item) => {
    result = item;
    container.innerHTML += `
            <div class="containerOrders" onclick="popUpOrder()">
              <h2>${item}</h2>
            </div>`;
  });
}
function popUpOrder() {
  let box = document.getElementById("containerBoxProduct");
  if (box.style.display == "none" || box.style.display == "") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}
function renderPopUp() {
  const getLocal = getAllItems("orders");
  const getUser = getAllItems("user");
  const getUserLogin = getAllItems("userLogin");
  const container = document.querySelector("#containerBoxProduct");
  //tìm ra vị trí user đã đăng nhập
  const user = getUser.findIndex((item) => {
    return item.id == getUserLogin.id;
  });
  const userOrder = getLocal.filter((item) => {
    return getUser[user].id == item.idUser;
  });
  let orders = userOrder.filter((item) => {
    return item.date == result;
  });
  container.innerHTML = "";
  for (let j = 0; j < orders.length; j++) {
    for (let i = 0; i < orders[j].cart.length; i++) {
      container.innerHTML += `
    <div class="item">
          <div class="nameOrder">
            <img
              src="../../../${orders[j].cart[i].image}"
              alt="product"
            />
          </div>
          <div class="nameOrder">${orders[j].cart[i].name}</div>
          <div class="idUserOrders">số lượng :${
            orders[j].cart[i].quantity
          }</div>
          <div class="quantityOrder">${(
            orders[j].cart[i].quantity * orders[j].cart[i].cost
          ).toLocaleString()}đ</div>
        </div>
      </div>`;
    }
  }
  console.log("sadasdasd");
}
renderPopUp();
