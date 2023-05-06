class MowingMachineTemplate {
    zeile;
    spalte;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 2;
    };
    machSchrittNachVorne() {
        // 1. Scan die Felder um dich herum und
        // finde heraus, welche Grasfelder sind.
        let grasFelder = this.findeGrasFelder();

        if (grasFelder.length > 0) {
            RandomNumber2 = Math.floor(Math.random() * grasFelder.length)
            let grasFeld = grasFelder[RandomNumber2]
            matrix[this.zeile][this.spalte] = 0;
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1];
            this.platziereSelbstInMatrix()
        }


    };
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