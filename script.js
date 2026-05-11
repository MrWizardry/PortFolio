document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  // Dropdowns genéricos (funciona para qualquer quantidade)
document.querySelectorAll(".articles-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const list = toggle.nextElementSibling;
    const isOpen = list.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
  });
});

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.offsetHeight;

      if (
        window.scrollY >= sectionTop - 150 &&
        window.scrollY < sectionTop + sectionHeight - 150
      ) {
        current = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});