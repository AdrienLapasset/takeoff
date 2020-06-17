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


// Custom select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select-container");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

$('.check-list').click(function () {
  $('.check-list-items').toggle()
})
