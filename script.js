const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `menuLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });
};
navSlide();

const slider = document.querySelectorAll(".slide");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

slider.forEach((slide) => {
  appearOnScroll.observe(slide);
});
