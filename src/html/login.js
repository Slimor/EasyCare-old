var objPeople = [
  {
    username: "Andrzej",
    password: "abcd",
  },

  {
    username: "Admin",
    password: "1234",
  },
];

function getinfo() {
  var username = document.getElementById("exampleInputUsername1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var fallog = document.getElementById("false-login");

  for (var i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      window.location.href = "../html/index.html";
      return;
    }
  }
  fallog.innerHTML = "Niepoprawny login lub hasło";
  fallog.style.color = "red";
}
