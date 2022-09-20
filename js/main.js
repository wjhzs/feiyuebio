$('.rc-menu>li').find('.commonUl').hide();
    $('.rc-menu>li').find('ul').hide();
    $('.Nav_pc .rc-menu>li').hover(function () {
      $(this).find('.commonUl').show();
      $('.commonUl li').hover(function () {
        $(this).find('.commonUl').show();
        $(this).find("ul").show();
        $(this).find('.rc-menu-item').show();
      }, function () {
        $(this).find('.commonUl').hide();
        $(this).find("ul").hide();
        $(this).find('.rc-menu-item').hide();
      });
    }, function () {
      $(this).find('.commonUl').hide();
    });



