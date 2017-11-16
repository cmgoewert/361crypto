

function loginClicked () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    authenticate(username, password);
}

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

function authenticate(username, password){
    var query = database.ref("Users/");
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var firebUser = childSnapshot.key;
                var childData = childSnapshot.val();
                var firebPass = childData.password;

                if(firebUser == username && firebPass == password){
                    window.location="https://cmgoewert.github.io./#";
                }

            });
        });
}