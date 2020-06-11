$(document).ready(function () {

  // $('#tab3').tab('show')

  document.querySelectorAll('.form-step').forEach((form, id) => {
    let step = id + 1
    checkValidity(form, step)
  })

  function checkValidity(form, step) {
    form.querySelectorAll('input[required]').forEach(input => {
      input.addEventListener(('blur'), () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid')
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid')
          input.classList.add('is-invalid');
        }
        let is_valid = $('#form' + step + ' input[required]').length === $('#form' + step + ' input[required].is-valid').length;
        $('#submitBtn' + step).attr("disabled", !is_valid);
      });
    })
  }

  // Form submits management
  $(document).on('submit', '#form1', () => {
    $('#tab2').tab('show');
    $(onTab2);
    window.scrollTo(0, 0);
    return false;
  });

  $(document).on('submit', '#form2', () => {
    $('#tab3').tab('show');
    $(onTab3);
    window.scrollTo(0, 0);
    return false;
  });

  $(document).on('submit', '#form3', () => {
    $('.form-container').hide()
    $('#feedback').show()
    window.scrollTo(0, 0);
    return false;
  });

  // Tab events
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'tab1-tab':
        $(onTab1);
        break;
      case 'tab2-tab':
        $(onTab2);
        break;
      case 'tab3-tab':
        $(onTab3);
        break;
      default:
        break;
    }
  })

  function onTab1() {
    $('.progress-bar').css("width", "15.5%")
    $('#shop-icon').css("display", "none")
    $('#shop-text').css("display", "block")
  }

  function onTab2() {
    $('.progress-bar').css("width", "50%")
    $('#acount-icon').addClass("icon-grey")
    $('#shop-icon').css("display", "block")
    $('#shop-text').css("display", "none")
    $('#validation-icon').css("display", "none")
    $('#validation-text').css("display", "block")
  }

  function onTab3() {
    $('.progress-bar').css("width", "83%")
    $('#shop-icon').addClass("icon-grey")
    $('#validation-icon').css("display", "block")
    $('#validation-text').css("display", "none")
  }

  // File upload drag and drop
  // https://makitweb.com/drag-and-drop-file-upload-with-jquery-and-ajax/
  $("html").on("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $("html").on("drop", function (e) { e.preventDefault(); e.stopPropagation(); });

  $('.file-upload').on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(".file-upload").addClass("drag-over");
  });

  $('.file-upload').on('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(".file-upload").removeClass("drag-over");
  });

  $(".file-upload .btn").click(function () {
    $("#file").click();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})
