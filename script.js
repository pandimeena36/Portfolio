// Mouse Wheel Support
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    currentSection++;
  } else {
    currentSection--;
  }

  scrollToSection(currentSection);
});

// Keyboard Support
window.addEventListener("keydown", (e) => {
  if (isScrolling) return;

  if (e.key === "ArrowDown" || e.key === "PageDown") {
    currentSection++;
  }

  if (e.key === "ArrowUp" || e.key === "PageUp") {
    currentSection--;
  }

  scrollToSection(currentSection);
});
// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing Effect for Hero Section
const words = ["IoT Enthusiast", "Data Analyst", "Python Developer"];
let i = 0;
function typeWriter() {
  let word = words[i];
  let j = 0;
  let typingElem = document.getElementById('typing');
  typingElem.innerHTML = "";
  function type() {
    if (j < word.length) {
      typingElem.innerHTML += word[j];
      j++;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        i = (i + 1) % words.length;
        typeWriter();
      }, 2000);
    }
  }
  type();
}
typeWriter();
