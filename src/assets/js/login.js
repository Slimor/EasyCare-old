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

  for (var i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      window.location.href = "../html/index.html";
      return;
    }
  }

  alert("Niepoprawne hasło");
  console.log("Niepoprawne hasło");
}
