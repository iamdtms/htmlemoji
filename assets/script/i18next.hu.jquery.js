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
      fallbackLng: 'hu',
      lng: 'hu',
      resources: {
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
              text: "másol és beilleszt"
            },
            form: {
              search: "Keresés"
            },
            usage: {
              title: "Használat: ",
              step1: "kategória kiválasztása",
              step2: "emoji kiválasztása",
              step3: "emoji másolása"
            },
            smileys: {
              faceSmiling1: "vigyorgó arc",
              faceSmiling2: "vigyorgó arc nagy szemekkel",
              faceSmiling3: "vigyorgó arc mosolygó szemekkel",
              faceSmiling4: "sugárzó arc mosolygó szemekkel",
              faceSmiling5: "vigyorgó, hunyorgó arc",
              faceSmiling6: "vigyorgó, izzadt arc",
              faceSmiling7: "nevetve hempereg a padlón",
              faceSmiling8: "örömkönnyes arc",
              faceSmiling9: "enyhén mosolygó arc",
              faceSmiling10: "fejjel lefelé fordított arc",
              faceSmiling11: "olvadó arc",
              faceSmiling12: "kacsintó arc",
              faceSmiling13: "mosolygó arc mosolygó szemekkel",
              faceSmiling14: "mosolygó arc glóriával",
              faceAffection1: "mosolygó arc szívekkel",
              faceAffection2: "mosolygós arc szív-szemekkel",
              faceAffection3: "sztárcsodálkozó",
              faceAffection4: "csókot fújó arc",
              faceAffection5: "csókolózó arc",
              faceAffection6: "mosolygó arc könnyes szemmel",
              faceTongue1: "ételeket ízlelgető arc",
              faceTongue2: "arc nyelvvel",
              faceTongue3: "kacsintó arc nyelvvel",
              faceTongue4: "bolondos arc",
              faceTongue5: "hunyorgó arc nyelvvel",
              faceTongue6: "pénzes szájú arc",
              faceHand1: "mosolygó arc nyitott kezekkel",
              faceHand2: "arc kézzel a száj fölött",
              faceHand3: "arc nyitott szemmel és kézzel a száj felett",
              faceHand4: "arc kukucskáló szemmel",
              faceHand5: "csitító arc",
              faceHand6: "gondolkodó arc",
              faceHand7: "tisztelgő arc",
              faceNeutral1: "cipzáras szájú arc",
              faceNeutral2: "arc felhúzott szemöldökkel",
              faceNeutral3: "semleges arc",
              faceNeutral4: "kifejezéstelen arc",
              faceNeutral5: "száj nélküli arc",
              faceNeutral6: "pontozott vonalú arc",
              faceNeutral7: "arc a felhőkben",
              faceNeutral8: "vigyorgó arc",
              faceNeutral9: "szórakozott arc",
              faceNeutral10: "arc görbe szemekkel",
              faceNeutral11: "grimaszoló arc",
              faceNeutral12: "kifújó arc",
              faceNeutral13: "hazug arc"
            }
          }
        }
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });
      $('body').localize();
    });
});
