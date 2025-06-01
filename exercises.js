var lessons1 = [
  {
    title: "Cercle",
    level: 0,
    description: "",
    hints: ["utiliser circle(  )"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(50, 50, 100);
}`,
  },
  {
    title: "Cercle et carré",
    level: 0,
    description: "",
    hints: ["utiliser rect()"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(50, 50, 100);
  rect(50, 50, 100);
}`,
  },
  {
    title: "Les quatre coins",
    level: 0,
    description: "",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(50, 50, 100);
  rect(50, 50, 100);

  circle(350, 50, 100);
  rect(250, 50, 100);

  circle(50, 350, 100);
  rect(50, 250, 100);

  circle(350, 350, 100);
  rect(250, 250, 100);
}`,
  },
  {
    title: "Mosaïque",
    level: 0,
    description: "",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(50, 50, 100);
  rect(50, 50, 100);

  circle(350, 50, 100);
  rect(250, 50, 100);

  circle(50, 350, 100);
  rect(50, 250, 100);

  circle(350, 350, 100);
  rect(250, 250, 100);

  rect(150, 150, 100);
  circle(200, 200, 50);
}`,
  },
  {
    title: "Mosaïque arc-en-ciel",
    level: 0,
    description: "",
    hints: ["utiliser fill()"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255, 0, 0);
  circle(50, 50, 100);
  rect(50, 50, 100);

  fill(0, 255, 0);
  circle(350, 50, 100);
  rect(250, 50, 100);

  fill(0, 0, 255);
  circle(50, 350, 100);
  rect(50, 250, 100);

  fill(0, 255, 255);
  circle(350, 350, 100);
  rect(250, 250, 100);

  fill(255, 255, 0);
  rect(150, 150, 100);
  circle(200, 200, 50);
}`,
  },
  {
    title: "Mosaïque arc-en-ciel 2",
    level: 1,
    description: "",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255, 255, 0);
  circle(50, 50, 100);
  circle(350, 50, 100);
  circle(50, 350, 100);
  circle(350, 350, 100);
  rect(150, 150, 100);

  fill(255, 0, 255);
  rect(50, 50, 100);
  rect(250, 50, 100);
  rect(50, 250, 100);
  rect(250, 250, 100);
  
  fill(0);
  circle(200, 200, 50);
}`,
  },
  {
    title: "Seulement des lignes",
    level: 0,
    description: "",
    hints: [
      "utiliser le noir comme couleur",
      "des lignes noires sur fond noir sont invisibles",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(0);
  stroke(255);

  circle(50, 50, 100);
  rect(50, 50, 100);

  circle(350, 50, 100);
  rect(250, 50, 100);

  circle(50, 350, 100);
  rect(50, 250, 100);

  circle(350, 350, 100);
  rect(250, 250, 100);

  rect(150, 150, 100);
  circle(200, 200, 50);
}`,
  },
  {
    title: "Seulement des lignes 2",
    level: 1,
    description: "",
    hints: ["utiliser noFill pour laisser les formes transparentes"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  noFill(0);
  stroke(255);

  circle(50, 50, 100);
  rect(50, 50, 100);

  circle(350, 50, 100);
  rect(250, 50, 100);

  circle(50, 350, 100);
  rect(50, 250, 100);

  circle(350, 350, 100);
  rect(250, 250, 100);

  rect(150, 150, 100);
  circle(200, 200, 50);
}`,
  },
  {
    title: "Illusion d'optique",
    level: 2,
    description: "",
    hints: ["il n'y a que 3 carrés"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0);
  noStroke();

  fill(255);
  rect(200, 0, 200);
  rect(0, 200, 200);
  rect(100, 100, 200);
}`,
  },
  {
    title: "Illusion d'optique 2",
    level: 2,
    description: "",
    hints: ["cercles noires sur carrés rouges"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0);
  noStroke();

  fill(0);
  circle(200, 200, 500);

  fill(255, 0, 0);
  rect(100, 100, 200);

  fill(0);
  circle(200, 200, 220);
}`,
  },
];
var lessons2 = [
  {
    title: "Le tunnel",
    level: 0,
    description: "",
    hints: [
      "pour rendre une couleur plus foncée, décrémenter sa valeur vers 0",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);

  fill(0, 0, 255);
  circle(200, 200, 390);
  
  fill(0, 0, 205);
  circle(200, 200, 310);
  
  fill(0, 0, 155);
  circle(200, 200, 230);
  
  fill(0, 0, 105);
  circle(200, 200, 150);
  
  fill(0, 0, 55);
  circle(200, 200, 70);
}`,
  },
  {
    title: "La tour",
    level: 0,
    description: "",
    hints: [
      "pour rendre un bleu plus lumineux que son maximum (255), augmentez également le rouge et le vert (en quantités égales).",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);

  fill(80, 80, 255);
  circle(200, 200, 390);
  
  fill(120, 120, 255);
  circle(200, 200, 310);
  
  fill(160, 160, 255);
  circle(200, 200, 230);
  
  fill(200, 200, 255);
  circle(200, 200, 150);
  
  fill(240, 240, 255);
  circle(200, 200, 70);
}`,
  },
  {
    title: "Ondulations",
    level: 0,
    description: "",
    hints: ["utiliser stroke( ) au lieu de fill( )"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  noFill();

  stroke(80, 80, 255);
  circle(200, 200, 390);
  
  stroke(120, 120, 255);
  circle(200, 200, 310);
  
  stroke(160, 160, 255);
  circle(200, 200, 230);
  
  stroke(200, 200, 255);
  circle(200, 200, 150);
  
  stroke(240, 240, 255);
  circle(200, 200, 70);
}`,
  },
  {
    title: "Mélange",
    level: 1,
    description: "Le quatrième paramètre de fill( ) est la transparence.",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  fill(255);
  circle(200, 200, 300);
  
  fill(0, 0, 255, 150);
  circle(220, 200, 100);

  fill(255, 0, 0, 150);
  circle(170, 200, 100);
}`,
  },
  {
    title: "Étapes du bord",
    level: 1,
    description: "",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);

  fill(80, 80, 255);
  rect(0, 0, 400);
  
  fill(120, 120, 255);
  rect(80, 80, 400);
  
  fill(160, 160, 255);
  rect(160, 160, 400);
  
  fill(200, 200, 255);
  rect(240, 240, 400);
  
  fill(240, 240, 255);
  rect(320, 320, 400);
}`,
  },
];
var lessons3 = [
  {
    title: "La souris",
    level: 0,
    description: "déplace la souris sur le canevas",
    hints: ["utileser mouseX"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(mouseX, 200, 100);
}`,
  },
  {
    title: "La souris 2",
    level: 0,
    description: "déplace la souris sur le canevas",
    hints: ["utileser mouseX et mouseY"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(mouseX, mouseY, 100);
}`,
  },
  {
    title: "Couleurs en mouvement",
    level: 0,
    description: "déplace la souris sur le canevas",
    hints: [
      "utiliser mouseX pour modifier les valeurs de background( ) et mouseY pour modifier la taille du cercle",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX, 0, 0);
  circle(200, 200, mouseY);
}`,
  },
  {
    title: "Proximité",
    level: 2,
    description: "rapprocher la souris du cercle",
    hints: [
      "vous devez construire une variable qui représente la distance entre la position de la souris et la position du cricle (sur l'axe x)",
      "Vous pouvez également utiliser la fonction de valeur absolue abs( ) ou créer un comportement similaire à l'aide d'une condition if( ).",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  var distance =  mouseX;
  if(distance > 200) distance = 200 + (200 - distance);
  fill(distance, 0, 0);
  circle(200, 200, 50);
}`,
  },
  {
    title: "No background",
    level: 0,
    description: "déplacer la souris",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(255, 255, 0);
  circle(mouseX, mouseY, 70);
}`,
  },
  {
    title: "No background 2",
    level: 0,
    description: "déplacer la souris",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(255, 255, 0);
  rect(mouseX - 80, mouseY - 80, 160);
}`,
  },
  {
    title: "Some background",
    level: 1,
    description: "déplacer la souris",
    hints: [
      "vous pouvez définir une valeur de transparence en donnant un quatrième paramètre à une couleur",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(255, 255, 0);
  background(0, 0, 0, 10);
  circle(mouseX, mouseY, 100);
}`,
  },
  {
    title: "serpent arc-en-ciel",
    level: 1,
    description: "déplacer la souris",
    hints: ["utiliser la fonction random( )"],
    code: `function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255));
  circle(mouseX, mouseY, 25);
}`,
  },
  {
    title: "serpent arc-en-ciel 2",
    level: 2,
    description: "déplacer la souris",
    hints: [
      "s'il n'y a pas de mouvement, il ne devrait pas y avoir de changement de couleur",
      "utiliser une variable pour mémoriser les dernières valeurs de mouseX et mouseY",
    ],
    code: `var lastMouseX = 0
var lastMouseY = 0

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if(lastMouseX !== mouseX || lastMouseY !== mouseY){
    fill(random(255), random(255), random(255));
  }
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  rect(mouseX - 50, mouseY - 50, 100);
}`,
  },
];
var lessons4 = [
  {
    title: "Clic",
    level: 0,
    description: "cliquer la souris sur le canevas",
    hints: ["utiliser mouseIsPressed pour créer une condition"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  if(mouseIsPressed) background(100, 255, 100);
}`,
  },
  {
    title: "Expansion",
    level: 1,
    description: "cliquer la souris sur le canevas",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(100, 255, 100);
  if(!mouseIsPressed){
    circle(130, 200, 60);
    circle(160, 200, 60);
    circle(190, 200, 60);
    circle(220, 200, 60);
  }
   if(mouseIsPressed){
    circle(130, 200, 60);
    circle(170, 200, 60);
    circle(210, 200, 60);
    circle(250, 200, 60);
  }
}`,
  },
  {
    title: "Cercles qui parlent",
    level: 0,
    description: "appuyer sur la souris ou sur une touche du clavier",
    hints: ["utiliser aussi keyIsPressed pour créer une condition"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255, 255, 255);
  if(mouseIsPressed){
    fill(255, 0, 0);
  }
  circle(100, 200, 80);

  fill(255, 255, 255);
  if(keyIsPressed){
    fill(255, 0, 0);
  }
  circle(300, 200, 80);
}`,
  },
  {
    title: "harmonie",
    level: 1,
    description: "cliquer avec la souris et le clavier en même temps",
    hints: ["vous devrez utiliser l'opérateur &&"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if(mouseIsPressed && keyIsPressed){
    fill(0, 0, 255);
    circle(100, 200, 120);
    circle(300, 200, 120);
  }
  else {
    fill(255, 255, 255);
    if(mouseIsPressed){
      fill(255, 0, 0);
    }
    circle(100, 200, 80);
  
    fill(255, 255, 255);
    if(keyIsPressed){
      fill(255, 0, 0);
    }
    circle(300, 200, 80);
  }
}`,
  },
];
var lessons5 = [
  {
    title: "Mouvement",
    level: 0,
    description: "",
    hints: [
      "déclarer une variable avant setup( ) et la réutiliser dans draw( )",
    ],
    code: `var y = -100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  y = y + 0.3;
  circle(200, y, 200);
  if(y > 500) y = -100;
}`,
  },
  {
    title: "Équilibre",
    level: 0,
    description: "",
    hints: [],
    code: `var s = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  s = s + 0.1;
  circle(100, 200, s);
  circle(300, 200, 300 - s);
  if(s > 300) s = 0;
}`,
  },
  {
    title: "Décalage vert",
    level: 1,
    description: "",
    hints: [],
    code: `var s = -10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0, s, 0);
  rect(0, 0, 200, 400);
  
  fill(255 - s, 255, 255 - s);
  rect(200, 0, 200, 400);
  
  s = s + 0.5;
  if(s > 290) s = -10;

}`,
  },
  {
    title: "Rencontre au milieu",
    level: 2,
    description: "déplacer la souris",
    hints: ["placer deux cercles dont l'un a la taille inverse de l'autre"],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  circle(0, 200, mouseX * 2);
  circle(400, 200, 800 - mouseX * 2);
}`,
  },
];
var lessons6 = [
  {
    title: "Rebond",
    level: 0,
    description: "",
    hints: [
      "Utilisez une variable pour suivre la position, une autre pour la direction et quelques conditions pour voir si elle a touché les bords.",
    ],
    code: `var down = true;
var y = 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  circle(200, y, 30);
  if(down) y = y + 5;
  if(!down) y = y - 5;

  if(y < 0) down = true;
  if(y > 400) down = false;
}`,
  },
  {
    title: "Rebond 2",
    level: 0,
    description: "",
    hints: [],
    code: `var down = true;
var y = 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if(down) {
    background(0, 0, 50);
    fill(255, 0, 0);
  }
  if(!down) {
    background(255, 0, 0);
    fill(0, 0, 50);
  };
  circle(200, y, 30);
  if(down) y = y + 5;
  if(!down) y = y - 5;

  if(y < 0) down = true;
  if(y > 400) down = false;
}`,
  },
  {
    title: "Rebond bidimensionnel",
    level: 1,
    description: "",
    hints: ["la même chose que précédemment mais en deux fois"],
    code: `var dirX = true;
var dirY = true;
var y = 100;
var x = 300;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  circle(x, y, 70);
  if(dirY) y = y + 2.5;
  else y = y - 2.5;

  if(dirX) x = x + 3;
  else x = x - 3;

  if(y < 0) dirY = true;
  if(y > 400) dirY = false;
  if(x < 0) dirX = true;
  if(x > 400) dirX = false;
}`,
  },
  {
    title: "Accumulation",
    level: 2,
    description: "",
    hints: [
      "il faut un moyen de compter le nombre de fois qu'il touche les frontières",
    ],
    code: `var down = true;
var bounces = 0;
var grow = true;
var y = 200;
var s = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 50);
  fill(255, 0, 0);
  circle(200, y, s);
  if(down) y = y + 5;
  if(!down) y = y - 5;

  if(y < 0){
    down = true;
  };
  if(y > 400){
    down = false;
  };
  if(y < 0 || y > 400){
    bounces = bounces + 1;
    if(bounces > 3) {
      bounces = 0;
      grow = !grow;
    }
    if(grow) {
      s = s + 40;
    }
    else {
      s = s - 40;
    }
  }
}`,
  },
  {
    title: "Rebond contrôlé",
    level: 1,
    description: "déplacez la souris pour contrôler la vitesse",
    hints: [
      "Il s'agit d'un petit changement. Vous devez lier mouseX et mouseY à la vitesse de la balle (la quantité de changement pour la position x et y à chaque instant).",
    ],
    code: `var dirX = true;
var dirY = true;
var y = 100;
var x = 300;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  circle(x, y, 70);
  if(dirY) y = y + mouseX / 10;
  else y = y - mouseX / 10;

  if(dirX) x = x + mouseY / 10;
  else x = x - mouseY / 10;

  if(y < 0) dirY = true;
  if(y > 400) dirY = false;
  if(x < 0) dirX = true;
  if(x > 400) dirX = false;
}`,
  },
];
var lessons7 = [
  {
    title: "Le cri",
    level: 0,
    description: "",
    hints: [
      "utiliser text( )",
      "le texte par défaut est noir et il est coloré par fill( )",
    ],
    code: `var txt = "A";
var count = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  text(txt, 0, 200);
  txt = txt + "A"
  count = count + 1;

  if(count > 60){
    txt = ""
    count = 0
  };
}`,
  },
  {
    title: "Majuscule",
    level: 0,
    description: "appuyer sur une touche du clavier",
    hints: [
      "utiliser textSize( ) pour modifier la taille et utiliser key pour afficher la dernière touche pressée",
    ],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  textSize(340)
  text(key || "A", 60, 320);
}`,
  },
  {
    title: "Bombastique",
    level: 0,
    description: "appuyer sur une touche du clavier",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textSize(340)
  fill(0, 0, 100);
  text(key || "A", 105, 320);
  fill(0, 0, 200);
  text(key || "A", 90, 320);
  fill(80, 80, 255);
  text(key || "A", 75, 320);
  fill(180, 180, 255);
  text(key || "A", 60, 320);
}`,
  },
  {
    title: "Bombastique 2",
    level: 2,
    description: "appuyer sur une touche du clavier",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textSize(340);
  var x = (mouseX - 200) / 10
  var y = (mouseY - 200) / 10
  fill(0, 0, 100);
  text(key || "A", 60 + x * 4, 320 + y * 4);
  fill(0, 0, 200);
  text(key || "A", 60 + x * 3, 320 + y * 3);
  fill(80, 80, 255);
  text(key || "A", 60 + x * 2, 320 + y * 2);
  fill(180, 180, 255);
  text(key || "A", 60 + x * 1, 320 + y * 1);
}`,
  },
  {
    title: "Typographe",
    level: 1,
    description: "écrivez sur le clavier",
    hints: [
      "vous devez ajouter un caractère uniquement lorsque la keyIsPressed passe de false à true",
    ],
    code: `var txt = "";
var count = 0;
var wasKeyPressed = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  text(txt, 20, 200);

  if(keyIsPressed){
    if(wasKeyPressed !== keyIsPressed){
      txt = txt + key;
      count++;
      if(count > 50) {
        count = 0;
        txt = key;
      }
    }
  }
  wasKeyPressed = keyIsPressed;
}`,
  },
];
var lessons8 = [
  {
    title: "De la pluie",
    level: 0,
    description: "",
    hints: ["ne pas dessiner l'arrière-plan et utiliser la fonction random( )"],
    code: `var count = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  count++;
  circle(random(0, 400), random(0, 400), 5);
  if(count > 300) {
    background(0);
    count = 0;
  }
}`,
  },
  {
    title: "De la pluie 2",
    level: 0,
    description: "",
    hints: [],
    code: `var count = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  count++;
  circle(random(0, 400), random(170, 230), 5);
  if(count > 600) {
    background(0);
    count = 0;
  }
}`,
  },

  {
    title: "Planètes rouges",
    level: 0,
    description: "",
    hints: [],
    code: `var count = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  count++;
  fill(random(0, 255), 0, 0)
  circle(random(100, 300), random(100, 300), random(-20, 50));
  if(count > 200) {
    background(0);
    count = 0;
  }
}`,
  },

  {
    title: "Traçage",
    level: 0,
    description: "",
    hints: [],
    code: `var x = 0;
var y = 200;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  circle(x, y, 30);
  x = x + 3;
  y = y + random(-10, 10);

  if(x > 400){
    x = 0;
    y = 200;
    background(0);
  }
}`,
  },
  {
    title: "Le fameux browninan",
    level: 2,
    description: "",
    hints: [],
    code: `var vy = 0;
var vx = 0;
var y = 200;
var x = 200;
var count = 0;
function setup() {
  createCanvas(400, 400);
  background(0);

}

function draw() {
  noStroke();
  circle(x, y, 4);
  y = y + vy;
  x = x + vx;

  vx = vx + random(-0.5, 0.5);
  vy = vy + random(-0.5, 0.5);

  if(vx > 2) vx = 2;
  if(vx < -2) vx = -2;
  if(vy > 2) vy = 2;
  if(vy < -2) vy = -2;

  count++;
  if(count > 200){
    count = 0;
    vy = 0;
    vx = 0;
    y = 200;
    x = 200;
    background(0);
  }
}`,
  },
];

function getIframeShell(p5code) {
  return `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/iframe.css"></link>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.11.7/lib/p5.js"></script>
  </head>
  <body>
  </body>
  <script>
    ${p5code}
  </script>
</html>`;
}

function populatePageWithExercises(exercises, index) {
  var main = document.getElementById("exercises");
  var content = "";

  for (var i = 0; i < exercises.length; i++) {
    var it = exercises[i];
    var emoji = ["🌱", "🌻", "🍄"][it.level];
    content += `
        <div class="exercise">
        <h3>${index}.${i + 1}. ${it.title} ${emoji}</h3>
        <div class="iframe-wrap" data-src="${i}"></div>
      <p class="description">${it.description}</p>`;
    for (let j = 0; j < it.hints.length; j++) {
      const hint = it.hints[j];
      content += `<details>
          <summary>indice ${j ? j + 1 : ""}</summary>
          <p>${hint}</p>
        </details>`;
    }
    content += "</div>";
  }
  main.innerHTML = content;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
          if (!container.querySelector("iframe")) {
            const iframe = document.createElement("iframe");
            iframe.srcdoc = getIframeShell(
              exercises[parseInt(container.dataset.src)].code
            );
            container.appendChild(iframe);
          }
        } else {
          const iframe = container.querySelector("iframe");
          if (iframe) {
            iframe.remove(); // clean it up
          }
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "600px",
    }
  );

  document
    .querySelectorAll("div.iframe-wrap[data-src]")
    .forEach((container) => {
      observer.observe(container);
    });
}
