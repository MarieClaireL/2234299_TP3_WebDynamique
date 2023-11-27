let canevas;
let contexte;

const DIMENSION_TUILE = 64; //en pixels
const COULEURS = ["skyblue", "paleturquoise"];

let grille;
let compteurTuiles = 0;

window.onload = function() {
    canevas=document.getElementById('canevas');
    contexte = canevas.getContext('2d');

    construireGrille();
    afficherGrille();
}

function construireGrille() {

    // Création du tableau de la grille
    grille = new Array(canevas.width / DIMENSION_TUILE);
    for (let x = 0; x < grille.length; x++) {
        grille[x] = new Array(canevas.height / DIMENSION_TUILE);
    }

    // Remplissage de la grille

    for (let x = 0; x < grille.length; x++) {
        for (let y = 0; y < grille[x].length; y++) {
            grille[x][y] = compteurTuiles;
            avancerCompteurTuiles();
        }
        avancerCompteurTuiles();
    }

}

function avancerCompteurTuiles() {
    compteurTuiles++;

    if(compteurTuiles == 2) {
        compteurTuiles = 0;
    }
}

function afficherGrille() {

    for (let x = 0; x < grille.length; x++) {
        for (let y = 0; y < grille[x].length; y++) {
            contexte.fillStyle = COULEURS[grille[x][y]];
            contexte.fillRect(x * DIMENSION_TUILE, y * DIMENSION_TUILE, DIMENSION_TUILE, DIMENSION_TUILE);
        }
    }

}

// Générer un nombre aléatoire entre [min, max]
function nombreEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}