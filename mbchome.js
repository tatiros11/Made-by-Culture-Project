const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
