

function loginClicked () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    window.alert("Inside login");
    var reference = database.ref("Users/");
    window.alert(reference);

    if(authenticate(username, password)){

    } else {
        document.getElementById("errorLabel").style.visibility = 'visible';
    }


}

function registerClicked() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("usernameReg").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1 == pass2) {
        window.alert("inside if");
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



    return true;
}