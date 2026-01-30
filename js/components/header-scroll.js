export default function initHeaderScroll() {
  const header = document.querySelector(".header");
  const profileSection = document.querySelector(".profile");

  if (!header || !profileSection) return;

  function onScroll() {
    const triggerPoint = profileSection.offsetTop - header.offsetHeight;

    if (window.scrollY >= triggerPoint) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll);

  // 새로고침했을 때 위치 반영
  onScroll();
}