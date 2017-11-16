$(function () {
  if (Cookies.get('isLoggedIn') !== 'true') {
    window.location.href = "login.html"
  }
});