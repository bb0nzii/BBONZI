// js/app.js

import { includeHTML } from "./common/include.js";

// include 이후 실행해야 하는 것들
import { initHeader } from "./components/header.js";
import { initScrollTop } from "./common/scroll-top.js";
import initHeaderScroll from "./components/header-scroll.js";

// 모든 페이지 공통 기능
import initScrollAnimate from "./common/scroll-animate.js";
import initCursor from "./common/cursor.js";

// 페이지별 기능
import initMainPage from "./pages/main.js";

document.addEventListener("DOMContentLoaded", () => {
    // -- 1. 헤더/푸터 include 먼저 실행
    includeHTML(() => {
        initHeader();
        initScrollTop();
        initHeaderScroll();
    });

    // -- 2. 공통 기능은 그냥 실행
    initScrollAnimate();
    initCursor();

    // -- 3. main 페이지에서만 실행할 기능
    if (document.body.classList.contains("page--main")) {
        initMainPage();
    }
});