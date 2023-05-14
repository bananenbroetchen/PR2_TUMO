class MowingMachineTemplate {
    zeile;
    spalte;
    energie = 15;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 2;
    };
    spielzug() {
        if (this.energie > 30) {
            this.energie = this.energie-15;
            this.pflanzNeueMowingMachine()
        } else if (this.energie > 0) {
            let grasFelder = this.findeGrasFelder();
            if (grasFelder.length > 0) {

                this.energie++
                this.machSchrittNachVorne()
            } else {
                this.energie--
            }
        } else {
            matrix[this.zeile][this.spalte] = 0
            löschObjektAusObjektArray(this.zeile, this.spalte)
         }
        
    };
    machSchrittNachVorne() {
        // 1. Scan die Felder um dich herum und
        // finde heraus, welche Grasfelder sind.
        let grasFelder = this.findeGrasFelder();

        if (grasFelder.length > 0) {

            RandomNumber2 = Math.floor(Math.random() * grasFelder.length)
            let grasFeld = grasFelder[RandomNumber2]

            matrix[this.zeile][this.spalte] = 0;

            löschObjektAusObjektArray(grasFeld[0], grasFeld[1])
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1];

            this.platziereSelbstInMatrix()
        }


    };

pflanzNeueMowingMachine() {
        let grasFelder = this.findeGrasFelder();
        if (grasFelder.length > 0) {
            let grasFeld = grasFelder[0];
            löschObjektAusObjektArray(grasFeld[0], grasFeld[1]);
            let neueMowingMachineZelle = new MowingMachineTemplate(grasFeld[0], grasFeld[1]);
            ObjektArray.push(neueMowingMachineZelle);
        }
}

    findeGrasFelder() {
        // 1. Findet heraus, welche die Felder
        // links, rechts, oben und unten vom Rasendestroyer sind
        let benachbarteFelder = [
            [this.zeile + 1, this.spalte], //oben
            [this.zeile - 1, this.spalte], //unten
            [this.zeile, this.spalte + 1], //rechts
            [this.zeile, this.spalte - 1], //links

            [this.zeile + 1, this.spalte - 1], //oben links
            [this.zeile + 1, this.spalte + 1], //oben rechts
            [this.zeile - 1, this.spalte + 1], //unten rechts
            [this.zeile - 1, this.spalte - 1],  //unten links

            [this.zeile + 2, this.spalte], //oben2
            [this.zeile - 2, this.spalte], //unten2
            [this.zeile, this.spalte + 2], //rechts2
            [this.zeile, this.spalte - 2] // links2
        ]

        let grasFelder = benachbarteFelder.filter(this.istGras)
        return grasFelder
        // 2. Filtert diese Koordinatenliste, so dass nur die
        // Koordinaten übrig bleiben, die Grasfelder darstellen

        // 3. returned diese Liste an Grasfeldern.
    };
    istGras(koordinatenPaar) {
        let zeile = koordinatenPaar[0];
        let spalte = koordinatenPaar[1];
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < XY &&
            spalte < XY &&
            matrix[zeile][spalte] === 1) {
            return true;
        } else {
            return false;
        }
    }
}