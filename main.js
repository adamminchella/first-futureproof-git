const hamburgerIcon = document.querySelector(".hamburger");
const navList = document.querySelector("ul");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  navList.classList.toggle("active");
});
