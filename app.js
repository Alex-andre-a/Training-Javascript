const hamBurger = document.querySelector(".hamBurger");
const navLinks = document.querySelector(".navLinks");
const closeLinks = document.querySelector(".closeLinks");

hamBurger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

hamBurger.addEventListener("click", () => {
  hamBurger.style.display = "none";
});

closeLinks.addEventListener("click", () => {
  navLinks.classList.remove("active"), (hamBurger.style.display = "block");
});
