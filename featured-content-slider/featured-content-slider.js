window.addEventListener( 'load', function() {
  var elem = document.querySelector('.js-slideshow');
  var flkty = new Flickity( elem, {
    wrapAround: true,
    pageDots: false
  });
});