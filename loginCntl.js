

function loginClicked () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    window.alert("Inside login");
    var reference = database.ref("Users/");

    if(authenticate(username, password)){
        window.alert("authenticated");
    } else {
        document.getElementById("errorLabel").style.visibility = 'visible';
    }


    return true;

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
    var result = false;
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var firebUser = childSnapshot.key;
                var childData = childSnapshot.val();
                var firebPass = childData.password;

                window.alert(firebUser);
                window.alert(username);
                window.alert(firebPass);
                window.alert(password);

                window.alert(firebUser == username);

                if(firebUser == username && firebPass == password){
                    window.alert("inside if");
                    result = true;

                    return true;
                }

            });

            return true;
        });

}