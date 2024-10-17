var Operation = [] //tableau pour stocker les opérations

// function ajoutoperation
function Calculer(Nombre1, Operateur, Nombre2){
    var Resultat = 0
    switch (Operateur) {
        case " + ":
            Resultat =  Number(Nombre1) + Number(Nombre2);
            break;
    
        case " - ":
            Resultat =  Number(Nombre1) - Number(Nombre2);
            break;
        case " * ":
            Resultat =  Number(Nombre1) * Number(Nombre2);
            break;

        case " / ":
            if (Nombre2 != 0){
            Resultat = Number(Nombre1) / Number(Nombre2);
            }else {
                console.log(" Division par zéro n'est pas possible");
                return;
            }
            break;

            default: console.log("Opération invalide")
            return
    }
    return Resultat;
}

// On récupère les informations de l'utilisateur
var Nombre1 = prompt("Saisir le premier nombre :");
var Operateur = prompt("Saisir l'opérateur (+, -, *, /) :");
var Nombre2 = prompt("Saisir le deuxième nombre :");

// On appelle la fonction pour effectuer le calcul
var Resultat = Calculer(Nombre1, Operateur, Nombre2);

if(Resultat !== undefined) {
    console.log("Le résultat de " + Nombre1  + Operateur  + Nombre2 + " est : " + Resultat);
}


