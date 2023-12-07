let posXT;
let posYT;
let posXP;
let posYP;
const DIMENSION_CARRET = 50;
const DEPLACEMENT_CARRET = 5;
const DIMENSION_CARREP = 50;
const DEPLACEMENT_CARREP = 5;
let canevas;
let contexte;
let directionT=0;
let directionP=0;
let touches = {
    "ArrowUp":false,
    "ArrowDown":false,
    "ArrowLeft":false,
    "ArrowRight":false,
    "w":false,
    "d":false,
    "s":false,
    "a":false
    
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
    window. requestAnimationFrame(boucleJeu);
    posXT= 1300;
    posYT= 400;
    tracerTheodoreGauche(contexte);
    posXP= 900;
    posYP= 400;
    tracerPabloGauche(contexte);

}
function boucleJeu(timeStamp){
    calculerPosition();
   /* contexte.fillstyle= "red";
    contexte.fillRect(0,0, canevas.width,canevas.height );*/
    if(directionT==1){
        console.log("Derriere");
        tracerTheodoreDerriere(contexte);
    }
    if(directionT==2){
        console.log("Droite");
        tracerTheodoreDroite(contexte);
    }
    if(directionT==3){
        console.log("Face");
        tracerTheodoreFace(contexte);
    }
    if(directionT==4){
        console.log("Gauche");
        tracerTheodoreGauche(contexte);
    }
    console.log(directionT);



    if(directionP==1){
        console.log("Derriere");
        tracerPabloDerriere(contexte);
    }
    if(directionP==2){
        console.log("Droite");
        tracerPabloDroite(contexte);
    }
    if(directionP==3){
        console.log("Face");
        tracerPabloFace(contexte);
    }
    if(directionP==4){
        console.log("Gauche");
        tracerPabloGauche(contexte);
    }
    console.log(directionP);


    window.requestAnimationFrame(boucleJeu);
}

function toucheAppuyee(evenement) {
    if((evenement.key === "ArrowUp")|| (evenement.key === "ArrowDown")||
    (evenement.key === "ArrowLeft")||(evenement.key === "ArrowRight")||
    (evenement.key === "w")|| (evenement.key === "d")||
    (evenement.key === "s")||(evenement.key === "a")){
        touches[evenement.key]= true;
        console.log("a");
        
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

console.log("AAAA");
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
      // patte
      contexte.fillStyle= "tan";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(10, 10);
      contexte.lineTo(40, 10);
      contexte.lineTo(40, 50);
      contexte.lineTo(10, 50);
      contexte.fill();

      // patte
      contexte.fillStyle= "white";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(10, 10);
      contexte.lineTo(20, 10);
      contexte.lineTo(20, 20);
      contexte.lineTo(10, 20);
      contexte.fill();

      // patte
      contexte.fillStyle= "red";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(10, 20);
      contexte.lineTo(20, 20);
      contexte.lineTo(20, 30);
      contexte.lineTo(10, 30);
      contexte.fill();

      // patte
      contexte.fillStyle= "white";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(10, 30);
      contexte.lineTo(20, 30);
      contexte.lineTo(20, 40);
      contexte.lineTo(10, 40);
      contexte.fill();

      // patte
      contexte.fillStyle= "red";
      contexte.lineWidth=3;
      contexte.beginPath();
      contexte.moveTo(10, 40);
      contexte.lineTo(20, 40);
      contexte.lineTo(20, 50);
      contexte.lineTo(10, 50);
      contexte.fill();

// patte
contexte.fillStyle= "red";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(20, 10);
contexte.lineTo(30, 10);
contexte.lineTo(30, 20);
contexte.lineTo(20, 20);
contexte.fill();

// patte
contexte.fillStyle= "white";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(30, 10);
contexte.lineTo(40, 10);
contexte.lineTo(40, 20);
contexte.lineTo(30, 20);
contexte.fill();

// patte
contexte.fillStyle= "red";
contexte.lineWidth=3;
contexte.beginPath();
contexte.moveTo(30, 20);
contexte.lineTo(40, 20);
contexte.lineTo(40, 30);
contexte.lineTo(30, 30);
contexte.fill();



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