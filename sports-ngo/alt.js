document.addEventListener('DOMContentLoaded', function () {
    const sentences = [
      'Trains',
      'Builds',
      'Guides',
      'Inspires',
      'Connects'
    ];
    
    let currentIndex = 0;
    let offset = 0;
    const sentenceElement = document.querySelector('.sentence');
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 70;
  
    const updateSentence = () => {
      sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
    };
  
    const handleAnimation = () => {
      if (forwards) {
        if (offset >= sentences[currentIndex].length) {
          if (++skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else if (offset === 0) {
        forwards = true;
        currentIndex = (currentIndex + 1) % sentences.length;
      }
  
      if (skipCount === 0) {
        forwards ? offset++ : offset--;
      }
  
      updateSentence();
    };
  
    setInterval(handleAnimation, speed);
  });



  const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

// Function to animate the count effect
function animateValue(id, start, end, duration) {
    if (start === end) return;
  
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const element = document.getElementById(id);
    let counter = start;
  
    const timer = setInterval(() => {
      counter += increment;
      element.textContent = counter;
  
      if (counter === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Start the count animation
  animateValue('appliedCount', 0, 520, 2000); // Example: Count from 0 to 100 in 2 seconds
  animateValue('graduatedCount', 0, 110, 1500); // Example: Count from 0 to 50 in 1.5 seconds
  animateValue('totalGraduates', 0, 30, 1000); // Example: Count from 0 to 30 in 1 second
  