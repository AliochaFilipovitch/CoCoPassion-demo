var userId = getParameterByName('userId');

var cocoButton = '<button type="button" class="btn btn-secondary my-2" disabled>CoCo</button>';

ajaxGet("../json/passions.json", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var passions = JSON.parse(reponse);
    //console.log(passions);
    passions.forEach(function (passion) {
        //console.log(passion[1]);
        // var daString='<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" src="../img/'+passion[3]+'" alt="Card image cap"><div class="card-body"><h4>'+passion[1]+'</h4><p class="card-text">'+passion[2]+'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a class="btn btn-sm btn-outline-secondary" href="../html/passion.html?id_passion='+passion[0]+'" role="button">Voir</a><button type="button" class="btn btn-sm btn-outline-secondary" id="addpassion">Ajouter</button></div><small class="text-muted">9 mins</small></div></div></div></div>';
        // $('#passions').append(daString);
        // $('#passionstest').append(daString);
        if (userId != null) {
            var daString='<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" src="../img/'+passion[3]+'" alt="Card image cap"><div class="card-body"><h4>'+passion[1]+'</h4><p class="card-text">'+passion[2]+'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a href="passion.html?userId='+userId+'&id_passion='+passion[0]+'&nbre=0" class="btn btn-sm btn-outline-secondary">Voir</a></div></div></div></div>';
        } else {
            var daString='<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" src="../img/'+passion[3]+'" alt="Card image cap"><div class="card-body"><h4>'+passion[1]+'</h4><p class="card-text">'+passion[2]+'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a href="passion.html?id_passion='+passion[0]+'" class="btn btn-sm btn-outline-secondary">Voir</a></div></div></div></div>';
        }

        if (passion[4] == 0) {
            $('#passions_art').append(daString);
        }
        if (passion[4] == 1) {
            $('#passions_relax').append(daString);
        }
        if (passion[4] == 2) {
            $('#passions_sport').append(daString);
        }

    });
});

if (userId != null) {
    var buttonsDown='<a href="profil.html?userId='+userId+'" class="btn btn-primary my-2">Mon profil</a> '+cocoButton;
    $('#buttonsDown').append(buttonsDown);
} else {
    var buttonsDown='<a href="login.html" class="btn btn-primary my-2">Se connecter</a> '+cocoButton;
    $('#buttonsDown').append(buttonsDown);
}