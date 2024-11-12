document.addEventListener('DOMContentLoaded', function() {
    VanillaTilt.init(document.querySelectorAll('#thanks'), {
      max: 25,         // Maximum tilt angle in degrees
      speed: 400,      // Transition speed (in milliseconds)
      glare: true,     // Optional: Enables glare effect
      "max-glare": 0.5 // Optional: Adjusts glare intensity (0 to 1)
    });
  });