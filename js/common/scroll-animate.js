// scroll-animate.js
export default function initScrollAnimate() {
  const targets = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  targets.forEach((target) => observer.observe(target));
}