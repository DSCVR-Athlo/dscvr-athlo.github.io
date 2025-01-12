document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.href;
      if (url.includes("#")) return;

      event.preventDefault(); // Evita a navegação padrão
      window.parent.postMessage({ type: "navigate", url }, "*"); // Envia a URL para o parent (janela principal)
    });
  });
});