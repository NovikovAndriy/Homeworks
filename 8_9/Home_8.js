var header = "{margin:25px;height:900px;width:100%}";
var main = "{padding:0 0 10px;margin:25px;width:100%}";
var wrap = "{margin:0 auto;width:960px}";
var footer = "{float:left;padding:0 0 10px;background:#eeaaa3}";

var elementArray = [header, main, wrap, footer];
elementArray = trimFirstAndLastCharInCssString(elementArray);
var objArray = getObjectsArrayFromCssArray(elementArray);
var sameProperty = getObjectWithIdentialKeyAndValue(objArray);
console.log((objArray));
console.log((sameProperty));

function trimFirstAndLastCharInCssString(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].slice(0, 1) == "{") {
            stringArray[i] = stringArray[i].slice(1);
        }
        if (stringArray[i].slice(-1) == "}") {
            stringArray[i] = stringArray[i].slice(0, -1);
        }

    }
    return stringArray;
}

function getObjectsArrayFromCssArray(cssArray) {
    var tempArray = [];
    for (var i = 0; i < cssArray.length; i++) {
        tempArray[i] = (cssArray[i]).split(";");
    }

    var objArray = [];
    for (var j = 0; j < tempArray.length; j++) {
        objArray[j] = {};
        for (var jj = 0; jj < tempArray[j].length; jj++) {
            var temp = tempArray[j][jj].split(":");
            objArray[j][temp[0]] = temp[1];
        }
    }

    return objArray;
}

function getObjectWithIdentialKeyAndValue(objectsArray) {
    var sameProperty = {};
    var temp = {};
    for (var i = 0; i < objectsArray.length; i++) {

        for (var key in objectsArray[i]) {
            if (key in temp) {
                if (objectsArray[i][key] == temp[key]) {
                    sameProperty[key] = objectsArray[i][key];
                }
            } else {
                temp[key] = objectsArray[i][key];
            }
        }
    }
    return sameProperty;
}