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
  document.getElementById("addNewCreate").style.display = "block";
  document.getElementById("addNewCreate").innerHTML = `<div class="container">
        <input type="text" placeholder="Tên Sản Phẩm" id="NameProduct"/>
        <input type="text" placeholder="Nhập Giá" id="CostProduct"/>
        <input type="text" placeholder="Nhập số Lượng" id="StockProduct"/>
        <input type="file" placeholder="Nhập Link ảnh" id="imageProduct" style="padding:25px 0"/>
        <input type="text" placeholder="Nhập Loại sản phẩm" id="KindProduct"/>
        <div class="buttonCreate">
          <input type="button" value="Create" onclick='add()' />
          <input type="button" value="Cancel" onclick='cancelNew()'/>
        </div>
      </div>`;

  document.querySelector("body").style.overflowY = "hidden";
}
function resultProduct(page = 1) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let currentPage = (page - 1) * 7;
  let resultProduct = local.splice(currentPage, 7);
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
  for (let i = 0; i < resultProduct.length; i++) {
    if (resultProduct[i].status == 1) {
      checkStatus = "còn hàng";
    } else {
      checkStatus = "hết hàng";
    }
    if (resultProduct[i].status == 1 || resultProduct[i].status == 2) {
      table += `<tr>
             <td>${resultProduct[i].id}</td>
             <td>${resultProduct[i].name}</td>
             <td>${resultProduct[i].cost}đ</td>
             <td>${resultProduct[i].stock}</td>
             <td><img src="../../../${resultProduct[i].image}" alt="iphone 15"  style="width: 80px; height: 80px"></td>
             <td>${checkStatus}</td>
             <td>${resultProduct[i].category}</td>
             <td><button onclick="editProduct(${i})" id='addEdit'>edit</button></td>
             <td><button onclick="delete_product(${i})" id='addDelete'>delete</button></td>
          </tr>`;
    }
  }
  table += "</table>";
  document.getElementById("table_id").innerHTML = table;
}
resultProduct();
function renderListNumberProduct() {
  const getProduct = getAllItems("product_new");
  const containerProductNumber = document.querySelector("#listNumberProduct");
  containerProductNumber.innerHTML = `
        <div style="height: 100%;width:100%;display:flex" class="numberList" id="numberList">
        </div>`;
  renderNumberPage(getProduct.length, 7);
}
function renderNumberPage(totalProduct, productOnePages) {
  let result = Math.ceil(totalProduct / productOnePages);
  const itemNumberProduct = document.querySelector("#numberList");
  itemNumberProduct.innerHTML = "";
  for (let i = 1; i <= result; i++) {
    itemNumberProduct.innerHTML += `
    <span id="number" onclick=" resultProduct(${i})">${i}</span>
    `;
  }
}
function add() {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let name = document.getElementById("NameProduct").value;
  let cost = document.getElementById("CostProduct").value;
  let stock = document.getElementById("StockProduct").value;
  let kind = document.getElementById("KindProduct").value;
  let image = document.getElementById("imageProduct").files[0];
  console.log(image);
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
      image: `../../../assets/product_new_product/${image.name}`,
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
function cancelNew() {
  document.getElementById("addNewCreate").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#ffff";
}
function editProduct(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  document.getElementById("editProduct").innerHTML = `<div class="container">
        <input type="text" value="${local[index].name}" id="ETSP"/>
        <input type="text" value="${local[index].cost}" id="EDG"/>
        <input type="text" value="${local[index].stock}" id="ETK"/>
        <input type="text" value="${local[index].category}" id="EK"/>
        <input type="text" value="${local[index].image}" id="EHA"/>
        <select id="ST">
          <option value="1">Còn hàng</option>
          <option value="2">Hết hàng</option>
        </select>
        <div class="buttonCreate">
          <input type="button" value="Edit" onclick='clickEdit(${index})' />
          <input type="button" value="Cancel" onclick='cancelEdit()'/>
        </div>
      </div>`;
  document.getElementById("editProduct").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("body").style.backgroundColor = "#979595";
  document.querySelector(".table").style.backgroundColor = "#979595";
}
function cancelEdit() {
  document.getElementById("editProduct").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#ffff";
  location.reload();
}
function clickEdit(index) {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let NameProduct = document.getElementById("ETSP").value;
  let CostProduct = document.getElementById("EDG").value;
  let StockProduct = document.getElementById("ETK").value;
  let KindProduct = document.getElementById("EK").value;
  let ImageProduct = document.getElementById("EHA").value;
  let StatusProduct = document.getElementById("ST").value;
  local[index] = {
    id: local[index].id,
    name: NameProduct,
    cost: CostProduct,
    stock: StockProduct,
    image: ImageProduct,
    category: KindProduct,
    status: StatusProduct,
  };
  document.getElementById("editProduct").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#ffff";
  document.querySelector(".table").style.backgroundColor = "#ffff";
  localStorage.setItem("product_new", JSON.stringify(local));
  resultProduct(local);
}
function delete_product(index) {
  let check = confirm("are you sure wanna delete?");
  if (check) {
    let local = JSON.parse(localStorage.getItem("product_new"));
    local[index] = {
      ...local[index],
      status: 3,
    };
    localStorage.setItem("product_new", JSON.stringify(local));
    resultProduct(local);
  }
}
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
