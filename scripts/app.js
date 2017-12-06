const rsskey = "b9f08983e0e54457927f26769123b954";

function getBtcUsd(callback) {
  $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", d => {
    callback(d.bpi.USD.rate);
  });
}

$(function () {
  if (Cookies.get('isLoggedIn') !== 'true') {
    window.location.href = "../index.html";
  }

  getBtcUsd(function (val) {
    $(".conversion .btcusd").html(val);
  });
});
