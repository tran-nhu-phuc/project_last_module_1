// Định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
const orders = [
  {
    carts: [],
    idOrder: 1,
    idUser: 1,
    totalPrice: 123123,
    address: "123",
    phoneNumber: "123123",
    status: 1, //1 la da nhan don, 2 dang giao, 3 la thanh cong
    date: "ngay thanh toan",
    payment: 1, //1 thanh toasn khi nhan hang, 2 thanh toan online
  },
];

if (!JSON.parse(localStorage.getItem("orders"))) {
  localStorage.setItem("orders", JSON.stringify(orders));
}
