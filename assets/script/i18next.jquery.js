$(function () {
  $('.accordion__button').each(function () {
    if ($(this).children('span').text() == '') {
      $(this).attr('title', 'open');
    } else if ($(this).children('span').text() == '▾') {
      $(this).attr('title', 'open');
    } else if ($(this).children('span').text() == '▴') {
      $(this).attr('title', 'close');
    }
    return false;
  });
  $('.accordion__button').click(function () {
    if ($(this).children('span').text() == '▾') {
      $(this).attr('title', 'close');
      $(this).children('span').text('▴');
    } else if ($(this).children('span').text() == '▴') {
      $(this).attr('title', 'open');
      $(this).children('span').text('▾');
    }
    return false;
  });
  $('.hu').click(function () {
    $('body').localize({ lng: 'hu' });
    return false;
  });

  $('.en').click(function () {
    $('body').localize({ lng: 'en' });
    return false;
  });

  $(".language a").click(function () {
    $(".language a").each(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
    $(this).addClass('active');
    return false;
  });

  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      debug: true,
      fallbackLng: 'en',
      lng: 'en',
      resources: {
        en: {
          translation: {
            language: {
              text: "Language: ",
              huTitle: "Hungarian",
              huLogo: "🇭🇺",
              enTitle: "English",
              enLogo: "🇬🇧"
            },
            modal: {
              text: "under construction..."
            },
            form: {
              search: "Search"
            },
            usage: {
              title: "Usage:",
              step1: "choose category",
              step2: "select emoji",
              step3: "copy emoji"
            }
          }
        },
        hu: {
          translation: {
            language: {
              text: "Nyelv: ",
              huTitle: "Magyar",
              huLogo: "🇭🇺",
              enTitle: "Angol",
              enLogo: "🇬🇧"
            },
            modal: {
              text: "előkészítés alatt..."
            },
            form: {
              search: "Keresés"
            },
            usage: {
              title: "Használat: ",
              step1: "kategória kiválasztása",
              step2: "emoji kiválasztása",
              step3: "emoji másolása"
            }
          }
        }
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      $('body').localize();
    });
});
