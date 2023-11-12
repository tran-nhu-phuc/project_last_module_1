// cái này có thể xóa đi
let array = [
  {
    id: 0,
    codeProduct: 123,
    nameProduct: "iphone",
    cost: 12312313,
    haveProduct: 123,
    status: false,
    imgLink:
      "https://th.bing.com/th/id/OIP.oJhAtynqCdcsrNOO0RAWYgHaMW?pid=ImgDet&rs=1",
  },
];
// if (!JSON.parse(localStorage.getItem("todolist"))) {
//   localStorage.setItem("todolist", JSON.stringify(array));
// }
// localStorage.setItem("newProduct", JSON.stringify(array));
// add hard
function addNew() {
  document.getElementById("add").innerHTML =
    '<input type="text" placeholder="mã sản phẩm" id="MXP"/>' +
    '<input type="text" placeholder="tên sản phẩm" id="TSP"/>' +
    '<input type="text" placeholder="đơn giá" id="DG"/>' +
    '<input type="text" placeholder="số lượng" id="TK"/>' +
    '<input type="text" placeholder="hình ảnh" id="HA"/>' +
    '<div class="button-add-new">' +
    "<button onclick='add()' >add</button>" +
    "<button onclick='cancel()'>cancel</button>" +
    "</div>";
  document.getElementById("add").style.display = "block";
}
// let local = JSON.parse(localStorage.getItem("newProduct"));
// render
function result() {
  let local = JSON.parse(localStorage.getItem("todolist"));
  let table = "<table>";
  table +=
    "<tr>" +
    "<th>ID</th>" +
    "<th>Mã sản phẩm</th>" +
    "<th>Tên sản phẩm</th>" +
    "<th>Giá</th>" +
    "<th>Tồn kho</th>" +
    "<th>Ảnh</th>" +
    "<th>Hành dộng</th>" +
    "<th>Thêm</th>" +
    "<th>Xóa</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    table += `<tr>
             <td>${i}</td>
             <td>${local[i].codeProduct}</td>
             <td>${local[i].nameProduct}</td>
             <td>${local[i].cost}</td>
             <td>${local[i].haveProduct}</td>
             <td><img src="${local[i].imgLink}" alt="iphone 15"  style="width: 80px; height: 80px"></td>
             <td>${local[i].status}</td>
             <td><button onclick="edit(${i})" id='addEdit'>edit</button></td>
             <td><button onclick="delete_product(${i})" id='addDelete'>delete</button></td>
          </tr>`;
  }
  table += "</table>";
  document.getElementById("table_id").innerHTML = table;
}
result();
// add
function add() {
  let local = JSON.parse(localStorage.getItem("todolist"));
  let codeProduct = document.getElementById("MXP").value;
  let nameProduct = document.getElementById("TSP").value;
  let Cost = document.getElementById("DG").value;
  let TK = document.getElementById("TK").value;
  let image = document.getElementById("HA").value;
  if (
    codeProduct !== " " &&
    nameProduct !== " " &&
    Cost !== " " &&
    TK !== "" &&
    image !== ""
  ) {
    // đẩy lên đầu mảng.
    local.push({
      id: 0,
      codeProduct: codeProduct,
      nameProduct: nameProduct,
      cost: Cost,
      haveProduct: TK,
      imgLink: image,
      status: false,
    });
  } else {
    alert("fill up");
  }
  localStorage.setItem("todolist", JSON.stringify(local));
  result(local);
}
// loại bỏ add
function cancel() {
  document.getElementById("add").style.display = "none";
}
// edit
function edit(index) {
  let local = JSON.parse(localStorage.getItem("todolist"));
  document.getElementById("add").innerHTML =
    `<input type="text" value="${local[index].codeProduct}" id="EMXP" title="Nhập mã sản phẩm"/>` +
    `<input type="text" value="${local[index].nameProduct}" id="ETSP" title="Nhập tên sản phẩm"/>` +
    `<input type="text" value="${local[index].cost}" id="EDG"/ title="Nhập giá của sản phẩm">` +
    `<input type="text" value="${local[index].haveProduct}" id="ETK" title="Nhập tồn kho"/>` +
    `<input type="text" value="${local[index].imgLink}" id="EHA" title="Nhập link ảnh sản phẩm"/>` +
    `<button onclick="clickEdit(${index})" id="edit">click to edit</button>` +
    `<button onclick="cancel()" id='editCancel'>cancel</button>`;
}

// nút edit
function clickEdit(index) {
  let local = JSON.parse(localStorage.getItem("todolist"));
  let editCodeProduct = document.getElementById("EMXP").value;
  let editNameProduct = document.getElementById("ETSP").value;
  let editCost = document.getElementById("EDG").value;
  let editHaveProduct = document.getElementById("ETK").value;
  let editLinkImage = document.getElementById("EHA").value;
  local[index].codeProduct = editCodeProduct;
  local[index].nameProduct = editNameProduct;
  local[index].cost = editCost;
  local[index].haveProduct = editHaveProduct;
  local[index].imgLink = editLinkImage;
  // sau khi kết thúc hàm phải có cập nhật local
  localStorage.setItem("todolist", JSON.stringify(local));
  result(local);
}
function delete_product(index) {
  let local = JSON.parse(localStorage.getItem("todolist"));
  local.splice(index, 1);
  // sau khi kết thúc hàm phải có cập nhật local
  localStorage.setItem("todolist", JSON.stringify(local));
  result(local);
}
// những hàm cập nhật local phải để trong những thứ cập nhật như edit hoặc delete
