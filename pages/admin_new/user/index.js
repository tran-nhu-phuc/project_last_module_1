let arr = [
  {
    id: 1,
    nameLogin: 1,
    name: "a",
    email: 1,
    role: 1,
    date: 1,
    action: false,
  },
  {
    id: 1,
    nameLogin: 1,
    email: 1,
    name: "a",
    role: 1,
    date: 1,
    action: false,
  },
];
// localStorage.setItem("user", JSON.stringify(arr));
// if (!JSON.parse(localStorage.getItem("user"))) {
//   localStorage.setItem("user", JSON.stringify(arr));
// }

function render() {
  let local = JSON.parse(localStorage.getItem("user"));
  let table = "<table>";
  table +=
    "<th>ID</th>" +
    "<th>Tên đăng nhập</th>" +
    "<th>Email</th>" +
    "<th>Tên người dùng</th>" +
    "<th>Vai trò</th>" +
    "<th>Ngày đăng ký</th>" +
    "<th>Trạng thái</th>" +
    "<th colspan='2'>Hành dộng</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    table += `<tr>
                <td>${local[i].id}</td>
                <td>${local[i].nameLogin}</td>
                <td>${local[i].email}</td>
                <td>${local[i].name}</td>
                <td>${local[i].role}</td>
                <td>${local[i].date}</td>
                <td>${local[i].action}</td>
                <td>View</td>
                <td>turn on</td>
            </tr>`;
  }
  table += "</table>";
  document.getElementById("table_list").innerHTML = table;
}
render();
