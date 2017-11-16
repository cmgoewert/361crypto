const rsskey = "b9f08983e0e54457927f26769123b954";

$(function () {
  if (Cookies.get('isLoggedIn') !== 'true') {
    window.location.href = "../index.html";
  }

  $.getJSON("https://newsapi.org/v1/articles?language=en", {
    apiKey: rsskey,
    source: "financial-times",
    category: "cryptocurrency"
  }, function (data) {
    let $rss = $(".rss-feed-list");
    $rss.empty();
    $.each(data.articles, function (i, item) {
      $rss.append("<li><a href=\"" + item.url + "\">" + item.title + "</a></li>");
    });
  });
});

(function (b, i, t, C, O, I, N) {
  window.addEventListener('load', function () {
    if (b.getElementById(C)) return;
    I = b.createElement(i), N = b.getElementsByTagName(i)[0];
    I.src = t;
    I.id = C;
    N.parentNode.insertBefore(I, N);
  }, false)
})(document, 'script', '//widgets.bitcoin.com/widget.js', 'btcwdgt');

