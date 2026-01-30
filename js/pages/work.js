import { worksData } from "../data/works-data.js";

export default function initWorkPage() {
  const list = document.querySelector(".work__card-list");
  const buttons = document.querySelectorAll(".work__tab-button");

  // 툴 아이콘 자동 매칭
  const toolIcons = {
    html: "assets/tools/html.png",
    css: "assets/tools/css.png",
    scss: "assets/tools/scss.png",
    js: "assets/tools/js.png",
    jquery: "assets/tools/jquery.png",
    vue: "assets/tools/vue.png",
    vuetify: "assets/tools/vuetify.png",
    react: "assets/tools/react.png",
    firebase: "assets/tools/firebase.png",
    figma: "assets/tools/figma.png",
    photoshop: "assets/tools/photoshop.png",
    illustrator: "assets/tools/illustrator.png",
    premierepro: "assets/tools/premierepro.png",
    aftereffect: "assets/tools/aftereffect.png",
    medibang: "assets/tools/medibang.png",
    procreate: "assets/tools/procreate.png",
  };

  // work 페이지 아니면 실행 안 함
  if (!list || !buttons.length) return;

  /* ============================
     카드 출력 함수
  ============================ */
  function renderCards(category) {
    list.innerHTML = "";

    // 카테고리별 필터링
    const filtered = worksData.filter(
      (work) => work.category === category
    );

    // 작업물이 없을 때
    if (!filtered.length) {
      list.innerHTML = `<p class="work__empty">작업물이 준비 중입니다.</p>`;
      return;
    }

    // 카드 반복 출력
    filtered.forEach((work) => {
      const li = document.createElement("li");
      li.className = "work__card";

      li.innerHTML = `
        <div class="work__card-image">
          <img src="${work.image}" alt="${work.title}">
        </div>

        <div class="work__card-body">

          <h3 class="work__card-title text-subtitle">
            ${work.title}
          </h3>

          <p class="work__card-desc">
            ${work.desc}
          </p>

          <p class="work__card-date">
            ${work.date}
          </p>

          <!-- 사용 툴 아이콘 출력 -->
          <ul class="work__card-tools">
            ${(work.tools ?? [])
              .map((tool) => {
                // 아이콘 없으면 default 처리
                const iconPath =
                  toolIcons[tool] ?? "assets/tools/default.png";

                return `
                  <li class="work__tool">
                    <img
                      src="${iconPath}"
                      alt="${tool}"
                      class="work__tool-icon"
                    >
                  </li>
                `;
              })
              .join("")}
          </ul>

          <!-- 링크가 있을 때만 버튼 출력 -->
          ${
            work.link
              ? `
                <a href="${work.link}" target="_blank" class="work__card-link">
                  →
                </a>
              `
              : ""
          }

        </div>
      `;

      list.appendChild(li);
    });
  }

  /* ============================
     탭 기능
  ============================ */
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // active 초기화
      buttons.forEach((b) =>
        b.classList.remove("is-active")
      );

      // 클릭한 버튼 active
      btn.classList.add("is-active");

      // 해당 카테고리 렌더링
      const category = btn.dataset.tab;
      renderCards(category);
    });
  });

  /* ============================
     초기 실행
  ============================ */

  // 첫 버튼 active 표시
  buttons[0].classList.add("is-active");

  // 첫 화면 web 출력
  renderCards("coding");
}
