export default function initCursor() {
  const maxTrails = 5;
  const trails = [];

  document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("img");

    trail.src = "/assets/logo/sunflower.png"; // ⚠️ 경로 수정 중요
    trail.style.position = "absolute";
    trail.style.width = "80px";
    trail.style.pointerEvents = "none";
    trail.style.left = `${e.pageX - 40}px`;
    trail.style.top = `${e.pageY - 40}px`;
    trail.style.opacity = "0.25";
    trail.style.transition = "opacity 0.5s ease-out";
    trail.style.zIndex = 1000;

    document.body.appendChild(trail);
    trails.push(trail);

    // fade out
    requestAnimationFrame(() => {
      trail.style.opacity = "0";
    });

    // 제거
    setTimeout(() => {
      trail.remove();

      const index = trails.indexOf(trail);
      if (index > -1) trails.splice(index, 1);
    }, 500);

    // 최대 개수 초과 제거
    if (trails.length > maxTrails) {
      const oldest = trails.shift();
      if (oldest) oldest.remove();
    }
  });
}
