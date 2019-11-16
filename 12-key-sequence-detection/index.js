const pressed = [];
const secretCode = "hello";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    document.body.style.background = "linear-gradient(to left, #3f2,#3ff)"
  }
});
