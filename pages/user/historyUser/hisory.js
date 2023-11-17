function renderHistory() {
  const render = document.getElementById("historyPayment");
  const getUser = getAllItems("orders");
  const getUserLogin = getAllItems("userLogin");
  let user = getUser.findIndex((item) => {
    return item.idUser == getUserLogin.id;
  });
  let table = `<table>`;
  table += `<tr>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Ngày mua</th>
          </tr>
  `;
  for (let i = 0; i < getUser[user].cart.length; i++) {
    table += ` <tr>
            <td>ID</td>
            <td>${getUser[user].cart[i].name}</td>
            <td><img src="../../../${getUser[user].cart[i].image}"></td>
            <td>${getUser[user].cart[i].quantity}</td>
            <td>${(
              getUser[user].cart[i].quantity * getUser[user].cart[i].cost
            ).toLocaleString()}đ</td>
            <td>${getUser[user].date}</td>
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
