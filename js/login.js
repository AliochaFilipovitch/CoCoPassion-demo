var attempt = 3; // Variable to count number of attempts.

function validate() {

var inputName = document.getElementById("inputName").value;
var inputCode = document.getElementById("inputCode").value;

    if ( (inputName != '') && (inputCode != '')){
        checkUser("../json/users.json",inputName,inputCode);
    }
    else {
        errorTest ();
    }
}

function checkUser (urlFn, inputNameFn, inputCodeFn) {

ajaxGet(urlFn, function (reponse) {
    var users = JSON.parse(reponse);
    users.forEach(function (user) {
        //console.log(user[1]);
        if (inputNameFn == user[1]) {
            if (inputCodeFn == user[3]) {
                alert ("Bonjour "+user[1]+" ! Bienvenue sur CoCo Passion !");
                window.location.href = '../html/passions.html?userId='+user[0];
                return false;

            }
        } 
              
    });

});

}

function errorTest () {
    attempt --;// Decrementing by one.
    alert("Vous n'avez plus que "+attempt+" essai(s).");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
        document.getElementById("inputName").disabled = true;
        document.getElementById("inputCode").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}