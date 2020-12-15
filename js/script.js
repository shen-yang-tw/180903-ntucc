//Check all exist
function allExist(el) {
  var exist = true
  k = document.querySelectorAll(el)
  for (var i = 0;i < k.length;i++) {
    if (k[i] == null) {
      exist = false
      return exist
    } else {
      exist = true
    }
  }
  return exist
}

//Check one exist
function oneExist(el) {
  var exist = true
  k = document.querySelectorAll(el)
  for (var i = 0;i < k.length;i++) {
    if (k[i] != null) {
      return exist
    } else {
      exist = false
    }
  }
  return exist
}

//Slideshow tab focus
function slideShowFocus(slideshow, tabsArray, thisFocus) {
  var slideshow = document.querySelector(slideshow)
  var tabs = document.querySelectorAll(tabsArray)
  for (var i = 0;i < tabs.length;i++) {
    // tabs[i] = UIkit.slideshow(slideshow).show(i)
    if (thisFocus == tabs[i]) {
      UIkit.slideshow(slideshow).show(i)
    }
  }
}
function enterOpenUrl(targetWindow, thisKeyDown, event) {
  if (event.keyCode === 13) {
    window.open(thisKeyDown.getAttribute('href'), targetWindow)
  }
}

function toggleCheckAll(thisClick, inputClass) {
  //thisClick means the "owner" and CANNOT use "this" that means the Global object "Window"
  thisClick.classList.toggle('checked')
  var i,
    el = document.querySelectorAll(inputClass)
  //--set all input checked & unchecked--
  if (thisClick.classList.contains('checked')) {
    //if 'select all' checked
    for (i = 0;i < el.length;i++) {
      el[i].checked = true
      el[i].offsetParent.classList.add('checked')
      //parent el<li> add class "checked" when input checked
    }
  } else {
    //if 'select all' unchecked
    for (i = 0;i < el.length;i++) {
      el[i].checked = false
      el[i].offsetParent.classList.remove('checked')
      //parent el<li> remove class "checked" when input unchecked
    }
  }
}

function toggleAllShow(allChildren) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  console.log(allChildren.length)
  for (var i = 0;i < allChildren.length;i++) {
    if (allChildren[i].hasAttribute('hidden')) {
      allChildren[i].removeAttribute('hidden')
    } else {
      allChildren[i].setAttribute('hidden', true)
    }
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls1, cls2) {
  for (var i = 0;i < allChildren.length;i++) {
    allChildren[i].classList.toggle(cls1)
    if (cls2 != null) {
      allChildren[i].classList.toggle(cls2)
    }
  }
  // return false; //not working
}
//toggle two classes - onmouseover="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'uk-text-truncate', 'flex-wrap')" onmouseout="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'flex-wrap', 'uk-text-truncate')"
function removeAddClasses(allChildren, classRemove, classAdd) {
  for (var i = 0;i < allChildren.length;i++) {
    allChildren[i].classList.remove(classRemove)
    allChildren[i].classList.add(classAdd)
  }
}

function findParent(thisElement, parentTagName) {
  while (
    (thisElement = thisElement.parentElement) &&
    thisElement.tagName != parentTagName
  );
  //Searching loop only stop while parent is founded
  return thisElement //if searching no one will return null
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl)
}

function findAll(sl) {
  return document.querySelectorAll(sl)
}

function findChild(parentEL, sl) {
  return parentEL.querySelector(sl)
  // return parentEL.querySelector(sl).tagName;
}

//Table width in editor
function tableWidth(el) {
  var target = document.querySelectorAll(el)
  if (window.innerWidth <= 959 || document.documentElement.clientWidth <= 959) {
    for (var i = 0;i < target.length;i++) {
      target[i].style.setProperty('width', '100%', 'important')
      if (target[i].getAttribute('width') != null) {
        target[i].setAttribute('width', 'auto')
      }
      var th = target[i].querySelectorAll('th')
      var td = target[i].querySelectorAll('td')
      for (var j = 0;j < th.length;j++) {
        if (th[j].style.width != null) {
          th[j].style.setProperty('width', 'auto', 'important')
        }
        if (th[j].getAttribute('width') != null) {
          th[j].setAttribute('width', 'auto')
        }
      }
      for (var k = 0;k < td.length;k++) {
        if (td[k].style.width != null) {
          td[k].style.setProperty('width', 'auto')
        }
        if (td[k].getAttribute('width') != null) {
          td[k].setAttribute('width', 'auto')
        }
      }
    }
    for (var i = 0;i < target.length;i++) {
      var columns = target[i].querySelector('thead tr').childElementCount
      // IF the columns of table is 6 or greater than 6, add the parent <div class="uk-overflow-auto">
      if (columns >= 6) {
        // target[i].style.setProperty('width', '100%', 'important')

        var parent = target[i].parentNode //Parent of the target
        var wrapper = document.createElement('div') // It's a method not element
        // set the wrapper as child (instead of the element)
        parent.replaceChild(wrapper, target[i])
        wrapper.classList.add('uk-overflow-auto')
        // set element as child of wrapper
        wrapper.appendChild(target[i])
        target[i].classList.add('scroll_table', 'min_width-600', 'min_width-700@s', 'min_width-1000@m')
      }
    }
  } else {
    for (var i = 0;i < target.length;i++) {
      if (target[i].getAttribute('width') >= target[i].parentElement.offsetWidth) {
        target[i].setAttribute('width', 'auto')
      }
    }
  }
}
if (oneExist('.ckeditor table')) {
  tableWidth('.ckeditor table')
}

//Set the "alt" attribute to all icons
function iconAlt(el) {
  var el = document.querySelectorAll(el)
  for (var i = 0;i < el.length;i++) {
    el[i].setAttribute("alt", "")
    // console.log(el.length)
  }
}
if (oneExist('[class*=fa-]')) {
  iconAlt('[class*=fa-]')
  // console.log(oneExist('[class*=fa-]'))
}

if (allExist('.list_tabs .uk-open')) {
  toggleAllClass(findAll('.list_tabs .uk-open .toggle'), 'hidden')
}

//Gototop fadeIn & fadeOut on scrollTop / scroll
$("[uk-totop]").hide()
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("[uk-totop]").fadeIn()
  } else {
    $("[uk-totop]").fadeOut()
  }
})

$(window).on("resize load", function () {

  //Get current year
  $(".year").text(new Date().getFullYear())

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove()
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty").remove()

  //font resize
  if ($('.btnFontSizeS').is('.active')) {
    $('html').removeClass('fontSizeM fontSizeL')
  }
  if ($('.btnFontSizeM').is('.active')) {
    $('html').removeClass('fontSizeL').addClass('fontSizeM')
  }
  if ($('.btnFontSizeL').is('.active')) {
    $('html').removeClass('fontSizeM').addClass('fontSizeL')
  }
  $('.btnFontSize').click(function () {
    $('.btnFontSize').removeClass('active')
    $(this).addClass('active')
  })
  $('.btnFontSizeL>:only-child').click(function () {
    // $('.font_resize').removeClass('font_.btnFontSizeM').addClass('font_large');
    $('html').removeClass('fontSizeM').addClass('fontSizeL')
  })
  $('.btnFontSizeM>:only-child').click(function () {
    // $('.font_resize').removeClass('font_large').addClass('font_.btnFontSizeM');
    $('html').removeClass('fontSizeL').addClass('fontSizeM')
  })
  $('.btnFontSizeS>:only-child').click(function () {
    // $('.font_resize').removeClass('font_.btnFontSizeM font_large');
    $('html').removeClass('fontSizeM fontSizeL')
  })

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function () {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    })
  })
  $(".ratio9_16 li img, .thisRatio9_16").each(function () {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    })
  })
  $(".ratio4_3 li img, .thisRatio4_3").each(function () {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    })
  })
  $(".ratio16_9 li img, .thisRatio16_9").each(function () {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    })
  })
  $(".ratio1_1 li img, .thisRatio1_1").each(function () {
    $(this).css({
      height: $(this).width()
    })
  })

  //Set the height of slideshow
  var windowHeight = window.innerHeight
  var header = $("header").height()
  var bg_bar = $(".bg_bar").outerHeight() //outerHeight() includes padding and border, outerHeight(true) includes the margin
  var slide = windowHeight - header - bg_bar
  if ($(window).width() >= 960) {
    $("[uk-slideshow]>.uk-position-relative, [uk-slideshow] .uk-slideshow-items, [uk-slideshow] .uk-slideshow-items>li").css('height', slide)
  }

  //Search input & two levels of select - change parent select option to display & enable child select option
  $("#select_dep").change(function () { //parent select
    $('.select_div').prop('disabled', 'disabled').prop('hidden', 'hidden') //all child select hidden
    if ($(this).children(':first-child').is(':selected')) { //if 1st option selected
      $('.select_div:first').prop('disabled', 'disabled').prop('hidden', false) //default first child select show & disabled
      $("#search_input").val("") //empty input text
    } else {
      $('.select_div[data-div="' + $(this).val() + '"]').prop('disabled', false).prop('hidden', false) //child select show & enabled
      $("#search_input").val($(this).val()) //option text selected placeed into input
    }
  })
  $(".select_div").change(function () { //child select
    if ($(this).children(':first-child').is(':selected')) { //if 1st option selected
      if ($("#select_dep").children(':first-child').is(':selected')) { //and if 1st option of parent select selected
        $("#search_input").val("") //empty input text
      } else {
        $("#search_input").val($("#select_dep").val()) //option text of parent select selected placeed into input
      }
    } else {
      $("#search_input").val($(this).val()) //not 1st option text of child select selected placeed into input
    }
  })

  //Set the height of .list images equal to its width
  $("[class*=uk-visible][uk-tab]>li>a, [class*=uk-hidden]>[uk-dropdown] a").click(function () {
    if ($(window).width() <= 639) {
      var w = $(".list[uk-grid]").parent().width() - 10
    }
    if ($(window).width() >= 640 && $(window).width() <= 1219) {
      var w = $(".list[uk-grid]").parent().width() / 2 - 10
    }
    if ($(window).width() >= 1200 && $(window).width() <= 1599) {
      var w = $(".list[uk-grid]").parent().width() / 3 - 10
    }
    if ($(window).width() >= 1600) {
      var w = $(".list[uk-grid]").parent().width() / 4 - 10
    }
    $(".thisRatio1_1").each(function () {
      $(this).css({
        height: w
      })
    })
  })

})