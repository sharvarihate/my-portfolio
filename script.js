// Progressive enhancement: only hide sections (for the fade-in) if JS actually runs
const sections = document.querySelectorAll(".section");
sections.forEach(s => s.classList.add("fade-ready"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Highlight the active nav link based on scroll position
const navLinks = document.querySelectorAll(".nav nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});