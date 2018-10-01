//Gototop fadeIn & fadeOut on scrollTop / scroll
$("[uk-totop]").hide();
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $("[uk-totop]").fadeIn();
  } else {
    $("[uk-totop]").fadeOut();
  }
});


$(window).on("resize load", function() {

  //Get current year
  $(".year").text(new Date().getFullYear());

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

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
  $(".ratio3_4 li img").each(function() {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    });
  });
  $(".ratio9_16 li img").each(function() {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    });
  });
  $(".ratio4_3 li img").each(function() {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    });
  });
  $(".ratio16_9 li img").each(function() {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    });
  });
  $(".ratio1_1 li img").each(function() {
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

});