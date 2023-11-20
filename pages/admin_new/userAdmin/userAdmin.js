function renderUser(page = 1) {
  let local = JSON.parse(localStorage.getItem("user"));
  let currentPage = (page - 1) * 7;
  let resultUser = local.splice(currentPage, 7);
  let table = "<table>";
  let checkUser;
  let checkStatusUser;
  table +=
    "<th>ID</th>" +
    "<th>Email</th>" +
    "<th>Tên người dùng</th>" +
    "<th>Vai trò</th>" +
    "<th>Trạng thái</th>" +
    "<th colspan=`2`>Hành dộng</th>";
  ("</tr>");
  for (let i = 0; i < resultUser.length; i++) {
    if (resultUser[i].role == 2) {
      checkUser = "user";
    } else {
      checkUser = "admin";
    }
    if (resultUser[i].status == 1) {
      checkStatusUser = "đang hoạt động";
    } else {
      checkStatusUser = "<span style='color:red'>đã block</span>";
    }
    table += `<tr>
                <td>${resultUser[i].id}</td>
                <td>${resultUser[i].email}</td>
                <td>${resultUser[i].name}</td>
                <td>${checkUser}</td>
                <td>${checkStatusUser}</td>
                <td><button onclick="editUser(${i})" style="padding: 10px 15px
;background-color:orange; border-radius:10px;color:#ffff ">Edit</button></td>
                <td><button onclick="deleteUser(${i})" style="padding: 10px 15px
;background-color:red; border-radius:10px;color:#ffff">Delete</button></td>
            </tr>`;
  }
  table += "</table>";
  document.getElementById("table_list").innerHTML = table;
}
renderUser();
function renderUserNumber() {
  const getUser = getAllItems("user");
  const containerBoxUser = document.querySelector("#listNumberUser");
  containerBoxUser.innerHTML = "";
  containerBoxUser.innerHTML += `
        <div class="ItemUserNumber" id="ItemUserNumber" >
        </div>`;
  renderBoxNumberUser(getUser.length, 7);
}
function renderBoxNumberUser(UserLength, Number) {
  let result = Math.ceil(UserLength / Number);
  let getContainer = document.querySelector("#ItemUserNumber");
  getContainer.innerHTML = "";
  for (let i = 1; i <= result; i++) {
    getContainer.innerHTML += `<span class="itemNumber" onclick="renderUser(${i})">${i}</span>`;
  }
}
renderUserNumber();
function editUser(index) {
  document.getElementById("editUser").innerHTML = `<div class="container">
        <select id="KindEditUser">
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
        <select id="statusEditUser">
          <option value="1">Đang hoạt động</option>
          <option value="2">Block</option>
        </select>
        <div class="buttonCreate">
          <input type="button" value="Edit" onclick='edit(${index})' />
          <input type="button" value="Cancel" onclick='cancelNew()'/>
        </div>
      </div>`;
  document.getElementById("editUser").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").style.backgroundColor = "#979595";
}
function edit(index) {
  const getUser = getAllItems("user");
  let statusEdit = document.querySelector("#statusEditUser");
  let KindEdit = document.querySelector("#KindEditUser");
  let statusEditOptions = statusEdit.value;
  let kindEditOptions = KindEdit.value;
  getUser[index] = {
    ...getUser[index],
    role: kindEditOptions,
    status: statusEditOptions,
  };
  document.getElementById("editUser").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.backgroundColor = "#ffff";
  localStorage.setItem("user", JSON.stringify(getUser));
  renderUser();
}
function cancelNew() {
  document.getElementById("editUser").style.display = "none";
  location.reload();
}
function deleteUser(index) {
  let check = confirm("are you sure wanna delete?");
  if (check) {
    const getUser = getAllItems("user");
    getUser.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(getUser));
  }
  renderUser();
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
