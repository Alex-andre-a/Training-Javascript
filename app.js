const hamBurger = document.getElementById("hamBurger");
const navBar = document.getElementById("navBar");
const titre = document.querySelector(".titrePrincipal");


hamBurger.onclick = function () {
  hamBurger.classList.toggle("active"),
    navBar.classList.toggle("active")
    titre.style.opacity = 0.1;
};


document.onclick = function (e) {
  if (e.target.id !== "navBar" && e.target.id !== "hamBurger") {
    hamBurger.classList.remove("active");
    navBar.classList.remove("active");
    titre.style.opacity = 1;
  }
};

