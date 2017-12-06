$(function () {
  $(".place-order-form").on('submit', function (e) {
    e.preventDefault();
    newTransaction({
      amount: $("#quantity").val(),
      buyPrice: getBtcUsd(function (val) {
        return val;
      })
    })
  });
});
