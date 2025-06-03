document.addEventListener('DOMContentLoaded', function() {
  let currentPageIndex = 0;
  const pages = document.querySelectorAll('.page');
  const dots = document.querySelectorAll('.dot');
  let isTransitioning = false;

  // Initialize the first page
  pages[0].classList.add('active');
  dots[0].classList.add('active');

  // Navigation functions
  function navigateToPage(index) {
    if (index >= 0 && index < pages.length && !isTransitioning) {
      isTransitioning = true;
      
      // Remove active class from current page and dot
      pages[currentPageIndex].classList.remove('active');
      dots[currentPageIndex].classList.remove('active');
      
      // Add active class to new page and dot
      pages[index].classList.add('active');
      dots[index].classList.add('active');
      
      // Add prev class to previous page
      if (index > currentPageIndex) {
        pages[currentPageIndex].classList.add('prev');
      } else {
        pages[currentPageIndex].classList.remove('prev');
      }
      
      // Update current page index
      currentPageIndex = index;
      
      // Reset transition flag after animation completes
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }

  function goToNextPage() {
    navigateToPage(currentPageIndex + 1);
  }

  function goToPrevPage() {
    navigateToPage(currentPageIndex - 1);
  }

  function startOver() {
    navigateToPage(0);
  }

  // Set up event listeners for navigation buttons
  document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', goToNextPage);
  });

  document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', goToPrevPage);
  });

  document.querySelectorAll('.begin-button').forEach(button => {
    button.addEventListener('click', goToNextPage);
  });

  document.querySelectorAll('.start-over-button').forEach(button => {
    button.addEventListener('click', startOver);
  });

  // Set up event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      navigateToPage(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      goToNextPage();
    } else if (e.key === 'ArrowLeft') {
      goToPrevPage();
    }
  });

  // Image zoom effect
  document.querySelectorAll('.dream-image').forEach(image => {
    image.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });
});
