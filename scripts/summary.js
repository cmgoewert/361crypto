function newTransaction(currency, amount, type) {
  $("a[href='#addTransaction']").on('click', function () {
    $("table.transactions tbody").append("<tr><td>" + transaction.counter + "</td><td>" + transaction.type + "</td><td>" + transaction.currency + "</td><td>" + Math.floor((Math.random() * 10) + 1) + "</td></tr>");
    transaction.counter++;
  });
}