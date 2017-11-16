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

//TRANSACTIONS
//Array to store transactions. Transactions can be added using .push()
let transactionsArray = [];

//A transaction object to temporarily store a transaction and its details befor being added to the array
var transaction = {
  counter:1,
  currency:'BTC',
  amount:2,
  type:'Bought'
};

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

function updateOwnedCurrencies()
{
  document.getElementById('btcValue').innerHTML = "$"+(btcOwned*btcRate).toFixed(2);
  document.getElementById('ltcValue').innerHTML = "$"+(ltcOwned*ltcRate).toFixed(2);
  document.getElementById('ethValue').innerHTML = "$"+(ethOwned*ethRate).toFixed(2);
}

function processTransaction(currency, type, amount)
{
  let transactionHTMLelement = "order";
  transactionHTMLelement = transactionHTMLelement + transaction.counter.toString(); //getting each transaction element
  document.getElementById(transactionHTMLelement).innerHTML = transaction.counter + ". " + transaction.type + " " + transaction.currency + ": " + transaction.amount;
  transaction.counter++;
}
