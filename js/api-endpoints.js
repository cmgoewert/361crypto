$(function () {
  $.getJSON('https://www.bitstamp.net/api/v2/ticker/btcusd/', function (d) {
    $('.btc-price').html(d.last);
  });
});