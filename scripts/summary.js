//Quantity of owned currencies
//Insert values from cloud here
let btcOwned = 0.8;
let ltcOwned = 6;
let ethOwned = 5;

//Rates for owned currencies -> Cost of 1 unit
//This also needs to updated dynamically
let btcRate = 7121.16;
let ltcRate = 63.89;
let ethRate = 328.50;

let transaction = {
  counter: 0,
  currency: 'BTC',
  amount: 2,
  type: 'Bought'
};

$(function () {
  $('.btcValue').html((btcOwned * btcRate).toFixed(2));
  $('.ltcValue').html((ltcOwned * ltcRate).toFixed(2));
  $('.ethValue').html((ethOwned * ethRate).toFixed(2));

  $("a[href='#addTransaction']").on('click', function () {
    $("table.transactions tbody").append("<tr><td>" + transaction.counter + "</td><td>" + transaction.type + "</td><td>" + transaction.currency + "</td><td>" + transaction.amount + "</td></tr>");
    transaction.counter++;
  });
});

//TRANSACTIONS
//Array to store transactions. Transactions can be added using .push()
let transactionsArray = [];


getCurrUser("test", function (user) {
    transactionsArray = user.transactions;
});

//A transaction object to temporarily store a transaction and its details befor being added to the array

//Create a new transaction and add to the transactions array
function newTransaction(currency, amount, type) {
  transaction.counter++;
  transaction.currency = currency;
  transaction.amount = amount;
  transaction.type = type;
  transactionsArray.push(transaction);
}

newTransaction('ETH', 4.5, 'Sold');

console.log(transactionsArray.pop(0));
console.log(transactionsArray.pop(1));