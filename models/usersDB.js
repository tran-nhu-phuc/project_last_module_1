let user = [
  {
    id: 1,
    name: "trannhuphuc",
    email: "trannhuphucgmail.com",
    number: "091238123",
    password: "trannhuphuc",
    role: 1,
    cart: [],
    status: 1,
  },
];

if (!JSON.parse(localStorage.getItem("user"))) {
  localStorage.setItem("user", JSON.stringify(user));
}
