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
function addNew() {
  document.getElementById("addNewCreate").innerHTML = `<div class="container">
        <input type="text" placeholder="Tên Sản Phẩm" id="NameProduct"/>
        <input type="text" placeholder="Nhập Giá" id="CostProduct"/>
        <input type="text" placeholder="Nhập số Lượng" id="StockProduct"/>
        <input type="text" placeholder="Nhập Link ảnh" id="imageProduct"/>
        <input type="text" placeholder="Nhập Loại sản phẩm" id="KindProduct"/>
        <div class="buttonCreate">
          <input type="button" value="Create" onclick='add()' />
          <input type="button" value="Cancel" onclick='cancelNew()'/>
        </div>
      </div>`;
  document.getElementById("addNewCreate").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("main").style.backgroundColor = "#979595";
}
function result() {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let table = "<table>";
  table +=
    "<tr>" +
    "<th>ID</th>" +
    "<th>Tên sản phẩm</th>" +
    "<th>Giá</th>" +
    "<th>Tồn kho</th>" +
    "<th>Ảnh</th>" +
    "<th>Loại</th>" +
    "<th>Xóa</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    table += `<tr>
             <td>${local[i].id}</td>
             <td>${local[i].name}</td>
             <td>${local[i].cost}đ</td>
             <td>${local[i].stock}</td>
             <td><img src="../../../${local[i].image}" alt="iphone 15"  style="width: 80px; height: 80px"></td>
             <td>${local[i].category}</td>
             <td><button onclick="edit(${i})" id='addEdit'>edit</button></td>
             <td><button onclick="delete_product(${i})" id='addDelete'>delete</button></td>
          </tr>`;
  }
  table += "</table>";
  document.getElementById("table_id").innerHTML = table;
}
result();
function add() {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let name = document.getElementById("NameProduct").value;
  let cost = document.getElementById("CostProduct").value;
  let stock = document.getElementById("StockProduct").value;
  let kind = document.getElementById("KindProduct").value;
  let image = document.getElementById("imageProduct").value;
  if (
    name !== "" &&
    cost !== "" &&
    stock !== "" &&
    kind !== "" &&
    image !== ""
  ) {
    local.push({
      id: local[local.length - 1].id + 1,
      name: name,
      cost: cost,
      stock: stock,
      image: image,
      category: kind,
    });
    document.getElementById("addNewCreate").style.display = "none";
    document.querySelector("main").style.backgroundColor = "#ffff";
    document.querySelector("body").style.overflowY = "auto";
  } else {
    alert("fill up");
  }
  localStorage.setItem("product_new", JSON.stringify(local));
  result(local);
}
function cancelEdit() {
  document.getElementById("addEditNew").style.display = "none";
  location.reload();
}
function cancelNew() {
  document.getElementById("addNewCreate").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("main").style.backgroundColor = "#ffff";
}
function edit(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  document.getElementById("addEditNew").innerHTML =
    `<input type="text" value="${local[index].id}" id="EMXP" title="Nhập mã sản phẩm"/>` +
    `<input type="text" value="${local[index].name}" id="ETSP" title="Nhập tên sản phẩm"/>` +
    `<input type="text" value="${local[index].cost}" id="EDG"/ title="Nhập giá của sản phẩm">` +
    `<input type="text" value="${local[index].stock}" id="ETK" title="Nhập tồn kho"/>` +
    `<input type="text" value="${local[index].image}" id="EHA" title="Nhập link ảnh sản phẩm"/>` +
    `<button onclick="clickEdit(${index})" id="edit">click to edit</button>` +
    `<button onclick="cancelEdit()" id='editCancel'>cancel</button>`;
}

function clickEdit(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
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
  localStorage.setItem("product_new", JSON.stringify(local));
  result(local);
}
function delete_product(index) {
  let check = confirm("are you sure wanna delete?");
  if (check) {
    let local = JSON.parse(localStorage.getItem("product_new"));
    local.splice(index, 1);
    localStorage.setItem("product_new", JSON.stringify(local));
    result(local);
  }
}
