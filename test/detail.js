function renderDetailProduct() {
  const dataLocal = JSON.parse(localStorage.getItem("productList"));

  const container = document.querySelector(".detail-product");

  const getUrl = window.location.href;
  console.log(getUrl);
  let id = getUrl.split("=")[1];
  console.log(id);

  const product = dataLocal.find((item) => {
    return item.id == id;
  });

  container.innerHTML = `
    <img src=${product.img} alt="">
     <div>
        <h3 id="name-product">${product.nameProduct}</h3>
        <p id="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repellat vitae eos harum?
            Quo expedita fugiat tempore tenetur libero non quaerat. Sunt ipsum tenetur ipsa corrupti earum
            architecto at numquam.</p>
        <p><strong>Giá:</strong> ${product.price}</p>
        <p><strong>Số lượng còn lại:</strong>${product.stock}</p>
        <button>Mua</button>
    </div>
    `;
  console.log(product);
}

renderDetailProduct();
