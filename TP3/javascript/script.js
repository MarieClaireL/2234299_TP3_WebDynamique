let posXT;
let posYT;
let posXP;
let posYP;
let posXC =[];
let posYC=[];
let debut=0;
const DIMENSION_CARRET = 50;
const DEPLACEMENT_CARRET = 5;
const DIMENSION_CARREP = 50;
const DEPLACEMENT_CARREP = 5;
const HAUTEUR_CANNES = 40;
const LARGEUR_CANNES = 30;
let canevas;
let contexte;
let grille;
let compteurTuiles = 0;
let directionT=0;
let directionP=0;
let indiceCannes;
let cannes =[];
let etat = [];
let ptP=0;
let ptT=0;
let total=0;
let joueurGauche=0;
let joueurDroite=0;
musique=1;
const once = fn => ((ran = false) => () => ran ? fn : (ran = !ran, fn = fn()))();
const ouvrir = once(() => augmenterPoints());
const ouvrir1 = once(() => augmenterPoints());
const ouvrir2 = once(() => augmenterPoints());
const ouvrir3 = once(() => augmenterPoints());
const ouvrir4 = once(() => augmenterPoints());
const ouvrir5 = once(() => augmenterPoints());
const ouvrir6 = once(() => augmenterPoints());
const ouvrir7 = once(() => augmenterPoints());
const ouvrir8 = once(() => augmenterPoints());
const ouvrir9 = once(() => augmenterPoints());
const ouvrir10 = once(() => augmenterPoints());
const ouvrir11 = once(() => augmenterPoints());
const ouvrir12 = once(() => augmenterPoints());
const ouvrir13 = once(() => augmenterPoints());
const ouvrir14 = once(() => augmenterPoints());
const ouvrir15 = once(() => augmenterPoints());

const ouvrirT = once(() => augmenterPointsT());
const ouvrir1T = once(() => augmenterPointsT());
const ouvrir2T = once(() => augmenterPointsT());
const ouvrir3T = once(() => augmenterPointsT());
const ouvrir4T = once(() => augmenterPointsT());
const ouvrir5T = once(() => augmenterPointsT());
const ouvrir6T = once(() => augmenterPointsT());
const ouvrir7T = once(() => augmenterPointsT());
const ouvrir8T = once(() => augmenterPointsT());
const ouvrir9T = once(() => augmenterPointsT());
const ouvrir10T = once(() => augmenterPointsT());
const ouvrir11T = once(() => augmenterPointsT());
const ouvrir12T = once(() => augmenterPointsT());
const ouvrir13T = once(() => augmenterPointsT());
const ouvrir14T = once(() => augmenterPointsT());
const ouvrir15T = once(() => augmenterPointsT());


const DIMENSION_TUILE = 64; //en pixels
const COULEURS = ["skyblue", "paleturquoise"];
let touches = {
    "ArrowUp":false,
    "ArrowDown":false,
    "ArrowLeft":false,
    "ArrowRight":false,
    "w":false,
    "d":false,
    "s":false,
    "a":false,
    "1":false,
    "2":false
    
};
window.onload = function(){
    window.addEventListener("keydown", toucheAppuyee);
    window.addEventListener("keyup", toucheRelachee);
    canevas=document.getElementById('monCanevas');
    contexte = canevas.getContext('2d');
    canevas.width = window.innerWidth;
    canevas.height = window.innerHeight;
    posXT= (canevas.width/2)- (DIMENSION_CARRET/2);
    posYT= (canevas.height/2)- (DIMENSION_CARRET/2);
    posXP= (canevas.width/2)- (DIMENSION_CARREP/2);
    posYP= (canevas.height/2)- (DIMENSION_CARREP/2);
    construireGrille();
    afficherGrille();
    posXT= 1300;
    posYT= 400;
    tracerTheodoreGauche(contexte);
    posXP= 900;
    posYP= 400;
    tracerPabloGauche(contexte);

}


function collision(A,B,C,D,E,F){
        if (A.x >= D.x || C.x >= B.x){
            
        return false;
        }
        if (A.y >= D.y || C.y >= B.y) {
        return false;
        }
        return true;
        
}
function collisionT(A,B,C,D,E,F){
    if (A.x >= F.x || E.x >= B.x){
    return false;
    }
    if (A.y >= F.y || E.y >= B.y) {
    return false;
    }
    return true;
}
function collision1(A1,B1,C,D,E,F){
    if (A1.x >= D.x || C.x >= B1.x){
    return false;
    }
    if (A1.y >= D.y || C.y >= B1.y) {
    return false;
    }

    return true;
}
function collision1T(A1,B1,C,D,E,F){
    if (A1.x >= F.x || E.x >= B1.x){
    return false;
    }
    if (A1.y >= F.y || E.y >= B1.y) {
    return false;
    }
    return true;
}
function collision2(A2,B2,C,D,E,F){
    if (A2.x >= D.x || C.x >= B2.x){
    return false;
    }
    if (A2.y >= D.y || C.y >= B2.y) {
    return false;
    }

    return true;
}
function collision2T(A2,B2,C,D,E,F){
    if (A2.x >= F.x || E.x >= B2.x){
    return false;
    }
    if (A2.y >= F.y || E.y >= B2.y) {
    return false;
    }
    return true;
}
function collision3(A3,B3,C,D,E,F){
    if (A3.x >= D.x || C.x >= B3.x){
    return false;
    }
    if (A3.y >= D.y || C.y >= B3.y) {
    return false;
    }

    return true;
}
function collision3T(A3,B3,C,D,E,F){
    if (A3.x >= F.x || E.x >= B3.x){
    return false;
    }
    if (A3.y >= F.y || E.y >= B3.y) {
    return false;
    }
    return true;
}
function collision4(A4,B4,C,D,E,F){
    if (A4.x >= D.x || C.x >= B4.x){
    return false;
    }
    if (A4.y >= D.y || C.y >= B4.y) {
    return false;
    }

    return true;
}
function collision4T(A4,B4,C,D,E,F){
    if (A4.x >= F.x || E.x >= B4.x){
    return false;
    }
    if (A4.y >= F.y || E.y >= B4.y) {
    return false;
    }
    return true;
}
function collision5(A5,B5,C,D,E,F){
    if (A5.x >= D.x || C.x >= B5.x){
    return false;
    }
    if (A5.y >= D.y || C.y >= B5.y) {
    return false;
    }
    return true;
}
function collision5T(A5,B5,C,D,E,F){
    if (A5.x >= F.x || E.x >= B5.x){
    return false;
    }
    if (A5.y >= F.y || E.y >= B5.y) {
    return false;
    }
    return true;
}
function collision6(A6,B6,C,D,E,F){
    if (A6.x >= D.x || C.x >= B6.x){
    return false;
    }
    if (A6.y >= D.y || C.y >= B6.y) {
    return false;
    }
    
    return true;
}
function collision6T(A6,B6,C,D,E,F){
    if (A6.x >= F.x || E.x >= B6.x){
    return false;
    }
    if (A6.y >= F.y || E.y >= B6.y) {
    return false;
    }
    return true;
}
function collision7(A7,B7,C,D,E,F){
    if (A7.x >= D.x || C.x >= B7.x){
    return false;
    }
    if (A7.y >= D.y || C.y >= B7.y) {
    return false;
    }
    
    return true;
}
function collision7T(A7,B7,C,D,E,F){
    if (A7.x >= F.x || E.x >= B7.x){
    return false;
    }
    if (A7.y >= F.y || E.y >= B7.y) {
    return false;
    }
    return true;
}
function collision8(A8,B8,C,D,E,F){
    if (A8.x >= D.x || C.x >= B8.x){
    return false;
    }
    if (A8.y >= D.y || C.y >= B8.y) {
    return false;
    }
    
    return true;
}
function collision8T(A8,B8,C,D,E,F){
    if (A8.x >= F.x || E.x >= B8.x){
    return false;
    }
    if (A8.y >= F.y || E.y >= B8.y) {
    return false;
    }
    return true;
}
function collision9(A9,B9,C,D,E,F){
    if (A9.x >= D.x || C.x >= B9.x){
    return false;
    }
    if (A9.y >= D.y || C.y >= B9.y) {
    return false;
    }
    
    return true;
}
function collision9T(A1,B1,C,D,E,F){
    if (A9.x >= F.x || E.x >= B9.x){
    return false;
    }
    if (A9.y >= F.y || E.y >= B9.y) {
    return false;
    }
    return true;
}
function collision10(A10,B10,C,D,E,F){
    if (A10.x >= D.x || C.x >= B10.x){
    return false;
    }
    if (A10.y >= D.y || C.y >= B10.y) {
    return false;
    }
    
    return true;
}
function collision10T(A10,B10,C,D,E,F){
    if (A10.x >= F.x || E.x >= B10.x){
    return false;
    }
    if (A10.y >= F.y || E.y >= B10.y) {
    return false;
    }
    return true;
}
function collision11(A11,B11,C,D,E,F){
    if (A11.x >= D.x || C.x >= B11.x){
    return false;
    }
    if (A11.y >= D.y || C.y >= B11.y) {
    return false;
    }
    
    return true;
}
function collision11T(A11,B11,C,D,E,F){
    if (A11.x >= F.x || E.x >= B11.x){
    return false;
    }
    if (A11.y >= F.y || E.y >= B11.y) {
    return false;
    }
    return true;
}
function collision12(A12,B12,C,D,E,F){
    if (A12.x >= D.x || C.x >= B12.x){
    return false;
    }
    if (A12.y >= D.y || C.y >= B12.y) {
    return false;
    }
    
    return true;
}
function collision12T(A12,B12,C,D,E,F){
    if (A12.x >= F.x || E.x >= B12.x){
    return false;
    }
    if (A12.y >= F.y || E.y >= B12.y) {
    return false;
    }
    return true;
}
function collision13(A13,B13,C,D,E,F){
    if (A13.x >= D.x || C.x >= B13.x){
    return false;
    }
    if (A13.y >= D.y || C.y >= B13.y) {
    return false;
    }
    
    return true;
}
function collision13T(A13,B13,C,D,E,F){
    if (A13.x >= F.x || E.x >= B13.x){
    return false;
    }
    if (A13.y >= F.y || E.y >= B13.y) {
    return false;
    }
    return true;
}
function collision14(A14,B14,C,D,E,F){
    if (A14.x >= D.x || C.x >= B14.x){
    return false;
    }
    if (A14.y >= D.y || C.y >= B14.y) {
    return false;
    }
    
    return true;
}
function collision14T(A14,B14,C,D,E,F){
    if (A14.x >= F.x || E.x >= B14.x){
    return false;
    }
    if (A14.y >= F.y || E.y >= B14.y) {
    return false;
    }
    return true;
}

function augmenterPoints(){
    ptP++;
    console.log("Points Pablo = "+ ptP);
    total++;
    console.log("Total "+total);
    if(total==15){
        console.log("Yeahhhh!")
        let dernier = new Audio('audio/DerniereCanne.mp3');
        dernier.play();
    }
}

function augmenterPointsT(){
    ptT++;
    console.log("Points Theodore = "+ ptT);
    total++;
    console.log("Total"+total);
    if(total==15){
        console.log("Yeahhhh!")
        let dernier = new Audio('audio/DerniereCanne.mp3');
        dernier.play();
    }
}

//musique
function Musique(){
    let musiqueAudio = new Audio('audio/MusiqueNoel.mp3');
    //musiqueAudio.loop=true;
    //musiqueAudio.play();
    tracerTheodoreGauche(contexte);
    tracerPabloGauche(contexte);
    cannes.length=14;

    indice=5;
    for (let i = 0; i <= 14; i++) {
        posXC[i]=Math.floor(Math.random() * (700 - 0 + 1) + 0);
        posYC[i]=Math.floor(Math.random() * (700 - 0 + 1) + 0);
        etat[i]=0;
        cannes.push({x: posXC[i], y: posYC[i]});
         
      }

        A={x: posXC[0], y: posYC[0]};
       B= {x: posXC[0]+LARGEUR_CANNES, y: posYC[0]+HAUTEUR_CANNES};
       A1={x: posXC[1], y: posYC[1]};
       B1= {x: posXC[1]+LARGEUR_CANNES, y: posYC[1]+HAUTEUR_CANNES};
       A2={x: posXC[2], y: posYC[2]};
       B2= {x: posXC[2]+LARGEUR_CANNES, y: posYC[2]+HAUTEUR_CANNES};
       A3={x: posXC[3], y: posYC[3]};
       B3= {x: posXC[3]+LARGEUR_CANNES, y: posYC[3]+HAUTEUR_CANNES};
       A4={x: posXC[4], y: posYC[4]};
       B4= {x: posXC[4]+LARGEUR_CANNES, y: posYC[4]+HAUTEUR_CANNES};
       A5={x: posXC[5], y: posYC[5]};
       B5= {x: posXC[5]+LARGEUR_CANNES, y: posYC[5]+HAUTEUR_CANNES};
       A6={x: posXC[6], y: posYC[6]};
       B6= {x: posXC[6]+LARGEUR_CANNES, y: posYC[6]+HAUTEUR_CANNES};
       A7={x: posXC[7], y: posYC[7]};
       B7= {x: posXC[7]+LARGEUR_CANNES, y: posYC[7]+HAUTEUR_CANNES};
       A8={x: posXC[8], y: posYC[8]};
       B8= {x: posXC[8]+LARGEUR_CANNES, y: posYC[8]+HAUTEUR_CANNES};
       A9={x: posXC[9], y: posYC[9]};
       B9= {x: posXC[9]+LARGEUR_CANNES, y: posYC[9]+HAUTEUR_CANNES};
       A10={x: posXC[10], y: posYC[10]};
       B10= {x: posXC[10]+LARGEUR_CANNES, y: posYC[10]+HAUTEUR_CANNES};
       A11={x: posXC[11], y: posYC[11]};
       B11= {x: posXC[11]+LARGEUR_CANNES, y: posYC[11]+HAUTEUR_CANNES};
       A12={x: posXC[12], y: posYC[12]};
       B12= {x: posXC[12]+LARGEUR_CANNES, y: posYC[12]+HAUTEUR_CANNES};
       A13={x: posXC[13], y: posYC[13]};
       B13= {x: posXC[13]+LARGEUR_CANNES, y: posYC[13]+HAUTEUR_CANNES};
       A14={x: posXC[14], y: posYC[14]};
       B14= {x: posXC[14]+LARGEUR_CANNES, y: posYC[14]+HAUTEUR_CANNES};

   
   
    window.requestAnimationFrame(boucleJeu); 
    // tracerCannes(contexte);
   
}

function boucleJeu(timeStamp, plop){
    calculerPosition();
    afficherGrille();
    tracerCannes(contexte);
    tracerTheodoreGauche(contexte);
    tracerPabloGauche(contexte);



    if(directionT==1){
        //console.log("Derriere");
        tracerTheodoreDerriere(contexte); 
    }
    if(directionT==2){
       // console.log("Droite");
        tracerTheodoreDroite(contexte);
    }
    if(directionT==3){
       // console.log("Face");
        tracerTheodoreFace(contexte);
    }
    if(directionT==4){
       // console.log("Gauche");
        tracerTheodoreGauche(contexte);
    }



    if(directionP==1){
       // console.log("Derriere");
        tracerPabloDerriere(contexte);
    }
    if(directionP==2){
       // console.log("Droite");
        tracerPabloDroite(contexte);
    }
    if(directionP==3){
       // console.log("Face");
        tracerPabloFace(contexte);
    }
    if(directionP==4){
        //console.log("Gauche");
        tracerPabloGauche(contexte);
    }


    

    
   
    
    C={x: posXP, y: posYP};
    D= {x: posXP+DIMENSION_CARREP, y: posYP+DIMENSION_CARREP};
    E= {x: posXT, y: posYT};
    F= {x: posXT+DIMENSION_CARRET, y: posYT+DIMENSION_CARRET}; 
    if( collision(A,B,C,D,E,F)){
        
        //console.log("COLLISION");
            cannes.splice(0, 1); 
            etat[0]=1;
            ouvrir();
            A={x:0, y: 0};
            B= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collisionT(A,B,C,D,E,F)){

        console.log("COLLISION");
       ouvrirT();
            cannes.splice(0, 1); 
            etat[0]=1;
            A={x:0, y: 0};
       B= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
       let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }

    if( collision1(A1,B1,C,D,E,F)){

        console.log("COLLISION1");
       ouvrir1();
            cannes.splice(1, 1); 
            etat[1]=1;
            A1={x:0, y: 0};
            B1= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision1T(A1,B1,C,D,E,F)){

        console.log("COLLISION");
       ouvrir1T();
            cannes.splice(1, 1); 
            etat[1]=1;
            A1={x:0, y: 0};
            B1= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }

    if( collision2(A2,B2,C,D,E,F)){

       // console.log("COLLISION2");
       ouvrir2();
            cannes.splice(2, 1); 
            etat[2]=1;
            A2={x:0, y: 0};
            B2= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision2T(A2,B2,C,D,E,F)){

        console.log("COLLISION2");
       ouvrir2T();
            cannes.splice(2, 1); 
            etat[2]=1;
            A2={x:0, y: 0};
            B2= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    
    if( collision3(A3,B3,C,D,E,F)){

        console.log("COLLISION3");
       ouvrir3();
            cannes.splice(3, 1); 
            etat[3]=1;
            A3={x:0, y: 0};
            B3= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision3T(A3,B3,C,D,E,F)){

        console.log("COLLISION3");
       ouvrir3T();
            cannes.splice(3, 1); 
            etat[3]=1;
            A3={x:0, y: 0};
            B3= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision4(A4,B4,C,D,E,F)){

        console.log("COLLISION4");
       ouvrir4();
            cannes.splice(4, 1); 
            etat[4]=1;
            A4={x:0, y: 0};
            B4= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision4T(A4,B4,C,D,E,F)){

        console.log("COLLISION4");
       ouvrir4T();
            cannes.splice(4, 1); 
            etat[4]=1;
            A4={x:0, y: 0};
            B4= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision5(A5,B5,C,D,E,F)){

        console.log("COLLISION5");
      ouvrir5();
            cannes.splice(5, 1); 
            etat[5]=1;
            A5={x:0, y: 0};
            B5= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision5T(A5,B5,C,D,E,F)){

        console.log("COLLISION5");
      ouvrir5T();
            cannes.splice(5, 1); 
            etat[5]=1;
            A5={x:0, y: 0};
            B5= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision6(A6,B6,C,D,E,F)){

        //console.log("COLLISION6");
        ouvrir6();
            cannes.splice(6, 1); 
            etat[6]=1;
            A6={x:0, y: 0};
            B6= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision6T(A6,B6,C,D,E,F)){

        console.log("COLLISION6");
        ouvrir6T();
            cannes.splice(6, 1); 
            etat[6]=1;
            A6={x:0, y: 0};
            B6= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision7(A7,B7,C,D,E,F)){
        ouvrir7();
        console.log("COLLISION7");
        
            cannes.splice(7, 1); 
            etat[7]=1;
            A7={x:0, y: 0};
            B7= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision7T(A7,B7,C,D,E,F)){

        console.log("COLLISION7");
       ouvrir7T();
            cannes.splice(7, 1); 
            etat[7]=1;
            A7={x:0, y: 0};
            B7= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision8(A8,B8,C,D,E,F)){
        ouvrir8();
        console.log("COLLISION8");
        
            cannes.splice(8, 1); 
            etat[8]=1;
            A8={x:0, y: 0};
            B8= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision8T(A8,B8,C,D,E,F)){

        console.log("COLLISION8");
      ouvrir8T();
            cannes.splice(8, 1); 
            etat[8]=1;
            A8={x:0, y: 0};
            B8= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision9(A9,B9,C,D,E,F)){
        ouvrir9();
        console.log("COLLISION9");
        
            cannes.splice(9, 1); 
            etat[9]=1;
            A9={x:0, y: 0};
            B9= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision9T(A9,B9,C,D,E,F)){

        console.log("COLLISION9");
       ouvrir9T();
            cannes.splice(9, 1); 
            etat[9]=1;
            A9={x:0, y: 0};
            B9= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision10(A10,B10,C,D,E,F)){
        ouvrir10();
        console.log("COLLISION10");
        
            cannes.splice(10, 1); 
            etat[10]=1;
            A10={x:0, y: 0};
            B10= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision10T(A10,B10,C,D,E,F)){

        console.log("COLLISION10");
        ouvrir10T();
            cannes.splice(10, 1); 
            etat[10]=1;
            A10={x:0, y: 0};
            B10= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision11(A11,B11,C,D,E,F)){

        console.log("COLLISION11");
        ouvrir11();
            cannes.splice(11, 1); 
            etat[11]=1;
            A11={x:0, y: 0};
            B11= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision11T(A11,B11,C,D,E,F)){

        console.log("COLLISION11");
       ouvrir11T();
            cannes.splice(11, 1); 
            etat[11]=1;
            A11={x:0, y: 0};
            B11= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision12(A12,B12,C,D,E,F)){
        console.log("COLLISION12");
       ouvrir12();
            cannes.splice(12, 1); 
            etat[12]=1;
            A12={x:0, y: 0};
            B12= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision12T(A12,B12,C,D,E,F)){
        console.log("COLLISION12");
        ouvrir12T();
            cannes.splice(12, 1); 
            etat[12]=1;
            A12={x:0, y: 0};
            B12= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision13(A13,B13,C,D,E,F)){
        ouvrir13();
        console.log("COLLISION13");
            cannes.splice(13, 1); 
            etat[13]=1;
            A13={x:0, y: 0};
            B13= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision13T(A13,B13,C,D,E,F)){
        console.log("COLLISION13");
       ouvrir13T();
            cannes.splice(13, 1); 
            etat[13]=1;
            A13={x:0, y: 0};
            B13= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision14(A14,B14,C,D,E,F)){
        ouvrir14();
        console.log("COLLISION14");
            cannes.splice(14, 1); 
            etat[14]=1;
            A14={x:0, y: 0};
            B14= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    if( collision14T(A14,B14,C,D,E,F)){
        console.log("COLLISION14");
       ouvrir14T();
            cannes.splice(14, 1); 
            etat[14]=1;
            A14={x:0, y: 0};
            B14= {x: 0-LARGEUR_CANNES, y: 0-HAUTEUR_CANNES};
            let plop = new Audio('audio/Plop.mp4');
            plop.play();
    }
    window.requestAnimationFrame(boucleJeu);
}
function son(){
    cannes[cannes.length - 1]
    console.log(cannes.length-1)
    for (let i = 0; i <= cannes.length-1; i++){
console.log("AAAAAA");
    }
}

function toucheAppuyee(evenement) {
    if((evenement.key === "ArrowUp")|| (evenement.key === "ArrowDown")||
    (evenement.key === "ArrowLeft")||(evenement.key === "ArrowRight")||
    (evenement.key === "w")|| (evenement.key === "d")||
    (evenement.key === "s")||(evenement.key === "a")){
        touches[evenement.key]= true;
        console.log("a");
        
    }
    if((evenement.key === "1")){
        touches[evenement.key]= true; 
        joueurGauche=1; 
        console.log("joueur gauche prêt!" + joueurGauche);
       
    }

    if((evenement.key === "2")){
        touches[evenement.key]= true;
        joueurDroite=1; 
        console.log("joueur droite prêt!" + joueurDroite);
        
    }
    if(joueurDroite==1 && joueurGauche==1){
        console.log("lol");
        Musique();
        joueurDroite=0;
        joueurGauche=0;
    }
    else{
        console.log("naurhhh");
    }
    
}

function toucheRelachee(evenement) {
    if((evenement.key === "ArrowUp")|| (evenement.key === "ArrowDown")||
    (evenement.key === "ArrowLeft")||(evenement.key === "ArrowRight")||
    (evenement.key === "w")|| (evenement.key === "d")||
    (evenement.key === "s")||(evenement.key === "a")){
        touches[evenement.key]= false;
        console.log("b");
    }

}

function calculerPosition(){
    
    if(touches["ArrowUp"]){
        posYT-= DEPLACEMENT_CARRET;
        console.log("hdswh");
        directionT=1;
    }
    if(touches["ArrowDown"]){
        posYT+= DEPLACEMENT_CARRET;
        directionT=3;
    }
    if(touches["ArrowLeft"]){
        posXT-= DEPLACEMENT_CARRET;
        directionT=4;
    }
    if(touches["ArrowRight"]){
        posXT+= DEPLACEMENT_CARRET;
        directionT=2;
    }

    if(posXT<0){
        posXT=0;
    }

    if(posXT>=1770){
        posXT=1770;
    }

    if(posYT<0){
        posYT=0;
    }
    if(posYT>=870){
        posYT=870;
    }



    if(touches["w"]){
        posYP-= DEPLACEMENT_CARREP;
        console.log("dsds");
        directionP=1;
    }
    if(touches["s"]){
        posYP+= DEPLACEMENT_CARREP;
        directionP=3;
    }
    if(touches["a"]){
        posXP-= DEPLACEMENT_CARREP;
        directionP=4;
    }
    if(touches["d"]){
        posXP+= DEPLACEMENT_CARREP;
        directionP=2;
    }

    if(posXP<0){
        posXP=0;
    }

    if(posXP>=1770){
        posXP=1770;
    }

    if(posYP<0){
        posYP=0;
    }
    if(posYP>=870){
        posYP=870;
    }
}




function tracerTheodoreFace(contexte){

   //fill blanc devant
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT, posYT);
   contexte.lineTo(posXT+50, posYT);
   contexte.lineTo(posXT+50, posYT+50);
   contexte.lineTo(posXT, posYT+50);
   contexte.lineTo(posXT, posYT);
   contexte.fill();


   // corps
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+4, posYT+4);
   contexte.lineTo(posXT+46, posYT+4);
   contexte.lineTo(posXT+46, posYT+50);
   contexte.lineTo(posXT+4, posYT+50);
   contexte.lineTo(posXT+4, posYT+4);
   contexte.fill();


   //oreille gauche
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT, posYT);
   contexte.lineTo(posXT+8, posYT);
   contexte.lineTo(posXT+8, posYT+8);
   contexte.lineTo(posXT, posYT+8);
   contexte.lineTo(posXT, posYT);
   contexte.fill();


   //oreille droite
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+42, posYT);
   contexte.lineTo(posXT+50, posYT);
   contexte.lineTo(posXT+50, posYT+8);
   contexte.lineTo(posXT+42, posYT+8);
   contexte.lineTo(posXT+42, posYT);
   contexte.fill();

   // ventre
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+13, posYT+32);
   contexte.lineTo(posXT+37, posYT+32);
   contexte.lineTo(posXT+37, posYT+50);
   contexte.lineTo(posXT+13, posYT+50);
   contexte.fill();


   // museau
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+17, posYT+20);
   contexte.lineTo(posXT+33, posYT+20);
   contexte.lineTo(posXT+33, posYT+28);
   contexte.lineTo(posXT+17, posYT+28);
   contexte.fill();

   // nez
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+22, posYT+20);
   contexte.lineTo(posXT+28, posYT+20);
   contexte.lineTo(posXT+28, posYT+24);
   contexte.lineTo(posXT+22, posYT+24);
   contexte.fill();

   //oeil gauche
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+12, posYT+12);
   contexte.lineTo(posXT+18, posYT+12);
   contexte.lineTo(posXT+18, posYT+17);
   contexte.lineTo(posXT+12, posYT+17);
   contexte.fill();

   //oeil droite
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+32, posYT+12);
   contexte.lineTo(posXT+38, posYT+12);
   contexte.lineTo(posXT+38, posYT+17);
   contexte.lineTo(posXT+32, posYT+17);
   contexte.fill();

// patte gauche
   contexte.fillStyle= "tan";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+5, posYT+42);
   contexte.lineTo(posXT+19, posYT+42);
   contexte.lineTo(posXT+19, posYT+50);
   contexte.lineTo(posXT+5, posYT+50);
   contexte.fill();

   // patte gauche
   contexte.fillStyle= "tan";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+45, posYT+42);
   contexte.lineTo(posXT+31, posYT+42);
   contexte.lineTo(posXT+31, posYT+50);
   contexte.lineTo(posXT+45, posYT+50);
   contexte.fill();

}

function tracerTheodoreDroite(contexte){


    //droite
    
      //fill blanc derriere
      contexte.fillStyle= "white";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(posXT, posYT);
      contexte.lineTo(posXT+50, posYT);
      contexte.lineTo(posXT+50, posYT+50);
      contexte.lineTo(posXT, posYT+50);
      contexte.lineTo(posXT, posYT);
      contexte.fill();

        // corps
        contexte.fillStyle= "beige";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+4, posYT+4);
        contexte.lineTo(posXT+44, posYT+4);
        contexte.lineTo(posXT+44, posYT+50);
        contexte.lineTo(posXT+4, posYT+50);
        contexte.lineTo(posXT+4, posYT+4);
        contexte.fill();

        //oreille
        contexte.fillStyle= "beige";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT, posYT);
        contexte.lineTo(posXT, posYT);
        contexte.lineTo(posXT, posYT+8);
        contexte.lineTo(posXT+8, posYT+8);
        contexte.lineTo(posXT+8, posYT);
        contexte.fill();

         // patte
        contexte.fillStyle= "tan";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+33, posYT+42);
        contexte.lineTo(posXT+47, posYT+42);
        contexte.lineTo(posXT+47, posYT+50);
        contexte.lineTo(posXT+33, posYT+50);
        contexte.fill();

        // museau
        contexte.fillStyle= "white";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+44, posYT+17);
        contexte.lineTo(posXT+50, posYT+17);
        contexte.lineTo(posXT+50, posYT+27);
        contexte.lineTo(posXT+44, posYT+27);
        contexte.fill();

        // nez
        contexte.fillStyle= "black";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+48, posYT+17);
        contexte.lineTo(posXT+50, posYT+17);
        contexte.lineTo(posXT+50, posYT+20);
        contexte.lineTo(posXT+48, posYT+20);
        contexte.fill();

        //oeil
        contexte.fillStyle= "black";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+42, posYT+12);
        contexte.lineTo(posXT+36, posYT+12);
        contexte.lineTo(posXT+36, posYT+17);
        contexte.lineTo(posXT+42, posYT+17);
        contexte.fill();
}

function tracerTheodoreDerriere(contexte){

    //fill blanc derriere
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT, posYT);
   contexte.lineTo(posXT+50, posYT);
   contexte.lineTo(posXT+50, posYT+50);
   contexte.lineTo(posXT, posYT+50);
   contexte.lineTo(posXT, posYT);
   contexte.fill();


   // corps
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+4, posYT+4);
   contexte.lineTo(posXT+46, posYT+4);
   contexte.lineTo(posXT+46, posYT+50);
   contexte.lineTo(posXT+4, posYT+50);
   contexte.lineTo(posXT+4, posYT+4);
   contexte.fill();


   //oreille gauche
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT, posYT);
   contexte.lineTo(posXT+8, posYT);
   contexte.lineTo(posXT+8, posYT+8);
   contexte.lineTo(posXT, posYT+8);
   contexte.lineTo(posXT, posYT);
   contexte.fill();

    //oreille droite
    contexte.fillStyle= "beige";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXT+42, posYT);
    contexte.lineTo(posXT+50, posYT);
    contexte.lineTo(posXT+50, posYT+8);
    contexte.lineTo(posXT+42, posYT+8);
    contexte.lineTo(posXT+42, posYT);
    contexte.fill();

      // queue
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(posXT+18, posYT+32);
   contexte.lineTo(posXT+32, posYT+32);
   contexte.lineTo(posXT+32, posYT+42);
   contexte.lineTo(posXT+18, posYT+42);
   contexte.fill();

}

function tracerTheodoreGauche(contexte){

          //fill blanc derriere
          contexte.fillStyle= "white";
          contexte.lineWidth=3;
          contexte.beginPath();
          contexte.moveTo(posXT, posYT);
          contexte.lineTo(posXT+50, posYT);
          contexte.lineTo(posXT+50, posYT+50);
          contexte.lineTo(posXT, posYT+50);
          contexte.lineTo(posXT, posYT);
          contexte.fill();
    
          // corps
       contexte.fillStyle= "beige";
       contexte.lineWidth=3;
       contexte.beginPath();
       contexte.moveTo(posXT+6, posYT+4);
       contexte.lineTo(posXT+46, posYT+4);
       contexte.lineTo(posXT+46, posYT+50);
       contexte.lineTo(posXT+6, posYT+50);
       contexte.lineTo(posXT+6, posYT+4);
       contexte.fill();
    
    
        //oreille droite
        contexte.fillStyle= "beige";
        contexte.lineWidth=3;
        contexte.beginPath();
        contexte.moveTo(posXT+42, posYT);
        contexte.lineTo(posXT+50, posYT);
        contexte.lineTo(posXT+50, posYT+8);
        contexte.lineTo(posXT+42, posYT+8);
        contexte.lineTo(posXT+42, posYT);
        contexte.fill();
    
          // queue
       contexte.fillStyle= "tan";
       contexte.lineWidth=3;
       contexte.beginPath();
       contexte.moveTo(posXT+3, posYT+42);
       contexte.lineTo(posXT+17, posYT+42);
       contexte.lineTo(posXT+17, posYT+50);
       contexte.lineTo(posXT+3, posYT+50);
       contexte.fill();
    
       
    // museau
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXT, posYT+17);
    contexte.lineTo(posXT+6, posYT+17);
    contexte.lineTo(posXT+6, posYT+27);
    contexte.lineTo(posXT, posYT+27);
    contexte.fill();
    
    
    // nez
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXT, posYT+17);
    contexte.lineTo(posXT+2, posYT+17);
    contexte.lineTo(posXT+2, posYT+20);
    contexte.lineTo(posXT, posYT+20);
    contexte.fill();
    
    //oeil gauche
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXT+8, posYT+12);
    contexte.lineTo(posXT+14, posYT+12);
    contexte.lineTo(posXT+14, posYT+17);
    contexte.lineTo(posXT+8, posYT+17);
    contexte.fill();
    
}


function tracerCannes(contexte){
// canne

//console.log("cannes!");
      // patte
      for (let i = 0; i <= 14; i++){

       if(etat[i]==0){

       
           
        

      
      

      // patte
      contexte.fillStyle= "white";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(posXC[i], posYC[i]);
      contexte.lineTo(posXC[i]+10, posYC[i]);
      contexte.lineTo(posXC[i]+10, posYC[i]+10);
      contexte.lineTo(posXC[i], posYC[i]+10);
      contexte.fill();

      // patte
      contexte.fillStyle= "red";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(posXC[i], posYC[i]+10);
      contexte.lineTo(posXC[i]+10, posYC[i]+10);
      contexte.lineTo(posXC[i]+10, posYC[i]+20);
      contexte.lineTo(posXC[i], posYC[i]+20);
      contexte.fill();

      // patte
      contexte.fillStyle= "white";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(posXC[i], posYC[i]+20);
      contexte.lineTo(posXC[i]+10, posYC[i]+20);
      contexte.lineTo(posXC[i]+10, posYC[i]+30);
      contexte.lineTo(posXC[i], posYC[i]+30);
      contexte.fill();

      // patte
      contexte.fillStyle= "red";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(posXC[i], posYC[i]+30);
      contexte.lineTo(posXC[i]+10, posYC[i]+30);
      contexte.lineTo(posXC[i]+10, posYC[i]+40);
      contexte.lineTo(posXC[i], posYC[i]+40);
      contexte.fill();

// patte
contexte.fillStyle= "red";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXC[i]+10, posYC[i]);
contexte.lineTo(posXC[i]+20, posYC[i]);
contexte.lineTo(posXC[i]+20, posYC[i]+10);
contexte.lineTo(posXC[i]+10, posYC[i]+10);
contexte.fill();

// patte
contexte.fillStyle= "white";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXC[i]+20, posYC[i]);
contexte.lineTo(posXC[i]+30, posYC[i]);
contexte.lineTo(posXC[i]+30, posYC[i]+10);
contexte.lineTo(posXC[i]+20, posYC[i]+10);
contexte.fill();

// patte
contexte.fillStyle= "red";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXC[i]+20, posYC[i]+10);
contexte.lineTo(posXC[i]+30, posYC[i]+10);
contexte.lineTo(posXC[i]+30, posYC[i]+20);
contexte.lineTo(posXC[i]+20, posYC[i]+20);
contexte.fill();}
else{}
}

}



function tracerPabloFace(contexte){

//fond blanc
contexte.fillStyle= "white";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP, posYP);
contexte.lineTo(posXP+50, posYP);
contexte.lineTo(posXP+50, posYP+50);
contexte.lineTo(posXP, posYP+50);
contexte.lineTo(posXP, posYP);
contexte.fill();

//haut
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP, posYP);
contexte.lineTo(posXP+50, posYP);
contexte.lineTo(posXP+50, posYP+10);
contexte.lineTo(posXP, posYP+10);
contexte.lineTo(posXP, posYP);
contexte.fill();


// coté gauche
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP, posYP);
contexte.lineTo(posXP+10, posYP);
contexte.lineTo(posXP+10, posYP+50);
contexte.lineTo(posXP, posYP+50);
contexte.lineTo(posXP, posYP);
contexte.fill();

// coté droit
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+50, posYP);
contexte.lineTo(posXP+40, posYP);
contexte.lineTo(posXP+40, posYP+50);
contexte.lineTo(posXP+50, posYP+50);
contexte.lineTo(posXP+50, posYP+50);
contexte.fill();


//milieux
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+20, posYP+10);
contexte.lineTo(posXP+30, posYP+10);
contexte.lineTo(posXP+30, posYP+18);
contexte.lineTo(posXP+20, posYP+18);
contexte.fill();

//oeil gauche
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+12, posYP+21);
contexte.lineTo(posXP+19, posYP+21);
contexte.lineTo(posXP+19, posYP+26);
contexte.lineTo(posXP+12, posYP+26);
contexte.fill();

//oeil droite
contexte.fillStyle= "black";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+31, posYP+21);
contexte.lineTo(posXP+38, posYP+21);
contexte.lineTo(posXP+38, posYP+26);
contexte.lineTo(posXP+31, posYP+26);
contexte.fill();

//bec
contexte.fillStyle= "yellow";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+20, posYP+28);
contexte.lineTo(posXP+30, posYP+28);
contexte.lineTo(posXP+30, posYP+35);
contexte.lineTo(posXP+20, posYP+35);
contexte.fill();

//patte gauche
contexte.fillStyle= "orange";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(posXP+2, posYP+42);
contexte.lineTo(posXP+15, posYP+42);
contexte.lineTo(posXP+15, posYP+50);
contexte.lineTo(posXP+2, posYP+50);
contexte.fill();

 //patte droite
 contexte.fillStyle= "orange";
 contexte.lineWidth=3;
 contexte.beginPath();
 contexte.moveTo(posXP+48, posYP+42);
 contexte.lineTo(posXP+35, posYP+42);
 contexte.lineTo(posXP+35, posYP+50);
 contexte.lineTo(posXP+48, posYP+50);
 contexte.fill();

}

function tracerPabloDerriere(contexte){

    // corps derriere
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP, posYP);
    contexte.lineTo(posXP+50, posYP);
    contexte.lineTo(posXP+50, posYP+50);
    contexte.lineTo(posXP, posYP+50);
    contexte.lineTo(posXP, posYP);
    contexte.fill();

    // queue
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+16, posYP+42);
    contexte.lineTo(posXP+34, posYP+42);
    contexte.lineTo(posXP+34, posYP+50);
    contexte.lineTo(posXP+16, posYP+50);
    contexte.fill();
}

function tracerPabloDroite(contexte){

    //fill blanc profil droite
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP, posYP);
    contexte.lineTo(posXP+50, posYP);
    contexte.lineTo(posXP+50, posYP+50);
    contexte.lineTo(posXP, posYP+50);
    contexte.lineTo(posXP, posYP);
    contexte.fill();

    //dos
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP, posYP);
    contexte.lineTo(posXP+35, posYP);
    contexte.lineTo(posXP+35, posYP+50);
    contexte.lineTo(posXP, posYP+50);
    contexte.lineTo(posXP, posYP);
    contexte.fill();

    //tête
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+45, posYP);
    contexte.lineTo(posXP+30, posYP);
    contexte.lineTo(posXP+30, posYP+10);
    contexte.lineTo(posXP+45, posYP+10);
    contexte.lineTo(posXP+45, posYP);
    contexte.fill();


     //oeil 7 par 6
     contexte.fillStyle= "black";
     contexte.lineWidth=3;
     contexte.beginPath();
     contexte.moveTo(posXP+45, posYP+16);
     contexte.lineTo(posXP+38, posYP+16);
     contexte.lineTo(posXP+38, posYP+21);
     contexte.lineTo(posXP+45, posYP+21);
     contexte.fill();

     //patte gauche
    contexte.fillStyle= "orange";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+48, posYP+42);
    contexte.lineTo(posXP+38, posYP+42);
    contexte.lineTo(posXP+38, posYP+50);
    contexte.lineTo(posXP+48, posYP+50);
    contexte.fill();

    //bec
    contexte.fillStyle= "yellow";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+50, posYP+23);
    contexte.lineTo(posXP+45, posYP+23);
    contexte.lineTo(posXP+45, posYP+31);
    contexte.lineTo(posXP+50, posYP+31);
    contexte.fill();
}

function tracerPabloGauche(contexte){

     //fill blanc profil gauche
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP, posYP);
    contexte.lineTo(posXP+50, posYP);
    contexte.lineTo(posXP+50, posYP+50);
    contexte.lineTo(posXP, posYP+50);
    contexte.lineTo(posXP, posYP);
    contexte.fill();

   ///dos
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+50, posYP);
    contexte.lineTo(posXP+15, posYP);
    contexte.lineTo(posXP+15, posYP+50);
    contexte.lineTo(posXP+50, posYP+50);
    contexte.lineTo(posXP+50, posYP);
    contexte.fill();

    //tête
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+5, posYP);
    contexte.lineTo(posXP+20, posYP);
    contexte.lineTo(posXP+20, posYP+10);
    contexte.lineTo(posXP+5, posYP+10);
    contexte.lineTo(posXP+5, posYP);
    contexte.fill();


     //oeil 7 par 6
     contexte.fillStyle= "black";
     contexte.lineWidth=3;
     contexte.beginPath();
     contexte.moveTo(posXP+5, posYP+16);
     contexte.lineTo(posXP+12, posYP+16);
     contexte.lineTo(posXP+12, posYP+21);
     contexte.lineTo(posXP+5, posYP+21);
     contexte.fill();

     //patte gauche
    contexte.fillStyle= "orange";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP+2, posYP+42);
    contexte.lineTo(posXP+12, posYP+42);
    contexte.lineTo(posXP+12, posYP+50);
    contexte.lineTo(posXP+2, posYP+50);
    contexte.fill();

    //bec
    contexte.fillStyle= "yellow";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(posXP, posYP+23);
    contexte.lineTo(posXP+5, posYP+23);
    contexte.lineTo(posXP+5, posYP+31);
    contexte.lineTo(posXP, posYP+31);
    contexte.fill();
}

function construireGrille() {

    // Création du tableau de la grille
    grille = new Array(Math.ceil(canevas.width / DIMENSION_TUILE));
    for (let x = 0; x < grille.length; x++) {
        grille[x] = new Array(Math.ceil(canevas.height / DIMENSION_TUILE));
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