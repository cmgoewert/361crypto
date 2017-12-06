//initilialize firebase
var config = {
  apiKey: "AIzaSyDWJkjY3_1T-x4gPnRQem5n80w-9gv_Oec",
  authDomain: "cryptotracker-bb2f2.firebaseapp.com",
  databaseURL: "https://cryptotracker-bb2f2.firebaseio.com",
  projectId: "cryptotracker-bb2f2",
  storageBucket: "cryptotracker-bb2f2.appspot.com",
  messagingSenderId: "839599671002"
};

firebase.initializeApp(config);
var database = firebase.database();

function getCurrUser(username, callback) {
  database.ref("Users/" + username).once("value").then(snapshot => {
    callback(snapshot.val());
  });
}

function updateTransactions(username, transaction) {
  console.log("in updateTrans");
  getTransactions(username, function (transactions) {
    transactions.push(transaction);
    database.ref("Users/" + username + "/transactions").set(transactions);
  });
}

// call like this
// getTransactions("test", function (transactions) {
//     window.alert(transactions[0].amount);
// });
function getTransactions(username, callback) {
  database.ref("Users/" + username + "/transactions").once("value").then(snapshot => {
    callback(snapshot.val());
  });
}
