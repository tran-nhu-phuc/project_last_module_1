function render() {
  let local = JSON.parse(localStorage.getItem("product_new"));
  let Product = document.querySelector(".section-4");
  let container = document.getElementById("iphone");
  let container_1 = document.getElementById("mac");
  let container_2 = document.getElementById("watch");
  let container_3 = document.getElementById("ipad");
  let container_4 = document.getElementById("airtag");
  let container_5 = document.getElementById("airpod");
  let container_6 = document.getElementById("phukien");
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
  let phuKien = local.filter((item) => {
    return item.category == "phukien";
  });
  let product_a = local.filter((item) => {
    return item.category == "Product";
  });
  Product.innerHTML = "";
  container.innerHTML = "";
  container_1.innerHTML = "";
  container_2.innerHTML = "";
  container_3.innerHTML = "";
  container_4.innerHTML = "";
  container_5.innerHTML = "";
  container_6.innerHTML = "";
  iphone.forEach((element) => {
    container.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  mac.forEach((element) => {
    container_2.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });

  watch.forEach((element) => {
    container_3.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  iPad.forEach((element) => {
    container_4.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  AirTag.forEach((element) => {
    container_5.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
        `;
  });
  AirPods.forEach((element) => {
    container_1.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
          <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
    `;
  });
  phuKien.forEach((element) => {
    container_6.innerHTML += `
        <div class="container" onclick="addToDetail(${element.id})">
         <div class="content">
              <span>Mới</span>
              <strong>${element.name}</strong>
          </div>
          <img
            src="../../../${element.image}"
            alt="image"
          />
          <div class="button">
            <p>Từ 28.999.000đhoặc 1.181.000đ/thángmỗi tháng trong 24 tháng*</p>
            <button onclick="addToCart(${element.id})">Add To Cart</button>
          </div>
        </div>
    `;
  });
  product_a.forEach((element) => {
    Product.innerHTML += `
      <div class="image-scroll" style="background-image:url(../../../${element.image})" onclick="addToDetail(${element.id})">
      </div>
    `;
  });
}
render();

function addToDetail(id) {
  window.location.href = "../cart/index.html?id=" + id;
}
