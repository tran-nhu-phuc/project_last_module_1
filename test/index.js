const products = [
  {
    id: 1,
    nameProduct: "iphoneX",
    price: 49,
    img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    category: "Phone",
    stock: 20,
  },
  {
    id: 2,
    nameProduct: "iphone12",
    price: 89,
    img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/d/o/download_2__1_27.png",
    category: "Phone",
    stock: 20,
  },
  {
    id: 3,
    nameProduct: "iphone15",
    price: 999,
    img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305659/s16/iphone-15-pro-max-black-thumbtz-650x650.png",
    category: "Phone",
    stock: 20,
  },
  {
    id: 4,
    nameProduct: "iphone11",
    price: 60,
    img: "https://onewaymobile.vn/images/products/2022/08/20/original/iphone-11-gold_1660960076.png",
    category: "Phone",
    stock: 20,
  },
  {
    id: 5,
    nameProduct: "Macbook2020",
    price: 1000,
    img: "https://cdn.sforum.vn/sforum/wp-content/uploads/2020/03/CyrDwwdxn5Z7HEH3heMd9F-970-80.jpg",
    category: "Macbook",
    stock: 22,
  },
  {
    id: 6,
    nameProduct: "Macbook2018",
    price: 500,
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Air_15_2023_M2_16_GB/IMG_9060.JPG",
    category: "Macbook",
    stock: 10,
  },
];

const cart = [
  {
    id: 6,
    nameProduct: "Macbook2018",
    price: 500,
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Air_15_2023_M2_16_GB/IMG_9060.JPG",
    category: "Macbook",
    stock: 10,
    quantity: 1,
  },
];

if (!JSON.parse(localStorage.getItem("cart"))) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

if (!JSON.parse(localStorage.getItem("productList"))) {
  localStorage.setItem("productList", JSON.stringify(products));
}

function renderProducts() {
  const dataLocal = JSON.parse(localStorage.getItem("productList"));

  const containerProduct = document.querySelector("#products");

  containerProduct.innerHTML = "";

  dataLocal.forEach((item, index) => {
    containerProduct.innerHTML += `
        <figure class="product">
            <img onclick="renderDetail(${item.id})" src=${item.img} alt="">
            <figcaption>
                <h3>${item.nameProduct}</h3>
                <p><b>Giá :</b> ${item.price}</p>
                <p><b>Còn lại :</b> ${item.stock}</p>
                <button onclick="addToCart(${item.id})">Add</button>
            </figcaption>
        </figure>
        `;
  });
}

function renderCart() {
  const dataLocal = JSON.parse(localStorage.getItem("cart"));
  const totalPriceUI = document.querySelector("#total-price");
  const containerProduct = document.querySelector("tbody");

  containerProduct.innerHTML = "";

  dataLocal.forEach((item, index) => {
    containerProduct.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.nameProduct}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
            <td><button onclick="deleteFromCart(${item.id})">Huỷ</button></td>
         </tr>
        `;
  });

  let totalPrice = 0;
  dataLocal.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  totalPriceUI.innerText = totalPrice;
}

//chạy khởi tạo ban đầu để xử lí UI
renderCart();
renderProducts();

function addToCart(id) {
  const dataLocal = JSON.parse(localStorage.getItem("productList"));
  const myCart = JSON.parse(localStorage.getItem("cart"));

  const myProduct = dataLocal.find((item, index) => {
    return item.id == id;
  }); // tìm được object của sản phẩm muốn mua

  const checkCart = myCart.find((item) => {
    return item.id == id;
  }); //kiểm tra xem trong cart sản phẩm mình đang mua có hay chưa

  if (checkCart) {
    const newCart = myCart.map(function (item, index) {
      if (item.id == myProduct.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    myCart.push({
      ...myProduct, //toán tử spread => dùng để copy toàn bộ object hoặc array
      quantity: 1,
    });
    localStorage.setItem("cart", JSON.stringify(myCart));
  }

  renderCart();
}

function deleteFromCart(id) {
  const dataLocal = JSON.parse(localStorage.getItem("cart"));

  const newData = dataLocal.filter((item) => {
    return item.id != id;
  });

  localStorage.setItem("cart", JSON.stringify(newData));
  renderCart();
}

function renderDetail(id) {
  window.location.href = "./detail.html?id=" + id;
}
