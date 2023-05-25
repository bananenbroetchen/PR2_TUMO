// Hacks:

//Command + K + C bzw. Command + K + U = In Kommentar/Code umwandeln
// Option + Shift + F = Dokument formatieren
let oneTimeAction = false;
let oneTimeActionPossible = false;
let RandomNumber1 = 0;
let RandomNumber2 = 0;
let RandomNumber3 = 0;
let i5 = 0;

let slider;
let fpsAnzeiger;
let savedFrameRate;

let canvasXY = 900;
let XY = 100;
let matrix = [];

let anzahlMowingMachine = 5;
let anzahlGras = 2;
let ObjektArray = [];

let mowingMachine1;
let Gras1;

function setup() {
    createCanvas(canvasXY, canvasXY);
    erstelleMatrix();
    noStroke();
    ObjektArray.push(new GrasTemplate(Math.floor(Math.random() * XY), Math.floor(Math.random() * XY)))
    ObjektArray.push(new GrasTemplate(0.5 * XY, 0.5 * XY))

    slider = document.getElementById("myRange");
    fpsAnzeiger = document.getElementById("fpsAnzeiger");

    slider.oninput = function () {
        //slider = document.getElementById("myRange");
        fpsAnzeiger.innerHTML = "FPS: " + slider.value;
        savedFrameRate = parseFloat(slider.value);
    }

    savedFrameRate = parseFloat(slider.value);
}

function draw() {
    for (let i = 0; i < ObjektArray.length; i++) {
        ObjektArray[i].spielzug();
    }
    if (oneTimeAction === false && i5 > 200) {
        ObjektArray.push(new MowingMachineTemplate(0.5 * XY, 0.5 * XY));
        oneTimeAction = true;
    }
    i5++

    zeichneMatrix();
    console.log(ObjektArray.length + " Grasfelder")
    if (ObjektArray.length > (XY * XY) - 2 && oneTimeActionPossible === true) {
        oneTimeAction = false
    }
    
    frameRate(savedFrameRate);
}

