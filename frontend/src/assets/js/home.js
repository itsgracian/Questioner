function menu() {
  const close = document.querySelector(".close");
  close.style.display = "block";
  document.querySelector(".left-side").style = "transform:translateX(0%)";
}

function closeMenu() {
  const close = document.querySelector(".close");
  close.style.display = "none";
  document.querySelector(".left-side").style = "transform:translateX(-100%)";
}
