class WolfTemplate {
    zeile;
    spalte;
    energie = 100;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {
        if (this.energie > 200) {
            this.energie = this.energie-15;
            this.erstelleNeuenWolf()
        } else if (this.energie > 0) {
            let Schafe = this.findeSchafe();
            let grasFelder = this.findeGrasFelder();
            if (Schafe.length > 0) {
                this.energie++
                this.machSchrittNachVorne1()
            } else if(grasFelder.length > 0) {
                this.energie--
                this.machSchrittNachVorne2()
            } else {
                this.energie--
            }
        } else {
            matrix[this.zeile][this.spalte] = 1
            löschObjektAusObjektArray(this.zeile, this.spalte)
         }
        
    };
    machSchrittNachVorne1() {
        // 1. Scan die Felder um dich herum und
        // finde heraus, welche Schafe sind.
        let Schafe = this.findeSchafe();

        if (Schafe.length > 0) {

            RandomNumber3 = Math.floor(Math.random() * Schafe.length)
            let Schaf = Schafe[RandomNumber3]

            matrix[this.zeile][this.spalte] = 0;

            löschObjektAusObjektArray(Schaf[0], Schaf[1])
            this.zeile = Schaf[0];
            this.spalte = Schaf[1];

            this.platziereSelbstInMatrix()
        }
    };

    machSchrittNachVorne2() {
        // 1. Scan die Felder um dich herum und
        // finde heraus, welche Grasfelder sind.
        let grasFelder = this.findeGrasFelder();

        if (grasFelder.length > 0) {

            RandomNumber2 = Math.floor(Math.random() * grasFelder.length)
            let grasFeld = grasFelder[RandomNumber2]

            matrix[this.zeile][this.spalte] = 1;
            let neueGrasZelle = new GrasTemplate(grasFeld[0], grasFeld[1]);
            ObjektArray.push(neueGrasZelle);

            löschObjektAusObjektArray(grasFeld[0], grasFeld[1])
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1];

            this.platziereSelbstInMatrix()
        }
    }

erstelleNeuenWolf() {
        let Schafe = this.findeSchafe();
        if (Schafe.length > 0) {
            let Schaf = Schafe[0];
            löschObjektAusObjektArray(Schaf[0], Schaf[1]);
            let neueWolfZelle = new WolfTemplate(Schaf[0], Schaf[1]);
            ObjektArray.push(neueWolfZelle);
        }
};

    findeSchafe() {
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

        let Schafe = benachbarteFelder.filter(this.istSchaf)
        return Schafe
        // 2. Filtert diese Koordinatenliste, so dass nur die
        // Koordinaten übrig bleiben, die Schafe darstellen

        // 3. returned diese Liste an Schafen.
    };
    istSchaf(koordinatenPaar) {
        let zeile = koordinatenPaar[0];
        let spalte = koordinatenPaar[1];
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < XY &&
            spalte < XY &&
            matrix[zeile][spalte] === 2) {
            return true;
        } else {
            return false;
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