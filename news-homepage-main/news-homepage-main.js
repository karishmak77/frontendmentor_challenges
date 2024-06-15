document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const sideBar = document.getElementById("side-bar");
  const closeIcon = document.getElementById("close-icon");
  const overlay = document.getElementById("overlay");

  menuIcon.addEventListener("click", function () {
    sideBar.classList.add("show");
    overlay.classList.add("show");
  });

  closeIcon.addEventListener("click", function () {
    sideBar.classList.remove("show");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", function () {
    sideBar.classList.remove("show");
    overlay.classList.remove("show");
  });
});
