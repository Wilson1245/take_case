function setLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === lang
      ? "block"
      : "none";
  });
}

// 預設中文
setLang("zh");
