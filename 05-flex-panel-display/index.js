const panels = document.querySelectorAll(".panel");
console.log(panels);

function onToggle() {
  this.classList.toggle("open");
}

function onActiveToggle(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", onToggle));
panels.forEach(panel =>
  panel.addEventListener("transitionend", onActiveToggle)
);
