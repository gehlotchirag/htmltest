(function () {
  var header = document.getElementById('hero-banner');

  var backgrounds = new Array('url(assets/img/bg1.jpg)',
  'url(assets/img/bg2.jpg)',
  'url(assets/img/bg3.jpg)');

  var current = 1;
  function nextBackground() {
    if (current > 3)
    current = 1;
    var bgurl = "url(assets/img/bg"+current+".jpg)";
    header.style.backgroundImage = bgurl;
    current ++;
  }
  setInterval(nextBackground, 5000);

  header.style.backgroundImage = 'url(assets/img/bg1.jpg)'

})();
