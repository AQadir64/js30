const secHand = document.querySelector(".hand_sec");
const minHand = document.querySelector(".hand_min");
const hourHand = document.querySelector(".hand_hour");

const setDate = () => {
  const now = new Date();

  // seconds
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegree}deg)`;

  // mins
  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  // hours 
  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

};
setInterval(setDate, 1000);
