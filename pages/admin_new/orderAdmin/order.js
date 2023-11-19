function renderOder() {
  let local = JSON.parse(localStorage.getItem("orders"));
  let changeValueStatus;
  let changeValuePayment;
  let table = "<table>";
  table +=
    "<th>Giao hàng</th>" +
    "<th>ID Người Mua</th>" +
    "<th>Sản Phẩm</th>" +
    "<th>Hình thức thanh toán</th>" +
    "<th>Ngày mua</th>" +
    "<th>Trạng thái</th>" +
    "<th colspan='2'>Hành dộng</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    if (local[i].status == 1) {
      changeValueStatus = "đã nhận đơn";
    } else if (local[i].status == 2) {
      changeValueStatus = "đang giao";
    } else if (local[i].status == 3) {
      changeValueStatus = "hoàn thành";
    } else {
      changeValueStatus = "đơn hàng chưa được xác nhận";
    }
    if (local[i].payment == 1) {
      changeValuePayment = "thanh toán khi nhận hàng";
    } else if (local[i].status == 2) {
      changeValuePayment = "thanh toán online";
    } else {
      changeValuePayment = "chưa xác nhận hình thức thanh toán";
    }
    table += `<tr>
                <td><input type="checkbox"></td>
                <td>${local[i].idUser}</td>
                <td><button onclick="viewProduct(${i})" style="padding:5px 5px; background-color:blue; color:#ffff;border-radius:10px;">Xem sản phẩm</button></td>
                <td>${changeValuePayment}</td>
                <td>${local[i].date}</td>
                <td>${changeValueStatus}</td>
                <td><button onclick="editOrder(${i})" style="padding: 10px 20px
;background-color:orange; border-radius:10px;color:#ffff ">Edit</button></td>
                <td><button onclick="deleteUser(${i})" style="padding: 10px 20px
;background-color:red; border-radius:10px;color:#ffff">Delete</button></td>
            </tr>`;
  }
  table += "</table>";
  document.getElementById("table_list").innerHTML = table;
}
renderOder();
function editOrder(index) {
  document.getElementById("editOrder").innerHTML = `<div class="container">
        <input type="text" placeholder="Trạng thái" id="statusOrder"/>
        <div class="buttonCreate">
          <input type="button" value="Edit" onclick='edit(${index})' />
          <input type="button" value="Cancel" onclick='cancelNew()'/>
        </div>
      </div>`;
  document.getElementById("editOrder").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").style.backgroundColor = "#979595";
}
function cancelNew() {
  document.getElementById("editOrder").style.display = "none";
  location.reload();
}
function edit(index) {
  const getOrder = getAllItems("orders");
  let statusUser = document.getElementById("statusOrder");
  getOrder[index] = {
    ...getOrder[index],
    status: statusUser.value,
  };
  document.getElementById("editOrder").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#ffff";
  localStorage.setItem("orders", JSON.stringify(getOrder));
  renderOder();
}
function deleteUser(index) {
  let check = confirm("are you sure wanna delete?");
  if (check) {
    const getOrders = getAllItems("orders");
    getOrders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(getOrders));
  }
  renderOder();
}
function viewProduct(i) {
  let getOrder = getAllItems("orders");
  let container = document.getElementById("containerOrder");
  let alertProduct = document.getElementById("productOrderAlert");
  alertProduct.innerHTML = "";
  container.style.display = "block";
  getOrder[i].cart.forEach((element) => {
    alertProduct.innerHTML += `<div class="orderProduct">
          <img
            src="../../../${element.image}"
            alt="${element.name}"
          />
          <span>${element.name}</span>
          <span>${element.quantity}</span>
          <span>${element.id}</span>
          <strong>${(
            element.quantity * element.cost
          ).toLocaleString()}đ</strong>
        </div>`;
  });
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").style.backgroundColor = "#979595";
  document.querySelector("body").style.zIndex = 1000;
  document.querySelector(".table").backgroundColor = "#979595";
}
function clockAlertProduct() {
  let container = document.getElementById("containerOrder");
  container.style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#f5f5f5";
  document.querySelector(".table").backgroundColor = "#ffff";
}
document.getElementById("setProduct").addEventListener("click", function () {
  document.querySelector(".setSub").style.display = "block";
});
document.querySelector("main").addEventListener("click", function () {
  document.querySelector(".setSub").style.display = "none";
});
document.querySelector(".setSub").addEventListener("click", function () {
  window.location.href = "../LoginAdmin/login.html";
});
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
