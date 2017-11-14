var app = new Vue({
  el: '#app',
  data: {},
  computed: {
    value() {
      return this.$http.get('https://www.bitstamp.net/api/v2/ticker/btcusd/', d => {
        return d.last;
      });
    }
  }
});