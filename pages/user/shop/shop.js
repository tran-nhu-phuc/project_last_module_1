function renderProduct() {
  // take value từ người dùng
  let local = getAllItems("product_new");
  let Product = document.querySelector(".section-4");
  let product_iPhone = document.getElementById("iphone");
  let product_Mac = document.getElementById("mac");
  let product_Watch = document.getElementById("watch");
  let product_iPad = document.getElementById("ipad");
  let product_AirTag = document.getElementById("airtag");
  let product_AirPod = document.getElementById("airpod");
  let product_accessories = document.getElementById("accessories");
  // lấy ra các phần tử theo điều kiện đã cho
  let iphone = local.filter((item) => {
    return item.category == "Phone";
  });
  let mac = local.filter((item) => {
    return item.category == "Mac";
  });
  let watch = local.filter((item) => {
    return item.category == "Watch";
  });
  let iPad = local.filter((item) => {
    return item.category == "iPad";
  });
  let AirTag = local.filter((item) => {
    return item.category == "AirTags";
  });
  let AirPods = local.filter((item) => {
    return item.category == "AirPods";
  });
  let accessories = local.filter((item) => {
    return item.category == "phukien";
  });
  let product_new = local.filter((item) => {
    return item.category == "Product";
  });
  // để value rỗng
  Product.innerHTML = "";
  product_iPhone.innerHTML = "";
  product_Mac.innerHTML = "";
  product_Watch.innerHTML = "";
  product_iPad.innerHTML = "";
  product_AirTag.innerHTML = "";
  product_AirPod.innerHTML = "";
  product_accessories.innerHTML = "";

  // render iphone
  iphone.forEach((element) => {
    product_iPhone.innerHTML += `
        <div class="container" >
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  // render mac
  mac.forEach((element) => {
    product_Mac.innerHTML += `
        <div class="container" >
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div> 
        </div>
        `;
  });
  // render watch
  watch.forEach((element) => {
    product_Watch.innerHTML += `
        <div class="container" >
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  // render ipad
  iPad.forEach((element) => {
    product_iPad.innerHTML += `
        <div class="container" >
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  // render AirTags
  AirTag.forEach((element) => {
    product_AirTag.innerHTML += `
        <div class="container" >
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  // render AirPod
  AirPods.forEach((element) => {
    product_AirPod.innerHTML += `
        <div class="container">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
    `;
  });
  // render accessories
  accessories.forEach((element) => {
    product_accessories.innerHTML += `
        <div class="container" ">
         <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img onclick="addToDetail(${element.id})"
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ  ${element.cost}đ hoặc 1.181.000đ/tháng mỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
    `;
  });
  // render các sản phẩm mới
  product_new.forEach((element) => {
    Product.innerHTML += `
      <div class="image-scroll" style="background-image:url(../../../${element.image})" onclick="addToDetail(${element.id})">
      </div>
    `;
  });
}
function addToDetail(id) {
  window.location.href = "../cart_detail/cart.html?id=" + id;
}
// render số lượng sản phẩm khi add
function renderCartNumber() {
  let userLogin = getAllItems("userLogin");
  let userLocal = getAllItems("user");
  let user = userLocal.find((item) => item.id == userLogin.id);
  let dataCart = document.querySelector("#data-cart");
  dataCart.setAttribute("data-cart", user.cart.length);
}
// kiểm tra xem người dùng có đăng nhập hay chưa nếu đăng nhập rồi thì push vào
function addToCart(id) {
  let userLogin = getAllItems("userLogin");
  if (userLogin == "") {
    alert("chưa đăng nhập");
    window.location.href = "../login/login.html";
  } else {
    let userLocal = getAllItems("user"); //lấy dữ liệu user từ local
    let productLocal = getAllItems("product_new"); //lấy dữ liệu product từ local
    let data = productLocal.find((item) => item.id == id); // find qua và lấy phần tử đầu tiên có trùng id với thằng đã đươc click
    let user = userLocal.find((item) => item.id == userLogin.id); //find qua và lấy phần tử đầu tiên có id trùng với phần tử đã được login
    let checkCart = user.cart.findIndex((item) => item.id == id);
    if (checkCart != -1) {
      user.cart[checkCart] = {
        ...user.cart[checkCart],
        quantity: user.cart[checkCart].quantity + 1,
      };
    } else {
      user.cart.push({ ...data, quantity: 1 });
    }
    let indexUser = userLocal.findIndex((item) => item.id == user.id);
    userLocal[indexUser] = user;
    localStorage.setItem("user", JSON.stringify(userLocal));
    renderCartNumber();
  }
}

function searProductData() {
  const getProduct = getAllItems("product_new");
  const onSearchProduct = document.querySelector("#searchProduct").value;
  const containerProductSearch = document.getElementById("listSearchProduct");
  let productName = getProduct.filter((item) => {
    return item.name.toLowerCase().includes(onSearchProduct);
  });
  containerProductSearch.innerHTML = "";
  productName.forEach((element) => {
    containerProductSearch.innerHTML += `<li onclick="renderToDeTailChild(${element.id})">${element.name}</li>`;
  });
}
function renderToDeTailChild(id) {
  window.location.href = `../cart_detail/cart.html?id=${id}`;
}
