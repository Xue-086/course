\
(function () {
  const body = document.body;
  const buttons = document.querySelectorAll("[data-lang-btn]");
  const saved = localStorage.getItem("fa-language");
  const initial = saved === "en" ? "en" : "zh";

  function applyLanguage(lang) {
    body.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.langBtn === lang));
    localStorage.setItem("fa-language", lang);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.langBtn));
  });

  applyLanguage(initial);
})();
