var lessons1 = [
  {
    title: "Boule qui respire",
    level: 0,
    description: "",
    hints: [],
    code: `var expand = true;
var s = 10;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("black");
    circle(200, 200, s);

    if(expand) {
        s = s - 2
    } else {
        s = s + 2
    }

    if(s > 400) expand = true;
    if(s < 0) expand = false;
}`,
  },
  {
    title: "Boule rebondissante",
    level: 0,
    description: "",
    hints: [],
    code: `var goUp = false;
var y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  circle(200, y, 10);

  if(goUp) {
    y = y - 10
  } else {
    y = y + 10
  }

  if(y > 400) goUp = true;
  if(y < 0) goUp = false;
}`,
  },
  {
    title: "Cercles concentriques",
    level: 0,
    description: "",
    hints: [],
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  var x = width / 2;
  var y = height / 2;

  fill(230, 230, 255);
  circle(x, y, 640);

  fill(200, 200, 255);
  circle(x, y, 320);
  
  fill(170, 170, 255);
  circle(x, y, 160);

  fill(140, 140, 255);
  circle(x, y, 80);
  
  fill(110, 110, 255);
  circle(x, y, 40);
  
  fill(80, 80, 255);
  circle(x, y, 20);
  
  fill(50, 50, 255);
  circle(x, y, 10);
}`,
  },
];
var lessons2 = [
  {
    title: "Boule rebondissante 2",
    level: 1,
    description: "",
    hints: [],
    code: `var goUp = false;
var goLeft = false;
var x = 200;
var y = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  circle(x, y, 10);

  if(goUp) {
    y = y - 1
  } else {
    y = y + 1
  }
  if(goLeft) {
    x = x + 1
  } else {
    x = x - 1
  }

  if(x > 400) goLeft = false;
  if(x < 0) goLeft = true;
  if(y > 400) goUp = true;
  if(y < 0) goUp = false;
}`,
  },
  {
    title: "test",
    level: 2,
    description: "",
    hints: [],
    code: ``,
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
        <h3>${index}.${i} ${it.title} ${emoji}</h3>
        <div class="iframe-wrap" data-src="${i}"></div>
      </div><p>${it.description}</p>`;
    for (let j = 0; j < it.hints.length; j++) {
      const hint = it.hints[j];
      content += `<details>
          <summary>indice ${j ? j + 1 : ""}</summary>
          <p>${hint}</p>
        </details>`;
    }
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
