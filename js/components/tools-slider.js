export default function initToolsSlider() {
  const tools = [
    { name: "Photoshop", icon: "assets/tools/photoshop.png" },
    { name: "Lightroom", icon: "assets/tools/lightroom.png"},
    { name: "Illustrator", icon: "assets/tools/illustrator.png" },
    { name: "Premiere Pro", icon: "assets/tools/premierepro.png"},
    { name: "After Effect", icon: "assets/tools/aftereffect.png"},
    { name: "Figma", icon: "assets/tools/figma.png"},
    { name: "Procreate", icon: "assets/tools/procreate.png"},
    { name: "Medibang", icon: "assets/tools/medibang.png"},
    { name: "VS Code", icon: "assets/tools/vscode.png"},
    { name: "HTML", icon: "assets/tools/html.png"},
    { name: "CSS", icon: "assets/tools/css.png" },
    { name: "SCSS", icon: "assets/tools/scss.png"},
    { name: "Java Script", icon: "assets/tools/js.png"},
    { name: "jQuery", icon: "assets/tools/jquery.png"},
    { name: "React", icon: "assets/tools/react.png"},
    { name: "Vue", icon: "assets/tools/vue.png"},
    { name: "Vuetify", icon: "assets/tools/vuetify.png"},
    { name: "Bootstrap", icon: "assets/tools/bootstrap.png"},
    { name: "Firebase", icon: "assets/tools/firebase.png"},
  ];

  const list = document.querySelector("#tools-list");
  if (!list) return;

  // 1) li 생성 함수
  function renderTools() {
    tools.forEach((tool) => {
      const li = document.createElement("li");
      li.classList.add("tools__item");

      li.innerHTML = `
        <img class="tools__icon" src="${tool.icon}" alt="${tool.name}">
        <p class="tools__name text-caption">${tool.name}</p>
      `;

      list.appendChild(li);
    });
  }

  // 2) 두 번 렌더링해서 무한롤링 가능하게
  renderTools();
  renderTools();
}