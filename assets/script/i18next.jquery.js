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
            language: {
              text: "Select language: "
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
              text: "Nyelv választása: "
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
