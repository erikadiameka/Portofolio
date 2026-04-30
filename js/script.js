/* ── AOS ── */
AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });

/* ── Loader ── */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1500);
});

/* ── Navbar scroll ── */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

/* ── Navbar scroll ── */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);

  // Munculkan/Sembunyikan tombol STT
  const sttBtn = document.getElementById("stt");
  if (window.scrollY > 400) {
    sttBtn.classList.add("visible");
  } else {
    sttBtn.classList.remove("visible");
  }

  // Logika active link
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });

  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}); // Tutup fungsi scroll di sini

/* ── Scroll-to-top Klik (Taruh DI LUAR fungsi scroll) ── */
const stt = document.getElementById("stt");
if (stt) {
  stt.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ── Hamburger / mobile menu ── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open")
    ? "hidden"
    : "";
});

function closeMobile() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Theme toggle ── */
const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "light" : "dark",
  );
  icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
});

/* ── Scroll-to-top ── */
document.getElementById("stt").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ── Skill bar animation ── */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".skill-fill").forEach((fill) => {
          fill.style.width = fill.dataset.pct + "%";
        });
        skillObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll("#skills").forEach((el) => skillObserver.observe(el));

/* ── Contact form ── */
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.classList.add("success");
  e.target.reset();
  setTimeout(() => msg.classList.remove("success"), 5000);
}
