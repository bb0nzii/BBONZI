export default function initCloud() {
  const clouds = document.querySelectorAll(".hero__cloud-item");
  if (!clouds.length) return;

  clouds.forEach((cloud) => {
    // 초기 위치 랜덤
    let x = Math.random() * 200;
    let y = Math.random() * 100;

    // 속도 (아주 천천히)
    let vx = (Math.random() - 0.5) * 0.3;
    let vy = (Math.random() - 0.5) * 0.2;

    // 움직일 범위
    const maxX = 200;
    const maxY = 120;

    function animate() {
      // 위치 업데이트
      x += vx;
      y += vy;

      // 벽에 닿으면 방향 반전 (튕김)
      if (x > maxX || x < -maxX) vx *= -1;
      if (y > maxY || y < -maxY) vy *= -1;

      // transform 적용
      cloud.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
}