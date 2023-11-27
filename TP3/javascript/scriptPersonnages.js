let canevas;
let contexte;

window.onload= function(){
        
    canevas = document.getElementById("monCanevas");
    contexte = canevas.getContext("2d");

    tracerPablo(contexte);
    tracerTheodore(contexte);
}


function tracerPablo(contexte)
{

    //fond blanc
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(200, 200);
    contexte.lineTo(250, 200);
    contexte.lineTo(250, 250);
    contexte.lineTo(200, 250);
    contexte.lineTo(200, 200);
    contexte.fill();

    //haut
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(200, 200);
    contexte.lineTo(250, 200);
    contexte.lineTo(250, 210);
    contexte.lineTo(200, 210);
    contexte.lineTo(200, 200);
    contexte.fill();


// coté gauche
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(200, 200);
    contexte.lineTo(210, 200);
    contexte.lineTo(210, 250);
    contexte.lineTo(200, 250);
    contexte.lineTo(200, 200);
    contexte.fill();

    // coté droit
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(250, 200);
    contexte.lineTo(240, 200);
    contexte.lineTo(240, 250);
    contexte.lineTo(250, 250);
    contexte.lineTo(250, 250);
    contexte.fill();


    //milieux
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(220, 210);
    contexte.lineTo(230, 210);
    contexte.lineTo(230, 218);
    contexte.lineTo(220, 218);
    contexte.fill();

    //oeil gauche
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(212, 221);
    contexte.lineTo(219, 221);
    contexte.lineTo(219, 226);
    contexte.lineTo(212, 226);
    contexte.fill();

    //oeil droite
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(231, 221);
    contexte.lineTo(238, 221);
    contexte.lineTo(238, 226);
    contexte.lineTo(231, 226);
    contexte.fill();

    //bec
    contexte.fillStyle= "yellow";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(220, 228);
    contexte.lineTo(230, 228);
    contexte.lineTo(230, 235);
    contexte.lineTo(220, 235);
    contexte.fill();

    //patte gauche
    contexte.fillStyle= "orange";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(202, 242);
    contexte.lineTo(215, 242);
    contexte.lineTo(215, 250);
    contexte.lineTo(202, 250);
    contexte.fill();

     //patte droite
     contexte.fillStyle= "orange";
     contexte.lineWidth=3;
     contexte.beginPath();
     contexte.moveTo(248, 242);
     contexte.lineTo(235, 242);
     contexte.lineTo(235, 250);
     contexte.lineTo(248, 250);
     contexte.fill();





// corps derriere
     contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(300, 300);
    contexte.lineTo(350, 300);
    contexte.lineTo(350, 350);
    contexte.lineTo(300, 350);
    contexte.lineTo(300, 300);
    contexte.fill();

    // queue
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(316, 342);
    contexte.lineTo(334, 342);
    contexte.lineTo(334, 350);
    contexte.lineTo(316, 350);
    contexte.fill();



//fill blanc profil gauche
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(400, 400);
    contexte.lineTo(450, 400);
    contexte.lineTo(450, 450);
    contexte.lineTo(400, 450);
    contexte.lineTo(400, 400);
    contexte.fill();

    //dos
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(450, 400);
    contexte.lineTo(415, 400);
    contexte.lineTo(415, 450);
    contexte.lineTo(450, 450);
    contexte.lineTo(450, 400);
    contexte.fill();

    //tête
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(405, 400);
    contexte.lineTo(420, 400);
    contexte.lineTo(420, 410);
    contexte.lineTo(405, 410);
    contexte.lineTo(405, 400);
    contexte.fill();


     //oeil 7 par 6
     contexte.fillStyle= "black";
     contexte.lineWidth=3;
     contexte.beginPath();
     contexte.moveTo(405, 416);
     contexte.lineTo(412, 416);
     contexte.lineTo(412, 421);
     contexte.lineTo(405, 421);
     contexte.fill();

     //patte gauche
    contexte.fillStyle= "orange";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(402, 442);
    contexte.lineTo(412, 442);
    contexte.lineTo(412, 450);
    contexte.lineTo(402, 450);
    contexte.fill();

    //bec
    contexte.fillStyle= "yellow";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(400, 423);
    contexte.lineTo(405, 423);
    contexte.lineTo(405, 431);
    contexte.lineTo(400, 431);
    contexte.fill();








    //fill blanc profil droite
    contexte.fillStyle= "white";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(500, 500);
    contexte.lineTo(550, 500);
    contexte.lineTo(550, 550);
    contexte.lineTo(500, 550);
    contexte.lineTo(500, 500);
    contexte.fill();

    //dos
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(500, 500);
    contexte.lineTo(535, 500);
    contexte.lineTo(535, 550);
    contexte.lineTo(500, 550);
    contexte.lineTo(500, 500);
    contexte.fill();

    //tête
    contexte.fillStyle= "black";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(545, 500);
    contexte.lineTo(530, 500);
    contexte.lineTo(530, 510);
    contexte.lineTo(545, 510);
    contexte.lineTo(545, 500);
    contexte.fill();


     //oeil 7 par 6
     contexte.fillStyle= "black";
     contexte.lineWidth=3;
     contexte.beginPath();
     contexte.moveTo(545, 516);
     contexte.lineTo(538, 516);
     contexte.lineTo(538, 521);
     contexte.lineTo(545, 521);
     contexte.fill();

     //patte gauche
    contexte.fillStyle= "orange";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(548, 542);
    contexte.lineTo(538, 542);
    contexte.lineTo(538, 550);
    contexte.lineTo(548, 550);
    contexte.fill();

    //bec
    contexte.fillStyle= "yellow";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(550, 523);
    contexte.lineTo(545, 523);
    contexte.lineTo(545, 531);
    contexte.lineTo(550, 531);
    contexte.fill();
}

function tracerTheodore(contexte){
   //fill blanc devant
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(600, 600);
   contexte.lineTo(650, 600);
   contexte.lineTo(650, 650);
   contexte.lineTo(600, 650);
   contexte.lineTo(600, 600);
   contexte.fill();


   // corps
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(604, 604);
   contexte.lineTo(646, 604);
   contexte.lineTo(646, 650);
   contexte.lineTo(604, 650);
   contexte.lineTo(604, 604);
   contexte.fill();


   //oreille gauche
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(600, 600);
   contexte.lineTo(608, 600);
   contexte.lineTo(608, 608);
   contexte.lineTo(600, 608);
   contexte.lineTo(600, 600);
   contexte.fill();


   //oreille droite
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(642, 600);
   contexte.lineTo(650, 600);
   contexte.lineTo(650, 608);
   contexte.lineTo(642, 608);
   contexte.lineTo(642, 600);
   contexte.fill();

   // ventre
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(613, 632);
   contexte.lineTo(637, 632);
   contexte.lineTo(637, 650);
   contexte.lineTo(613, 650);
   contexte.fill();


   // museau
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(617, 620);
   contexte.lineTo(633, 620);
   contexte.lineTo(633, 628);
   contexte.lineTo(617, 628);
   contexte.fill();

   // nez
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(622, 620);
   contexte.lineTo(628, 620);
   contexte.lineTo(628, 624);
   contexte.lineTo(622, 624);
   contexte.fill();

   //oeil gauche
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(612, 612);
   contexte.lineTo(618, 612);
   contexte.lineTo(618, 617);
   contexte.lineTo(612, 617);
   contexte.fill();

   //oeil droite
   contexte.fillStyle= "black";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(632, 612);
   contexte.lineTo(638, 612);
   contexte.lineTo(638, 617);
   contexte.lineTo(632, 617);
   contexte.fill();

// patte gauche
   contexte.fillStyle= "tan";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(605, 642);
   contexte.lineTo(619, 642);
   contexte.lineTo(619, 650);
   contexte.lineTo(605, 650);
   contexte.fill();

   // patte gauche
   contexte.fillStyle= "tan";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(645, 642);
   contexte.lineTo(631, 642);
   contexte.lineTo(631, 650);
   contexte.lineTo(645, 650);
   contexte.fill();






   //fill blanc derriere
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(700, 700);
   contexte.lineTo(750, 700);
   contexte.lineTo(750, 750);
   contexte.lineTo(700, 750);
   contexte.lineTo(700, 700);
   contexte.fill();


   // corps
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(704, 704);
   contexte.lineTo(746, 704);
   contexte.lineTo(746, 750);
   contexte.lineTo(704, 750);
   contexte.lineTo(704, 704);
   contexte.fill();


   //oreille gauche
   contexte.fillStyle= "beige";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(700, 700);
   contexte.lineTo(708, 700);
   contexte.lineTo(708, 708);
   contexte.lineTo(700, 708);
   contexte.lineTo(700, 700);
   contexte.fill();

    //oreille droite
    contexte.fillStyle= "beige";
    contexte.lineWidth=3;
    contexte.beginPath();
    contexte.moveTo(742, 700);
    contexte.lineTo(750, 700);
    contexte.lineTo(750, 708);
    contexte.lineTo(742, 708);
    contexte.lineTo(742, 700);
    contexte.fill();

      // queue
   contexte.fillStyle= "white";
   contexte.lineWidth=3;
   contexte.beginPath();
   contexte.moveTo(718, 732);
   contexte.lineTo(732, 732);
   contexte.lineTo(732, 742);
   contexte.lineTo(718, 742);
   contexte.fill();
}