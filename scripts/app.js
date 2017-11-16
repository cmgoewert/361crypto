const rsskey = "b9f08983e0e54457927f26769123b954";

$(function () {
  if (Cookies.get('isLoggedIn') !== 'true') {
    window.location.href = "../index.html";
  }
});