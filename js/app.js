const btn = document.getElementById("navbar_btn");
let a = 0;
function openMenu() {
  if (a == 1) {
    document.getElementById("navbarMenu").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("navbarMenu").style.display = "none";
    return (a = 1);
  }
}

btn.addEventListener("click", openMenu);

const footer_btn = document.getElementById("footer__btn");

let b = 0;

function openFooter() {
  if (b == 1) {
    document.getElementById("footerMenu").style.display = "inline";
    return (b = 0);
  } else {
    document.getElementById("footerMenu").style.display = "none";
    return (b = 1);
  }
}
footer_btn.addEventListener("click", openFooter);
