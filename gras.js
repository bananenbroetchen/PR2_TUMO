class GrasTemplate {
    zeile;
    spalte;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    machSchrittNachVorne() {
        // 1. Scan die Felder um dich herum und
        // finde heraus, welche Grasfelder sind.
        let grasFelder = this.findeGrasFelder();

        if (grasFelder.length > 0) {
            RandomNumber1 = Math.floor(Math.random() * grasFelder.length)
            let grasFeld = grasFelder[RandomNumber1]
            matrix[this.zeile][this.spalte] = 1;
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1];
            this.platziereSelbstInMatrix()
        }
    };
    findeGrasFelder() {
        // 1. Findet heraus, welche die Felder
        // links, rechts, oben und unten vom Rasendestroyer sind
        let benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1]
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
            spalte < XY) {
            return true;
        } else {
            return false;
        }
    }
}