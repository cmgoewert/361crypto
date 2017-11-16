$(function(){
  $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", d => {
    $(".conversion .btcusd").html(d.bpi.USD.rate)
  });

  $.getJSON("https://newsapi.org/v1/articles?language=en", {
    apiKey: rsskey,
    source: "bloomberg",
  }, function (data) {
    let $rss = $(".rss-feed-list");
    $rss.empty();
    $.each(data.articles, function (i, item) {
      $rss.append("<li><a href=\"" + item.url + "\">" + item.title + "</a><p class=\"info\">" + item.author + "</p></li>");
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