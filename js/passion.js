var userId = getParameterByName('userId');
var id_passion = getParameterByName('id_passion');
var nbre = getParameterByName('nbre');

console.log(userId);

ajaxGet("../json/passions.json", function (reponse) {
    var passions = JSON.parse(reponse);
    //console.log(passions[0][0]);
    passions.forEach(function (passion) {
        //console.log(passion[1]);
        //console.log(getParameterByName('id_passion'));
        if (passion[0] == id_passion) {
            //console.log(passion[3]);
            
            if (userId != null) {
                var daString='<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="background-image:url(../img/large/'+passion[3]+');background-repeat:no-repeat;background-position:center center;background-size: cover;"><div class="col-md-5 p-lg-5 mx-auto my-5" style="background-color: white;"><h1 class="display-4 font-weight-normal">'+passion[1]+'</h1><p class="lead font-weight-normal">'+passion[2]+'</p><a class="btn btn-outline-secondary" href="../html/passion.html?userId='+userId+'&id_passion='+passion[0]+'&nbre=1">Ajouter</a></div></div>';
            } else {
                var daString='<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="background-image:url(../img/large/'+passion[3]+');background-repeat:no-repeat;background-position:center center;background-size: cover;"><div class="col-md-5 p-lg-5 mx-auto my-5" style="background-color: white;"><h1 class="display-4 font-weight-normal">'+passion[1]+'</h1><p class="lead font-weight-normal">'+passion[2]+'</p><a class="btn btn-primary" href="../html/login.html">Se connecter</a></div></div>';
            } 
            //var daString='<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="background-image:url(../img/large/'+passion[3]+');background-repeat:no-repeat;background-position:center center;background-size: cover;"><div class="col-md-5 p-lg-5 mx-auto my-5"><h1 class="display-4 font-weight-normal">'+passion[1]+'</h1><p class="lead font-weight-normal">'+passion[2]+'</p><button type="button" class="btn btn-outline-secondary" id="addPassion">Ajouter</button></div></div>';
            $('#passion').append(daString);
            //$('#titlePassion').append(passion[1]);
        }

    });
});


if (nbre == 1) {
    var user_passion = [userId, id_passion];
    // console.log(user_passion);
    ajaxPost("../php/post_json.php", user_passion, function (reponse) {

            alert("Activité ajoutée à votre profil avec succès !");
            window.location.href = '../html/passions.html?userId='+userId;
            return false;
       
        },
        true // Valeur du paramètre isJson
    );
}

if (userId == null) {
    var daStringleftCube='<a class="btn btn-primary" href="../html/login.html">Se connecter</a>';
    var daStringrightCube='<a class="btn btn-primary" href="../html/login.html">Se connecter</a>';
} else {
    var daStringleftCube='<p class="lead"><ul class="list-unstyled"><li>Alexis</li><li>Martine</li><li>Damien</li></ul></p>';
    var daStringrightCube='<p class="lead"><ol><li>Créer un <a target = "_blank" href="https://doodle.com/create">Doodle</a> pour convenir d\'une date et d\'un lieu</li><li>Partager le lien URL du Doodle <a href="#" data-toggle="modal" data-target="#exampleModal">ici</a></li></ol></p>';
}

$('#leftCube').append(daStringleftCube);
$('#rightCube').append(daStringrightCube);
