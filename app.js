var app = new Vue({
  el: '#app',
  data: {
    pageName: 'dashboard'
  },
  computed: {
    renderedPage() {
      const __self = this;
      return __self.$http.get("pages/" + __self.pageName + ".html", d => {
        return d;
      });
    }
  }
});