$(function () {
  const $loginError = $(".login-error");

  $(".login").on("submit", function (e) {
    e.preventDefault();
    $loginError.fadeOut();
    const username = $("input[name='username']").val(), password = $("input[name='password']").val();

    authenticate(username, password, function (authenticated) {
      if (authenticated) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('username', username.toLowerCase());
        window.location.href = "index.html";
      } else {
        $loginError.fadeIn();
      }
    });
  });
});

function registerClicked() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("usernameReg").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  if (pass1 == pass2) {
    var reference = database.ref("Users/");

    reference.child(username).set({
      name: name,
      password: pass1
    });
  } else {
    document.getElementById("regErrorLabel").style.visibility = 'visible';
  }
}

function authenticate(username, password, callback) {
  var query = database.ref("Users/");
  query.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      callback(childSnapshot.key === username && childSnapshot.val().password === password);
    });
  });
}