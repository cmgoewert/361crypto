$(function () {
  $(".place-order-form").on('submit', function (e) {
    e.preventDefault();
    updateTransactions(Cookies.get('username'), {
      amount: $("#quantity").val(),
      buyPrice: getBtcUsd(function (val) {
        return val;
      })
    })
  });
});
