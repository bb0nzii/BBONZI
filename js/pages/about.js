export default function initLifeCards() {

    const cards = [
        { 
            img: "assets/about/card1.jpg",
            title: "대외활동",
            description: "춘천시민을 위한 버스킹 및 자선연주회, 뮤직비디오 기획과 촬영, 편집"
        },
        { 
            img: "assets/about/card2.jpg",
            title: "학생자치기구 활동",
            description: "학생회장, 부학생회장, 선거관리위원회 등 다양한 학생자치기구 임원 활동"
        },
        { 
            img: "assets/about/card3.jpg",
            title: "포토이즘 스튜디오 근무",
            description: "사진 촬영과 편집, 인화까지 고객님들의 특별한 순간을 기록" 
        },
        { 
            img: "assets/about/card4.jpg",
            title: "현지답사 활동",
            description: "다큐멘터리 제작 및 촬영을 위해 춘천에서 고흥, 원주까지 떠난 여정" 
        },
        { 
            img: "assets/logo/sunflower.png",
            title: "MBC 컴퓨터 아카데미 수료",
            description: "카드 내용 5" 
        },
        { 
            img: "assets/logo/sunflower.png",
            title: "카드 제목 6",
            description: "카드 내용 6" 
        },
        { 
            img: "assets/logo/sunflower.png",
            title: "카드 제목 7",
            description: "카드 내용 7" 
        },
        { 
            img: "assets/logo/sunflower.png",
            title: "파워 J의 계획력",
            description: "고등학교 1학년 때부터 매일매일 꾸준하게 작성했던 하루의 플래너와 다이어리" 
        },
    ];

    const list = document.querySelector(".life__card-list");
    if (!list) return;

    function renderCards() {
        cards.forEach(card => {
            const li = document.createElement("li");
            li.className = "life__card-item";

            li.innerHTML = `
                <img src="${card.img}" alt="${card.title}" class="life__card-img">
                <div class="life__card-text">
                    <h3 class="life__card-title text-subtitle">${card.title}</h3>
                    <p class="life__card-description text-caption">${card.description}</p>
                </div>
            `;

            list.appendChild(li);
        });
    }

    renderCards();
}