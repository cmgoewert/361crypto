$(function () {
  if (Cookies.get('isLoggedIn') !== 'true') {
    window.location.href = "pages/login.html"
  } else {
    window.location.href = "pages/dashboard.html";
  }
});