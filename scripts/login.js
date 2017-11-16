$(function () {
  const $loginError = $(".login-error");

  $("form.login").on("submit", e => {
    e.preventDefault();
    $loginError.fadeOut();
    let $passwordInput = $("input[name='password']");
    const username = $("input[name='username']").val(), password = $passwordInput.val();

    authenticate(username, password, function (authenticated) {
      if (authenticated) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('username', username.toLowerCase());
        window.location.href = "../index.html";
      } else {
        $loginError.fadeIn();
        $passwordInput.val('');
      }
    });
  });
});

function registerClicked() {
  const name = document.getElementById("name").value,
    username = document.getElementById("usernameReg").value,
    pass1 = document.getElementById("pass1").value,
    pass2 = document.getElementById("pass2").value;

  if (pass1 === pass2) {
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
  database.ref("Users/").once("value").then(snapshot => {
    snapshot.forEach(childSnapshot => {
      callback(childSnapshot.key === username && childSnapshot.val().password === password);
    });
  });
}