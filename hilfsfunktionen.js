function erstelleMatrix() {

    let matrixTemp = [];
    for (let zeile = 0; zeile < XY; zeile++) {
        for (let spalte = 0; spalte < XY; spalte++) {
            matrixTemp.push(0)

        }
        matrix.push(matrixTemp)
        matrixTemp = [];
    }
}
function zeichneMatrix() {
    let aktivesArray = matrix
    let kästchenXY = canvasXY / aktivesArray.length;
    for (let zeile = 0; zeile < XY; zeile++) {
        for (let spalte = 0; spalte < XY; spalte++) {
            element = matrix[zeile][spalte]
            if (element === 0) {
                fill(color_0)
            } else if (element === 1) {
                fill(color_1)
            } else if (element === 2) {
                fill(color_2)
            } else if (element === 3) {
                fill(color_3)
            }
            rect(spalte * kästchenXY, zeile * kästchenXY, kästchenXY, kästchenXY)
        }

    }
}

function löschObjektAusObjektArray(zeile, spalte) {
    let index = ObjektArray.findIndex(function(objekt) {
        if (objekt.zeile === zeile && objekt.spalte === spalte){
            return true;
        } else return false;
    });
    ObjektArray.splice(index,1);

}