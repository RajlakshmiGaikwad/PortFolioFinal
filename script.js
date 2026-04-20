// Smooth scroll for anchor links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const textArray = [
  "Hello World!",
  "Welcome to My Portfolio",
  "I'm Rajlakshmi Gaikwad"
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeAnimation() {
  currentText = textArray[index];

  const display = document.getElementById("animated-text");

  if (isDeleting) {
    display.textContent = currentText.substring(0, charIndex--);
  } else {
    display.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeAnimation, 1000); // Pause before deleting
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
  }

  setTimeout(typeAnimation, isDeleting ? 50 : 100);
}

// Start animation after page load
window.onload = typeAnimation;