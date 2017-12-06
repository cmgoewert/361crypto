$(function () {

  getBtcUsd(function (val) {
    $("#priceLimit").val(val);
  });

  $(".place-order-form").on('submit', function (e) {
    e.preventDefault();
    updateTransactions(Cookies.get('username'), {
      amount: $("#quantity").val(),
      buyPrice: $("#priceLimit").val()
    });
  });
});
