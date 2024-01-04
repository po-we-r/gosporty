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
  