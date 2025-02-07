
  // JavaScript for slider functionality start
  const sliderItems = document.querySelectorAll('.kcledx_slider-item');
  const sliderNav = document.querySelector('.kcledx_slider-nav');
  const prevBtn = document.querySelector('.kcledx_slider-prev');
  const nextBtn = document.querySelector('.kcledx_slider-next');
  const textContainers = document.querySelectorAll('.kcledx_text-container');

  let currentSlide = 0;

  // Create navigation dots
  sliderItems.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('kcledx_slider-nav-dot');
    if (index === 0) dot.classList.add('kcledx_active');
    sliderNav.appendChild(dot);
  });

  const sliderNavDots = document.querySelectorAll('.kcledx_slider-nav-dot');

  function showSlide(n) {
    sliderItems.forEach((slide, i) => {
      slide.classList.toggle('kcledx_active', i === n);
    });
    sliderNavDots.forEach((dot, i) => {
      dot.classList.toggle('kcledx_active', i === n);
    });
    textContainers.forEach((container, i) => {
      container.classList.toggle('kcledx_hidden', i !== n);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentSlide);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  sliderNavDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // setInterval(nextSlide, 15000); // Auto-advance the slider every 15 seconds

// kcledXjavascript_test1.js
if (!window.accordionScriptLoaded) {
  window.accordionScriptLoaded = true;

  (function() {
    function attachAccordionListeners() {
      var checkboxes = document.querySelectorAll('.kcledx_accordianedx input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          var container = this.closest('.kcledx_accordianedx');
          if (container) {
            // Toggle display to force an immediate reflow
            container.style.display = 'none';
            var dummy = container.offsetHeight; // Force reflow by reading offsetHeight
            container.style.display = 'block';

            // Use requestAnimationFrame to ensure the DOM has updated, then force reflow via the zoom property
            requestAnimationFrame(function() {
              container.style.zoom = '1';
              var dummy2 = container.offsetWidth; // Read property to force reflow
              container.style.zoom = ''; // Remove the temporary inline style
              // Dispatch a resize event as an extra nudge for layout recalculation
              window.dispatchEvent(new Event('resize'));
            });
          }
        });
      });
    }

    if (document.readyState === 'complete') {
      attachAccordionListeners();
    } else {
      window.addEventListener('load', attachAccordionListeners);
    }
  })();
}
