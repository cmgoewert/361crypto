$(function () {
  if (Cookies.get('isLoggedIn') === 'true') {
    window.location.href = "dashboard.html";
  }

  const $loginError = $(".login-error");

  $("form.login").on("submit", e => {
    e.preventDefault();
    $loginError.fadeOut();
    let $passwordInput = $("input[name='password']");
    const username = $("input[name='username']").val(), password = $passwordInput.val();

    //example of how to call getuser
    getCurrUser(username, function (user) {
        //window.alert(user);
        //do something with the user object here, it will user.name, user.password, 
        //user.transactions(which will be an array of transaction objects)
    });

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

  $("form.register").on("submit", function (e) {
    e.preventDefault();

    const name = $("input[name='name']").val(),
      username = $("input[name='usernameReg']").val(),
      pass1 = $("input[name='pass1']").val(),
      pass2 = $("input[name='pass2']").val();

    if (username && name && pass1 && pass2 && pass1 === pass2) {
      var reference = database.ref("Users/");

      reference.child(username).set({
        name: name,
        password: pass1
      });
      
      window.location.href = "../index.html";
    } else {
     $(".register-error.error").fadeIn();
    }
  });
});

function authenticate(username, password, callback) {
  database.ref("Users/").once("value").then(snapshot => {
    snapshot.forEach(childSnapshot => {
      callback(childSnapshot.key === username && childSnapshot.val().password === password);
    });
  });
}

