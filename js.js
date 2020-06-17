$(document).ready(function () {

  // IE11 pollyfill
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity() === false) {

        var errorElements = document.querySelectorAll(
          "input.form-control:invalid");

        $('html, body').animate({
          scrollTop: $(errorElements[0]).offset().top
        }, 400);
      } else if (form.id === 'form1') {
        $("#tab1").removeClass("active");
        $('#tab2').tab('show');
        $(onTab2);
        window.scrollTo(0, 0);
        return false;
      } else if (form.id === 'form2') {
        $("#tab2").removeClass("active");
        $('#tab3').tab('show');
        $(onTab3);
        window.scrollTo(0, 0);
        return false;
      } else if (form.id === 'form3') {
        $('.form-container').hide()
        $('#feedback').show()
        window.scrollTo(0, 0);
        return false;
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Tab events
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
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
    $('#validation-icon').css("display", "none")
    $('#validation-text').css("display", "block")
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
    $('#shop-icon').css("display", "block")
    $('#shop-text').css("display", "none")
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

  $(".file-upload .btn").click(function (e) {
    $("#file").click();
    e.preventDefault();
  });

  // Tooltips
  $('[data-toggle="tooltip"]').tooltip()

  // DatePicker
  $.datepicker.setDefaults($.datepicker.regional[""]);
  document.querySelectorAll('#datepicker').forEach(function (dp) {
    $(dp).datepicker($.datepicker.regional["fr"]);
  })
})
