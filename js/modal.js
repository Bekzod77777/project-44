let numInput = document.getElementById("numInput");
let loginDiv = document.getElementById("modalLogin");
let regNum = /^\+998\((87|9[0-9])\)(\d{3}-\d{2}-\d{2})$/;
function closeModal() {
  loginDiv.style.display = "none";
}

function openModal() {
  loginDiv.style.display = "flex";
}

function checkInput() {
  if (regNum.test(numInput.value) == true) {
    closeModal();
  } else if (numInput.value == "") {
    alert("Please fill out this field");
  } else {
    alert("Wrong number!");
  }
}
