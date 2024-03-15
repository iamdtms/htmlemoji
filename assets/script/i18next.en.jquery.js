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
              text: "copy & paste"
            },
            form: {
              search: "Search"
            },
            usage: {
              title: "Usage:",
              step1: "choose category",
              step2: "select emoji",
              step3: "copy emoji"
            },
            smileys: {
              faceSmiling1: "grinning face",
              faceSmiling2: "grinning face with big eyes",
              faceSmiling3: "grinning face with smiling eyes",
              faceSmiling4: "beaming face with smiling eyes",
              faceSmiling5: "grinning squinting face",
              faceSmiling6: "grinning face with sweat",
              faceSmiling7: "rolling on the floor laughing",
              faceSmiling8: "face with tears of joy",
              faceSmiling9: "slightly smiling face",
              faceSmiling10: "upside-down face",
              faceSmiling11: "melting face",
              faceSmiling12: "winking face",
              faceSmiling13: "smiling face with smiling eyes",
              faceSmiling14: "smiling face with halo",
              faceAffection1: "smiling face with hearts",
              faceAffection2: "smiling face with heart-eyes",
              faceAffection3: "star-struck",
              faceAffection4: "face blowing a kiss",
              faceAffection5: "kissing face",
              faceAffection6: "smiling face with tear",
              faceTongue1: "face savoring food",
              faceTongue2: "face with tongue",
              faceTongue3: "winking face with tongue",
              faceTongue4: "zany face",
              faceTongue5: "squinting face with tongue",
              faceTongue6: "money-mouth face"
            }
          }
        }
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      $('body').localize();
    });
});
