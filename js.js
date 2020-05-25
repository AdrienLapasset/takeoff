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

  document.querySelectorAll('.form-step').forEach((form, id) => {
    let step = id + 1
    checkValidity(form, step)
  })

  function checkValidity(form, step) {
    form.querySelectorAll('.form-control[required]').forEach(input => {
      input.addEventListener(('input'), () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid')
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid')
          input.classList.add('is-invalid');
        }
        let is_valid = $('#form' + step + ' .form-control[required]').length === $('#form' + step + ' .form-control[required].is-valid').length;
        $('#submitBtn' + step).attr("disabled", !is_valid);
      });
    })
  }

  $(document).on('submit', '#form1', () => {
    $('#tab2').tab('show')
    $('.progress-bar').css("width", "50%")
    $('#acount-icon').addClass("icon-grey")
    $('#shop-icon').css("display", "block")
    $('#shop-text').css("display", "none")
    window.scrollTo(0, 0);
    return false;
  });

  $(document).on('submit', '#form2', () => {
    $('#tab3').tab('show')
    $('.progress-bar').css("width", "100%")
    return false;
  });

})
