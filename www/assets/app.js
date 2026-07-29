(() => {
  "use strict";

  const config = window.IRANLEGAL_APP_CONFIG;
  const toolsGrid = document.getElementById("toolsGrid");
  const navigationLoading = document.getElementById("navigationLoading");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function navigateInsideApp(url) {
    navigationLoading.classList.remove("hidden");
    window.setTimeout(() => {
      window.location.assign(url);
    }, 40);
  }

  function createToolCard(tool) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tool-card";
    button.setAttribute("aria-label", `بازکردن ${tool.title}`);
    button.innerHTML = `
      <span class="tool-image-wrap">
        <img class="tool-image" src="${escapeHtml(tool.image)}" alt="" loading="lazy" decoding="async" />
      </span>
      <span class="tool-content">
        <strong>${escapeHtml(tool.title)}</strong>
        <small>${escapeHtml(tool.description)}</small>
      </span>
    `;
    button.addEventListener("click", () => navigateInsideApp(tool.url));
    return button;
  }

  toolsGrid.replaceChildren(...config.tools.map(createToolCard));

  document.querySelector('[data-nav="home"]').addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('a[data-app-link="true"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateInsideApp(link.href);
    });
  });

  window.addEventListener("pageshow", () => navigationLoading.classList.add("hidden"));
})();
