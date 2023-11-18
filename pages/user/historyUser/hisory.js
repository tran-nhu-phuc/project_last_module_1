function renderHistory() {
  const render = document.getElementById("historyPayment");
  const getUser = getAllItems("user");
  const getUserLogin = getAllItems("userLogin");
  const getOrder = getAllItems("orders");
  let user = getUser.findIndex((item) => {
    return item.id == getUserLogin.id;
  });
  let order = getOrder.filter((item) => {
    return item.idUser == user;
  });
  console.log(order);
  let table = `<table>`;
  table += `<tr>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Ngày mua</th>
            </tr>
    `;
  for (let i = 0; i < getOrder[order].cart.length; i++) {
    table += ` <tr>
              <td>${getOrder[order].cart[i].name}</td>
              <td><img src="../../../${getUser[user].cart[i].image}"></td>
              <td>${getOrder[order].cart[i].quantity}</td>
              <td>${(
                getOrder[order].cart[i].quantity * getOrder[order].cart[i].cost
              ).toLocaleString()}đ</td>
              <td>${getOrder[order].date}</td>
            </tr>`;
  }
  table += "</table>";
  render.innerHTML = table;
}
renderHistory();

document.getElementById("classProduct").addEventListener("click", function () {
  document.getElementById("historyPayment").style.display = "block";
});
setTimeout(close, 5000);
function close() {
  document.getElementById("historyPayment").style.display = "none";
}
