let mega = document.querySelector(".mega");
let toggle = document.querySelector(".megamenu");
mega.addEventListener("click", () => {
  toggle.classList.toggle("appear");
});
//   ====================================
let progSpans = document.querySelectorAll(".skills .skill .prog span");
let section = document.querySelector(".our-skills");

let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .container .card .number");
let start = false;

window.onscroll = () => {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 50) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY <= stats.offsetTop) {
    if (!start) {
      nums.forEach((num) => count(num));
    }
    start = true;
  }
};

function count(e) {
  let goal = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
