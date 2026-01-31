import initScrollAnimate from "../common/scroll-animate.js";

export default function initWorkspace() {
  const list = document.querySelector("#workspace-list");

  if (!list) return;

  const workspaceItems = [
    {
      title: "Coding",
      desc: "html, Vue 등을 활용한 웹사이트입니다.",
      link: "work.html#coding",
      image: "assets/workspace/thumnail/thumnail.jpg"
    },
    {
      title: "Web Content",
      desc: "Photoshop, Illustrator 등을 활용한 웹 콘텐츠입니다.",
      link: "work.html#content",
      image: "assets/workspace/thumnail/thumnail.jpg"
    },
    {
      title: "Logo Design",
      desc: "Medibang Paint, Illustrator 등을 활용한 로고 디자인입니다.",
      link: "work.html#logo",
      image: "assets/workspace/thumnail/thumnail.jpg"
    },
    {
      title: "Video Content",
      desc: "Premiere Pro, After Effect 등을 활용한 영상 콘텐츠입니다.",
      link: "work.html#video",
      image: "assets/workspace/thumnail/thumnail.jpg"
    },
  ];

  list.innerHTML = workspaceItems
    .map(
      (item) => `
        <li class="workspace__item scroll-animate">
            <div class="workspace__image-wrapper">
                <img src="${item.image}" alt="${item.title}" class="workspace__image">
            </div>

            <div class="workspace__content">
                <div class="workspace__text">
                    <h3 class="workspace__subtitle">${item.title}</h3>

                    <p class="workspace__description text-caption">
                        ${item.desc}
                    </p>
                </div>

                <a class="workspace__link" href="${item.link}">
                    <img src="assets/icon/arrow-right.svg" class="workspace__link-btn">
                </a>
            </div>
        </li>
      `
    )
    .join("");

    initScrollAnimate();
}