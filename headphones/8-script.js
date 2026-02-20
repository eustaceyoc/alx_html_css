const hamburgerBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const btnSpans = document.querySelectorAll("button > span");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", () => { 
  btnSpans.forEach(span => {
    span.classList.toggle("active");
  });
  
  navContainer.classList.toggle("active");
  navLinks.classList.toggle("active");
});
