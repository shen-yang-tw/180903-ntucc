//Gototop fadeIn & fadeOut on scrollTop / scroll
$("[uk-totop]").hide();
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $("[uk-totop]").fadeIn();
  } else {
    $("[uk-totop]").fadeOut();
  }
});

$(window).on("load", function() {

});

$(window).on("resize load", function() {

  //Get current year
  $(".year").text(new Date().getFullYear());

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty").remove();

  //font resize
  if ($('.btnFontSizeS').is('.active')) {
    $('html').removeClass('fontSizeM fontSizeL');
  }
  if ($('.btnFontSizeM').is('.active')) {
    $('html').removeClass('fontSizeL').addClass('fontSizeM');
  }
  if ($('.btnFontSizeL').is('.active')) {
    $('html').removeClass('fontSizeM').addClass('fontSizeL');
  }
  $('.btnFontSize').click(function() {
    $('.btnFontSize').removeClass('active');
    $(this).addClass('active');
  });
  $('.btnFontSizeL>:only-child').click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM').addClass('font_large');
    $('html').removeClass('fontSizeM').addClass('fontSizeL');
  });
  $('.btnFontSizeM>:only-child').click(function() {
    // $('.font_resize').removeClass('font_large').addClass('font_.btnFontSizeM');
    $('html').removeClass('fontSizeL').addClass('fontSizeM');
  });
  $('.btnFontSizeS>:only-child').click(function() {
    // $('.font_resize').removeClass('font_.btnFontSizeM font_large');
    $('html').removeClass('fontSizeM fontSizeL');
  });

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function() {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    });
  });
  $(".ratio9_16 li img, .thisRatio9_16").each(function() {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    });
  });
  $(".ratio4_3 li img, .thisRatio4_3").each(function() {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    });
  });
  $(".ratio16_9 li img, .thisRatio16_9").each(function() {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    });
  });
  $(".ratio1_1 li img, .thisRatio1_1").each(function() {
    $(this).css({
      height: $(this).width()
    });
  });

  //Set the height of slideshow
  var windowHeight = window.innerHeight;
  var header = $("header").height();
  var bg_bar = $(".bg_bar").outerHeight(); //outerHeight() includes padding and border, outerHeight(true) includes the margin
  var slide = windowHeight - header - bg_bar;
  $("[uk-slideshow]>.uk-position-relative, [uk-slideshow] .uk-slideshow-items, [uk-slideshow] .uk-slideshow-items>li").css('height', slide);

  //Search input & two levels of select - change parent select option to display & enable child select option
  $("#select_dep").change(function() { //parent select
    $('.select_div').prop('disabled', 'disabled').prop('hidden', 'hidden'); //all child select hidden
    if ($(this).children(':first-child').is(':selected')) { //if 1st option selected
      $('.select_div:first').prop('disabled', 'disabled').prop('hidden', false); //default first child select show & disabled
      $("#search_input").val(""); //empty input text
    } else {
      $('.select_div[data-div="' + $(this).val() + '"]').prop('disabled', false).prop('hidden', false); //child select show & enabled
      $("#search_input").val($(this).val()); //option text selected placeed into input
    }
  });
  $(".select_div").change(function() { //child select
    if ($(this).children(':first-child').is(':selected')) { //if 1st option selected
      if ($("#select_dep").children(':first-child').is(':selected')) { //and if 1st option of parent select selected
        $("#search_input").val(""); //empty input text
      } else {
        $("#search_input").val($("#select_dep").val()); //option text of parent select selected placeed into input
      }
    } else {
      $("#search_input").val($(this).val()); //not 1st option text of child select selected placeed into input
    }
  });

  //Set the height of .list images equal to its width
  $("[class*=uk-visible][uk-tab]>li>a, [class*=uk-hidden]>[uk-dropdown] a").click(function() {
    if ($(window).width() <= 639) {
      var w = $(".list[uk-grid]").parent().width() -10;
    }
    if ($(window).width() >= 640 && $(window).width() <= 1219) {
      var w = $(".list[uk-grid]").parent().width() / 2 -10;
    }
    if ($(window).width() >= 1200 && $(window).width() <= 1599) {
      var w = $(".list[uk-grid]").parent().width() / 3 -10;
    }
    if ($(window).width() >= 1600) {
      var w = $(".list[uk-grid]").parent().width() / 4 -10;
    }
    $(".thisRatio1_1").each(function() {
      $(this).css({
        height: w
      });
    });
  });

});