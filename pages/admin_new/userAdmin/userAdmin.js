function renderUser() {
  let local = JSON.parse(localStorage.getItem("user"));
  let table = "<table>";
  let checkUser;
  let checkStatusUser;
  table +=
    "<th>ID</th>" +
    "<th>Email</th>" +
    "<th>Tên người dùng</th>" +
    "<th>Vai trò</th>" +
    "<th>Trạng thái</th>" +
    "<th colspan='2'>Hành dộng</th>";
  ("</tr>");
  for (let i = 0; i < local.length; i++) {
    if (local[i].role == 2) {
      checkUser = "user";
    } else {
      checkUser = "admin";
    }
    if (local[i].status == 1) {
      checkStatusUser = "đang hoạt động";
    } else {
      checkStatusUser = "<span style='color:red'>đã block</span>";
    }
    table += `<tr>
                <td>${local[i].id}</td>
                <td>${local[i].email}</td>
                <td>${local[i].name}</td>
                <td>${checkUser}</td>
                <td>${checkStatusUser}</td>
                <td><button onclick="editUser(${i})" style="padding: 10px 20px
;background-color:orange; border-radius:10px;color:#ffff ">Edit</button></td>
                <td><button onclick="deleteUser(${i})" style="padding: 10px 20px
;background-color:red; border-radius:10px;color:#ffff">Delete</button></td>
            </tr>`;
  }
  table += "</table>";
  document.getElementById("table_list").innerHTML = table;
}
renderUser();
function editUser(index) {
  document.getElementById("editUser").innerHTML = `<div class="container">
        <input type="text" placeholder="Vai trò" id="kindUser"/>
        <input type="text" placeholder="Trạng thái" id="statusUser"/>
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
  let roleUser = document.getElementById("kindUser");
  let statusUser = document.getElementById("statusUser");
  getUser[index] = {
    ...getUser[index],
    role: roleUser.value,
    status: statusUser.value,
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
