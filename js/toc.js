function t(){const t=document.querySelector(".post-page-container"),e=document.querySelector(".toc-content-container");KEEP.utils.hasToc?(KEEP.utils={...KEEP.utils,findActiveIndexByTOC(){if(!Array.isArray(KEEP.utils.sections))return;let t=KEEP.utils.sections.findIndex((t=>t&&t.getBoundingClientRect().top-20>0));-1===t?t=KEEP.utils.sections.length-1:t>0&&t--,this.activateNavByIndex(t)},registerSidebarTOC(){KEEP.utils.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map((t=>{const e=document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""));return t.addEventListener("click",(o=>{o.preventDefault();let n=window.scrollY;n=0===n?-20:n;const i=e.getBoundingClientRect().top+n;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:i-10,complete:()=>{history.pushState(null,document.title,t.href),setTimeout((()=>{KEEP.utils.pageTop_dom.classList.add("hide")}),150)}})})),e}))},activateNavByIndex(t){const e=document.querySelectorAll(".post-toc li a.nav-link")[t];if(!e||e.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach((t=>{t.classList.remove("active","active-current")})),e.classList.add("active","active-current");let o=e.parentNode;for(;!o.matches(".post-toc");)o.matches("li")&&o.classList.add("active"),o=o.parentNode;const n=document.querySelector(".post-toc-wrap");window.anime({targets:n,duration:200,easing:"linear",scrollTop:n.scrollTop-n.offsetHeight/2+e.getBoundingClientRect().top-n.getBoundingClientRect().top})},handleShowWhenHasToc(){const t=()=>{const t=KEEP.getStyleStatus(),e="isShowToc";t&&t.hasOwnProperty(e)?KEEP.utils.postHelper.hasToc(t[e]):KEEP.utils.postHelper.hasToc(!0)},e="init_open";KEEP.theme_config.toc.hasOwnProperty(e)?KEEP.theme_config.toc[e]?t():KEEP.utils.postHelper.hasToc(!1):t()}},KEEP.utils.handleShowWhenHasToc(),KEEP.utils.registerSidebarTOC()):e&&t&&t.removeChild(e)}!0===KEEP.theme_config.pjax.enable&&KEEP.utils?t():window.addEventListener("DOMContentLoaded",t);