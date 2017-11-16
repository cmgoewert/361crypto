$(function () {
  Cookies.remove('isLoggedIn');
  Cookies.remove('username');

  window.location.href = "../index.html";
});