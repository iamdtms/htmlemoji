$(function () {
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
            modal: {
              text: "under construction..."
            },
          }
        },
        hu: {
          translation: {
            modal: {
              text: "előkészítés alatt..."
            },
          }
        }
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      $('body').localize();
    });
});
