// drumsss

const snare = document.querySelector("#Snare");
const floorTom = document.querySelector("#Floor-Tom");
const hiHat = document.querySelector("#Hi-Hat");
const kick = document.querySelector("#Kick");
const crash = document.querySelector("#Crash");
const tomLeftAll = document.querySelector("#Tom-Left-All");
const tomRightAll = document.querySelector("#Tom-Right-All");

// sounds

const snareAudio = document.querySelector("#Snare-Audio");
const floorTomAudio = document.querySelector("#Floor-Tom-Audio");
const hiHatAudio = document.querySelector("#Hi-Hat-Closed-Audio");
const kickAudio = document.querySelector("#Kick-Audio");
const crashAudio = document.querySelector("#Crash-Audio");
const tomLeftAllAudio = document.querySelector("#Big-Rack-Tom-Audio");
const tomRightAllAudio = document.querySelector("#Small-Rack-Tom-Audio");

// sound function

function addEvent(element, audio) {
  element.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    element.classList.add("playing");
    setTimeout(() => {
      element.classList.remove("playing");
    }, 0.05);
  });
}

window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const drum = document.querySelector(`g[data-key="${e.keyCode}`);
  const key = document.querySelector(`div[data-key="${e.keyCode}`);
  drum.classList.add("playing");
  key.classList.add("playing");
  setTimeout(() => {
    drum.classList.remove("playing");
    key.classList.remove("playing");
  }, 0.05);
});

// invoking of function

addEvent(Snare, snareAudio);
addEvent(floorTom, floorTomAudio);
addEvent(hiHat, hiHatAudio);
addEvent(kick, kickAudio);
addEvent(crash, crashAudio);
addEvent(tomLeftAll, tomLeftAllAudio);
addEvent(tomRightAll, tomRightAllAudio);
