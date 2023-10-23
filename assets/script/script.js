$(function () {
  const input = $('.convert').text();
  //console.log(input);

  let txt = [];
  let i, j;

  for (i = 0; i < input.length; i++) {
    txt[i] = input.substring(i, i + 1);
    console.log("txt[i]: " + txt[i] + " , i: " + i);
  }
  for (j == 0; j < input.length; j++) {
    console.log(i + " txt[j]: " + txt[++j]);
  }
});
