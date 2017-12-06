let counter = 0;

function newTransaction(transaction) {
  let btcusd = parseInt($(".btcusd").html().replace(',', ''));

  $("table.transactions tbody").append("<tr><td>" + counter + "</td><td>BTC</td><td>" + transaction.amount + "</td><td>$" + transaction.buyPrice + "</td><td>$" + (transaction.amount * btcusd) + "</td></tr>");
  counter++;
}

$(function () {
  getTransactions(Cookies.get('username'), function (data) {
    data.forEach(function (val, index) {
      counter = index;
      newTransaction(val);
    });
  });
});