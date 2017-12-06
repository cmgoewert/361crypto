$(function () {
  $(".place-order-form").on('submit', function (e) {
    e.preventDefault();

    var upOrDown = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (upOrDown == 1) {
      document.getElementById('stockStatus').src = 'stockdown.png';
    }
    else {
      document.getElementById('stockStatus').src = 'stockup.png';
    }

    var cashBalanceDollar = Math.floor(Math.random() * (8000 - 1500 + 1500) + 1500);
    var cashBalanceCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    document.getElementById('cashBalance').innerHTML = '$' + cashBalanceDollar + '.' + cashBalanceCent;

    var todayNetChangeDollar = Math.floor(Math.random() * (500 - 80 + 80) + 80);
    var todayNetChangeCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    document.getElementById('todayNetChange').innerHTML = '$' + todayNetChangeDollar + '.' + todayNetChangeCent;

    var accountValueDollar = Math.floor(Math.random() * (200000 - 60000 + 60000) + 60000);
    var accountValueCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    document.getElementById('accountValue').innerHTML = '$' + accountValueDollar + '.' + accountValueCent;

    var quantityStr = document.getElementById('quantity').value;
    var symbolStr = document.getElementById('symbol').value;
    var priceLimitStr = document.getElementById('priceLimit').value;
    var marketOrLimit = '';
    var priceLimitWithPeriod = priceLimitStr.concat('. ');
    var buyOrSellStr = '';
    var statusResultStr = '';

    if (document.getElementById('market').checked) {
      marketOrLimit = ' at market. ';
    }
    if (document.getElementById('limit').checked) {
      marketOrLimitPart = ' at price limit ';
      marketOrLimit = marketOrLimitPart.concat(priceLimitWithPeriod);
    }


    if (document.getElementById('buy').checked) {
      buyOrSellStr = 'Buy';
    }
    if (document.getElementById('sell').checked) {
      buyOrSellStr = 'Sell';
    }
    var statusResult = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (statusResult == 1) {
      statusResultStr = buyOrSellStr + ' - Open';
    }
    else if (statusResult == 2) {
      statusResultStr = buyOrSellStr + ' - Closed';
    }
    else {
      statusResultStr = buyOrSellStr + ' - Fulfilled';
    }

    if (document.getElementById('order1').innerHTML == 'Co. - Status') {
      document.getElementById('order1').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order2').innerHTML = 'Co. - Status';
      document.getElementById('order3').innerHTML = 'Co. - Status';
      document.getElementById('order4').innerHTML = 'Co. - Status';
      document.getElementById('order5').innerHTML = 'Co. - Status';
      document.getElementById('order6').innerHTML = 'Co. - Status';
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order2').innerHTML == 'Co. - Status') {
      document.getElementById('order2').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order3').innerHTML = 'Co. - Status';
      document.getElementById('order4').innerHTML = 'Co. - Status';
      document.getElementById('order5').innerHTML = 'Co. - Status';
      document.getElementById('order6').innerHTML = 'Co. - Status';
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order3').innerHTML == 'Co. - Status') {
      document.getElementById('order3').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order4').innerHTML = 'Co. - Status';
      document.getElementById('order5').innerHTML = 'Co. - Status';
      document.getElementById('order6').innerHTML = 'Co. - Status';
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order4').innerHTML == 'Co. - Status') {
      document.getElementById('order4').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order5').innerHTML = 'Co. - Status';
      document.getElementById('order6').innerHTML = 'Co. - Status';
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order5').innerHTML == 'Co. - Status') {
      document.getElementById('order5').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order6').innerHTML = 'Co. - Status';
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order6').innerHTML == 'Co. - Status') {
      document.getElementById('order6').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order7').innerHTML = 'Co. - Status';
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else if (document.getElementById('order7').innerHTML == 'Co. - Status') {
      document.getElementById('order7').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
      document.getElementById('order8').innerHTML = 'Co. - Status';
    }
    else {
      document.getElementById('order8').innerHTML = quantityStr + ' of ' + symbolStr + marketOrLimit + '...' + statusResultStr;
    }
  });
});
