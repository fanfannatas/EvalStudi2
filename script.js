// nom des joueurs
let player1 = "Player 1";
let player2 = "Player 2";

// changer le nom des joueurs
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}
//lancer de dé
function rollTheDice() 
{

    setTimeout(function (){
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;                                       
        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
            var total = randomNumber1 + randomNumber2
        return total;
        })
}
function switchPlayer(){
        let activePlayer ='player 1';
    if (activePlayer === 'player 1'){
        console.log("passe au 2eme player")
    }else{
        activePlayer = 'player 1';
        console.log("passe au player 1")
    }  
}
 //ajouter au total avec hold
function ajoutTotal(){
        

}
        document.querySelector(".score p1").innerHTML = player1score ;
        document.querySelector(".score p2").innerHTML = player2score ;

    }
    
//relancer jusqu a deux fois
//toour suivant