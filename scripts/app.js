$(function(){
 $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", d => {
   $(".conversion .btcusd").html(d.bpi.USD.rate);
 })
});