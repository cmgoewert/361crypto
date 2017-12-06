$(function () {
  $(".place-order-form").on('submit', function (e) {
    e.preventDefault();

    let stockstatus = $('#stockStatus');
    if (Math.floor(Math.random() * (2 - 1 + 1) + 1) === 1) {
      stockstatus.attr('src', '../images/stockdown.png');
    } else {
      stockstatus.attr('src', '../images/stockup.png');
    }

    var cashBalanceDollar = Math.floor(Math.random() * (8000 - 1500 + 1500) + 1500);
    var cashBalanceCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    $('#cashBalance').html('$' + cashBalanceDollar + '.' + cashBalanceCent);

    var todayNetChangeDollar = Math.floor(Math.random() * (500 - 80 + 80) + 80);
    var todayNetChangeCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    $('#todayNetChange').html('$' + todayNetChangeDollar + '.' + todayNetChangeCent);

    var accountValueDollar = Math.floor(Math.random() * (200000 - 60000 + 60000) + 60000);
    var accountValueCent = Math.floor(Math.random() * (99 - 10 + 10) + 10);
    $('#accountValue').html('$' + accountValueDollar + '.' + accountValueCent);
  });
});
