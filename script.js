// Hacks:

//Command + K + C bzw. Command + K + U = In Kommentar/Code umwandeln
// Option + Shift + F = Dokument formatieren

// Das hier ist ein Test, ob GitHub funktioniert.

let canvasXY = 900;
let XY = 50;
let matrix = [];
let RandomNumber1;
let RandomNumber2;





let anzahlMowingMachine = 5;
let anzahlGras = 2;
let GrasArray = [];


let mowingMachine1;
let Gras1;

let MowingMachineArray = [];

function setup() {
    createCanvas(canvasXY, canvasXY);
    frameRate(60);
    erstelleMatrix();
    noStroke();

    for (let i = 0; i < 1; i++) {
        let  z = (Math.floor(Math.random() * XY))
        let  s = (Math.floor(Math.random() * XY))
        let r = new GrasTemplate(z,s)
        GrasArray.push(r)
    }
/*
    for (let i = 0; i < 10; i++) {
        let  z = (Math.floor(Math.random() * XY))
        let  s = (Math.floor(Math.random() * XY))
        let r = new MowingMachineTemplate(z,s)
        MowingMachineArray.push(r)
    }
*/
}

function draw() {

    for (let i = 0; i < GrasArray.length; i++) {
        GrasArray[i].machSchrittNachVorne();
    }
    /*
    for (let i = 0; i < MowingMachineArray.length; i++) {
        MowingMachineArray[i].machSchrittNachVorne();
    }
    */
    zeichneMatrix();
}
