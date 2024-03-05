$(function () {
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

  $('.hu').on('click', function () {
    $('body').localize({ lng: 'hu' });
    $(".language a").on('click', function () {
      $(".language a").each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
    return false;
  });

  $('.en').on('click', function () {
    $('body').localize({ lng: 'en' });
    $(".language a").on('click', function () {
      $(".language a").each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
    return false;
  });
});
