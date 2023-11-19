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
function resultProduct() {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let checkStatus;
  let table = "<table>";
  table +=
    "<tr>" +
    "<th>ID</th>" +
    "<th>Tên sản phẩm</th>" +
    "<th>Giá</th>" +
    "<th>Tồn kho</th>" +
    "<th>Ảnh</th>" +
    "<th>Trạng thái</th>" +
    "<th>Loại</th>" +
    "<th>Xóa</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    if (local[i].status == 1) {
      checkStatus = "còn hàng";
    } else {
      checkStatus = "hết hàng";
    }
    if (local[i].status == 1) {
      table += `<tr>
             <td>${local[i].id}</td>
             <td>${local[i].name}</td>
             <td>${local[i].cost}đ</td>
             <td>${local[i].stock}</td>
             <td><img src="../../../${local[i].image}" alt="iphone 15"  style="width: 80px; height: 80px"></td>
             <td>${checkStatus}</td>
             <td>${local[i].category}</td>
             <td><button onclick="editProduct(${i})" id='addEdit'>edit</button></td>
             <td><button onclick="delete_product(${i})" id='addDelete'>delete</button></td>
          </tr>`;
    }
  }
  table += "</table>";
  document.getElementById("table_id").innerHTML = table;
}
resultProduct();
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
      status: 1,
    });
    document.getElementById("addNewCreate").style.display = "none";
    document.querySelector("main").style.backgroundColor = "#ffff";
    document.querySelector("body").style.overflowY = "auto";
  } else {
    alert("fill up");
  }
  localStorage.setItem("product_new", JSON.stringify(local));
  resultProduct(local);
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
function editProduct(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  document.getElementById("editUser").innerHTML = `<div class="container">
        <input type="text" placeholder="${local[index].name}" id="ETSP"/>
        <input type="text" placeholder="${local[index].cost}" id="EDG"/>
        <input type="text" placeholder="${local[index].stock}" id="ETK"/>
        <input type="text" placeholder="${local[index].category}" id="EK"/>
        <input type="text" placeholder="${local[index].image}" id="EHA"/>
        <input type="text" placeholder="${local[index].status}" id="ST"/>
        <div class="buttonCreate">
          <input type="button" value="Edit" onclick='clickEdit(${index})' />
          <input type="button" value="Cancel" onclick='cancelNew()'/>
        </div>
      </div>`;
  document.getElementById("editUser").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").style.backgroundColor = "#979595";
}

function clickEdit(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let NameProduct = document.getElementById("ETSP").value;
  let CostProduct = document.getElementById("EDG").value;
  let StockProduct = document.getElementById("ETK").value;
  let KindProduct = document.getElementById("EK").value;
  let ImageProduct = document.getElementById("EHA").value;
  let StatusProduct = document.getElementById("ST").value;
  if (
    NameProduct != "" ||
    CostProduct != "" ||
    StockProduct != "" ||
    KindProduct != "" ||
    ImageProduct != "" ||
    StatusProduct != ""
  ) {
    local[index] = {
      ...local[index],
      name: NameProduct,
      cost: CostProduct,
      stock: StockProduct,
      image: ImageProduct,
      category: KindProduct,
      status: StatusProduct,
    };
  } else {
    local[index] = {
      ...local[index],
    };
  }
  localStorage.setItem("product_new", JSON.stringify(local));
  resultProduct(local);
}
function delete_product(index) {
  let check = confirm("are you sure wanna delete?");
  if (check) {
    let local = JSON.parse(localStorage.getItem("product_new"));
    local[index] = {
      ...local[index],
      status: 2,
    };
    localStorage.setItem("product_new", JSON.stringify(local));
    resultProduct(local);
  }
}
