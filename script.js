document.addEventListener('DOMContentLoaded', function() {
    const nameContainer = document.querySelector('.name');
    nameContainer.style.animation = 'moveUp 1s forwards';
  
    nameContainer.addEventListener('animationend', function() {
      let spans = nameContainer.querySelectorAll('span:not(.space)'); // Exclut la classe .space
      spans.forEach((span, idx) => {
        span.style.animation = `popIn 0.5s forwards ${idx * 0.1 + 1}s`; // Start after 1 second
      });
    });
  });