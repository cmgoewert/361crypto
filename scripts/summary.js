function newTransaction(index, transaction) {
  let btcusd = parseInt($(".btcusd").html().replace(',', ''));

  $("table.transactions tbody").append("<tr><td>" + index + "</td><td>BTC</td><td>" + transaction.amount + "</td><td>$" + transaction.buyPrice + "</td><td>$" + (transaction.amount * btcusd) + "</td></tr>");
}

$(function () {
  getTransactions(Cookies.get('username'), function (data) {
    data.forEach(function (val, index) {
      newTransaction(index, val);
    });
  });
});