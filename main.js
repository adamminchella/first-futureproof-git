const hamburgerIcon = document.querySelector(".hamburger");
const navList = document.querySelector("ul");

hamburgerIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
});
