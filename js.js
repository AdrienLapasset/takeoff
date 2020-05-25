$(document).ready(function () {

  $('#tab1').click(function () {
    $('.progress-bar').css("width", "15%")
  })
  $('#tab2').click(function () {
    $('.progress-bar').css("width", "50%")
  })
  $('#tab3').click(function () {
    $('.progress-bar').css("width", "100%")
  })

  // Form validation
  let form1 = document.getElementById('form1');
  form1.querySelectorAll('.form-control[required]').forEach(input => {
    input.addEventListener(('input'), () => {
      if (input.checkValidity()) {
        input.classList.remove('is-invalid')
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid')
        input.classList.add('is-invalid');
      }
      var is_valid = $('.form-control[required]').length === $('.form-control[required].is-valid').length;
      $("#submitBtn").attr("disabled", !is_valid);
    });
  });

  $(document).on('submit', '#form1', function () {
    $('#tab2').tab('show')
    $('.progress-bar').css("width", "50%")
    return false;
  });

})
