var code = getParameterByName('code');
var userId = getParameterByName('userId');

ajaxGet("../json/users.json", function (reponse) {
    var users = JSON.parse(reponse);
    console.log(users);
    users.forEach(function (user) {

        if (user[0] == userId) {
            var daString1='<h6 class="mb-0 text-black lh-100">'+user[1]+'</h6><small>CoCo Passionné(e)</small>';
            $('#name').append(daString1);
            var daString3='<h6 class="border-bottom border-gray pb-2 mb-0">'+user[3]+'</h6>';
            $('#structure').append(daString3);
            var daString2= user[2];
            $('#mail').append(daString2);

            ajaxGet("../json/users_passions.json", function (reponse) {
    			var users_passions = JSON.parse(reponse);
    			console.log(users_passions);
    			users_passions.forEach(function (user_passion) {

    				if (user_passion[0] == userId) {
    					console.log(user_passion[1]);

    					ajaxGet("../json/passions.json", function (reponse) {
    						var passions = JSON.parse(reponse);
    						console.log(passions);
    						passions.forEach(function (passion) {

    						if (passion[0] == user_passion[1]) {
    							console.log(passion[1]);
    							var daStringPassion= passion[1]+'  &middot; ';
            					$('#passion').append(daStringPassion);
            					

    						}

    					});

    				});

    				}
    			});
    		});
        }

    });
});

var daStringPassionNew= '<a href="index.html">new+</a>';
$('#passionNew').append(daStringPassionNew);