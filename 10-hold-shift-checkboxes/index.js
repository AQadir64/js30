const checkboxs = document.querySelectorAll(".item input[type=checkbox]");
let lastChecked;

function handleChange(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxs.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === lastChecked || checkbox === this) {
        inBetween = !inBetween;
        console.log("starting to check them");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxs.forEach(checkbox => {
  checkbox.addEventListener("click", handleChange);
});
