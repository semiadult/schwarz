const pixelArts = {
    "widder": "pixelart1.png",
    "stier": "pixelart2.png",
    "zwillinge": "pixelart3.png",
    "krebs": "pixelart4.png",
    "loewe": "pixelart5.png",
    "jungfrau": "pixelart6.png",
    "waage": "pixelart7.png",
    "skorpion": "pixelart8.png",
    "schuetze": "pixelart9.png",
    "steinbock": "pixelart10.png",
    "wassermann": "pixelart11.png",
    "fische": "pixelart12.png"
};

const funnyImages = [
    "funny1.png",
    "funny2.png",
    "funny3.png",
    "funny4.png",
    "funny5.png",
    "funny6.png",
    "funny7.png",
    "funny8.png",
    "funny9.png",
    "funny10.png",
    "funny11.png",
    "funny12.png"
];

const quotes = {
    "widder": "Wer andere besiegt, ist stark. Wer sich selbst besiegt, ist mächtig.",
    "stier": "Nicht der ist reich, der viel hat, sondern der, der wenig braucht.",
    "zwillinge": "Wahre Weisheit liegt darin, seine eigene Ignoranz zu erkennen.",
    "krebs": "Innere Ruhe beginnt in dem Moment, in dem du dich entscheidest, niemandem mehr zu erlauben, deine Emotionen zu kontrollieren.",
    "loewe": "Es ist nicht wichtig, dem Leben mehr Jahre zu geben, sondern den Jahren mehr Leben.",
    "jungfrau": "Das Leben ist wirklich einfach, aber wir bestehen darauf, es kompliziert zu machen.",
    "waage": "Das Leben ist das seltenste Ding der Welt - die meisten Menschen existieren nur.",
    "skorpion": "Die Freiheit des Menschen liegt nicht darin, dass er tun kann, was er will, sondern dass er nicht tun muss, was er nicht will.",
    "schuetze": "Du lebst nur einmal, aber wenn du es richtig machst, ist einmal genug.",
    "steinbock": "Der Sinn des Lebens besteht nicht darin, ein erfolgreicher Mensch zu sein, sondern ein wertvoller.",
    "wassermann": "Das Leben ist ein Geheimnis, das der Tod nicht zu lösen vermag.",
    "fische": "Am Ende zählt nicht, wie viele Atemzüge wir gemacht haben, sondern wie viele Momente uns den Atem geraubt haben."
};

const randomNotes = [
    "Warum zum Arzt gehen, wenn Selbstdiagnosen so viel spannender sind?",
    "Koffein und Stress sind die perfekte Mischung für ein kurzes, aber spannendes Leben.",
    "Nur noch ein Drink, sagte jeder, der nie wieder aufwachte",
    "Warum gesund bleiben? Die Erde ist überbevölkert.",
    "Sport ist Mord – also entspann dich doch lieber mal.",
    "Gemüse? Du setzt wohl lieber auf Konservierungsstoffe.",
    "Zu viele Vitamine machen nur unnötig alt.",
    "Vorsicht ist die Mutter der Porzellankiste - aber wer will schon aus Porzellan sein?",
    "Nur die Guten sterben jung – also keine Sorge!",
    "Man sagt, wer rastet, der rostet – du sagst, wer rastet, lebt einfach gemütlicher.",
    "Ein gesunder Lebensstil mag die Jahre verlängern, aber Genuss verleiht ihnen Tiefe.",
    "Warum der ewige Fitnessstress? Der wahre Marathon ist das Leben selbst."
];

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        document.getElementById('start-message').classList.add('hidden');
        document.getElementById('input-section').classList.remove('hidden');
        event.preventDefault(); // Prevent scrolling down
    }
});

function calculateDeathDate() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    clearCanvas('canvas-front');
    clearCanvas('canvas-back');

    const today = new Date();
    const minDate = new Date(today.getFullYear() -120, today.getMonth(), today.getDate());
    const maxDate = today;

    if (isNaN(birthdate) || birthdate < minDate || birthdate > maxDate) {
        alert("Bitte gib ein gültiges Geburtsdatum ein.");
        return;
    }

    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quote').classList.add('hidden');
    document.getElementById('death-date').classList.add('hidden');
    document.querySelector('.card').classList.add('loading');
    document.getElementById('skull-container').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('skull-container').style.display = 'none';
        clearCanvas('canvas-front');
        clearCanvas('canvas-back');
        const randomYears = Math.floor(Math.random() * 40) + 30; // Random years between 50 and 90
        displayResult(`Du wirst im Alter von ${randomYears} Jahren sterben.`, birthdate);
        document.querySelector('.card').classList.remove('loading');
    }, 2000);
}

function reloadPage() {
    location.reload();
}

function getStarSign(birthdate) {
    const day = birthdate.getDate();
    const month = birthdate.getMonth() + 1;
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "wassermann";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "fische";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "widder";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "stier";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "zwillinge";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "krebs";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "loewe";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "jungfrau";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "waage";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "skorpion";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "schuetze";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "steinbock";
}

function displayResult(line, birthdate) {
    const resultDiv = document.getElementById('result');
    const quoteDiv = document.getElementById('quote');
    const deathDateDiv = document.getElementById('death-date');
    const randomNote = randomNotes[Math.floor(Math.random() * randomNotes.length)];
    resultDiv.innerHTML = randomNote;
    resultDiv.classList.remove('hidden');
    deathDateDiv.innerHTML = line;
    deathDateDiv.classList.remove('hidden');

    const starSign = getStarSign(birthdate);
    const quote = quotes[starSign];
    quoteDiv.innerHTML = quote;
    quoteDiv.classList.remove('hidden');

    const canvasFront = document.getElementById('canvas-front');
    const ctxFront = canvasFront.getContext('2d');
    const randomFunnyImage = funnyImages[Math.floor(Math.random() * funnyImages.length)];
    const funnyImage = new Image();
    funnyImage.src = randomFunnyImage;
    funnyImage.onload = function() {
        ctxFront.drawImage(funnyImage, 0, 0, canvasFront.width, canvasFront.height);
    };

    const canvasBack = document.getElementById('canvas-back');
    const ctxBack = canvasBack.getContext('2d');
    const pixelArt = new Image();
    pixelArt.src = pixelArts[getStarSign(birthdate)];
    pixelArt.onload = function() {
        ctxBack.drawImage(pixelArt, 0, 0, canvasBack.width, canvasBack.height);
    };
}

function clearCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

// Custom cursor
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', function(e) {
    cursorDot.style.left = e.pageX + 'px';
    cursorDot.style.top = e.pageY + 'px';
    cursorDot.classList.add('cursor-black');
});

// Flip card on click
document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

const svg = document.querySelector('svg.trail')
const path = svg.querySelector('path')

let points = []
let segments = 100
let mouse = {
  x: 0,
  y: 0,
}

const move = (event) => {
  const x = event.clientX
  const y = event.clientY

  mouse.x = x
  mouse.y = y

  if (points.length === 0) {
    for (let i = 0; i < segments; i++) {
      points.push({
        x: x,
        y: y,
      })
    }
  }
}

const anim = () => {
  // starting point
  let px = mouse.x
  let py = mouse.y

  points.forEach((p, index) => {
    p.x = px
    p.y = py

    let n = points[index + 1]

    if (n) {
      px = px - (p.x - n.x) * 0.5
      py = py - (p.y - n.y) * 0.5
    }
  })

  path.setAttribute('d', `M ${points.map((p) => `${p.x} ${p.y}`).join(` L `)}`)

  requestAnimationFrame(anim)
}

const resize = () => {
  const ww = window.innerWidth
  const wh = window.innerHeight

  svg.style.width = ww + 'px'
  svg.style.height = wh + 'px'
  svg.setAttribute('viewBox', `0 0 ${ww} ${wh}`)
}

document.addEventListener('mousemove', move)
window.addEventListener('resize', resize)

anim()
resize()

