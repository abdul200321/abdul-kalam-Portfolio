/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const animatedElements = document.querySelectorAll(
  ".fade-in, .slide-left, .slide-right, .slide-up"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.12}s`;
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  }
);

animatedElements.forEach(el => observer.observe(el));

/* =========================
   SMOOTH NAVIGATION SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
