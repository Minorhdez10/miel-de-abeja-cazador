$(document).ready(function() {
  $('.img-clickable').on('click', function() {
    $('#modalImage').attr('src', $(this).attr('src'));
    $('#imageModal').modal('show');
  });
});

$(function() {
  const el = document.getElementById('carouselMiel');
  const carousel = bootstrap.Carousel.getOrCreateInstance(el, {
    interval: 5000,
    ride: 'carousel'
  });

  // Pausar al reproducir video y reanudar al terminar
  $('#carouselMiel video').on('play', function() {
    carousel.pause();
  });

  $('#carouselMiel video').on('ended', function() {
    carousel.cycle();
  });

  // Bloquear cambios de slide mientras cualquier video esté reproduciéndose
  $('#carouselMiel').on('slide.bs.carousel', function(e) {
    const anyPlaying = $('#carouselMiel video').toArray().some(v => !v.paused && !v.ended);
    if (anyPlaying) e.preventDefault();
  });
});