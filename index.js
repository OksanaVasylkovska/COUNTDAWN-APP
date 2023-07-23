function newYearCountdown() {
  const newYearDate = new Date("January 01, 2024 00:00");
  const now = new Date();
  const diff = newYearDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHours = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(diff / msInDay);
  document.querySelector(".days").textContent = displayDay;

  const displayHours = Math.floor((diff % msInDay) / msInHours);
  document.querySelector(".hours").textContent = displayHours;

  const displayMinute = Math.floor((diff % msInHours) / msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
  document.querySelector(".seconds").textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timeID);
    happyNewYear();
  }
}

let timeID = setInterval(newYearCountdown, 1000);
newYearCountdown();

function happyNewYear() {
  const heading = document.querySelector("h1");
  heading.textContent = "З НОВИМ РОКОМ!!!!";
  heading.classList.add("red");
}

const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
