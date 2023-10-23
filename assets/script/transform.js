$(function () {
  console.info("init");
  $('body > *').hide();
  $('body > .main').show();
  $('body > .main > *').hide();
  $('body > .main > table').show();

  $('a').each(function () {
    $(this).attr('href', '#');
  });

  $('td').each(function () {
    if ($(this).hasClass('name')) {
      $(this).remove();
    }
  });

  $('tr').each(function () {
    $(this).children('th').parent('tr').remove();
  });

  $('th').each(function () {
    if ($(this).attr('colspan') == '5') {
      $(this).remove();
    };
  });

  $('*').each(function () {
    if ($(this).hasClass('rchars')) {
      $(this).remove();
    }
    if ($(this).hasClass('code')) {
      $(this).remove();
    }
  });

  /* empty rows removal - not working
  $('tr').each(function(){
    var diz = $(this)
    if(diz.length == 0) {
      $(this).remove();
      console.log('removed');
    }
  }) */
});