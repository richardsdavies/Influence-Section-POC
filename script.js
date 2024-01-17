document.addEventListener('DOMContentLoaded', function() {
  var oneVH = window.innerHeight * 0.01; // Calculate 1vh in pixels
  var delay = 0;
  var delayIncrement = 500; // Time between each image's animation start

  document.querySelectorAll('.animated-image').forEach(function(image) {
    // Generate random translateY values within a range, using vh
    var translateYEnter = (Math.random() * 50 + 60) * -oneVH;
    var translateYExit = (Math.random() * 30 + 200) * -oneVH;

    anime({
      targets: image,
      translateY: [
        { value: translateYEnter, duration: 3000, easing: 'easeInOutExpo' }, // Enter from bottom
        { value: translateYEnter, duration: 2000, delay: delay }, // Stay in center
        { value: translateYExit, duration: 2000, easing: 'easeInOutExpo' }  // Exit to top
      ],
      delay: delay, // Staggered delay
      loop: true
    });

    delay += delayIncrement; // Increment delay for next image
  });
});
