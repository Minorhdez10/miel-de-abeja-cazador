$(document).ready(function() {
  $('.img-clickable').on('click', function() {
    $('#modalImage').attr('src', $(this).attr('src'));
    $('#imageModal').modal('show');
  });
});
