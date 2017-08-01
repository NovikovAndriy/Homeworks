/**
 * Created by Martian on 01.08.2017.
 */

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

console.log("Начальный текст:\n" + str);
alert ("Начальный текст: \n" + str);

// Разбить текст на массив
var array = str.split(".");

var arr = [];
//Создать массив с массивом из слов каждого предложения
for (var i = 0; i < array.length; i++) {
    arr.push(array[i].split(" "));
}

// Сортировка от большего к меньшему без учета запятых
for (var i = 0; i < arr.length; i++) {
    var tempAr = arr[i];
    for (var d = tempAr.length - 1; d >= 0; d--) {
        for (var dd = 0; dd < d; dd++) {
            if (tempAr.length > 1) {
                if (tempAr[dd].slice(-1) === ",") {
                    tempAr[dd] = tempAr[dd].substr(0, tempAr[dd].length - 1);
                    var t = tempAr[dd];
                    if (tempAr[dd].length < tempAr[dd + 1].length) {
                        var temp = tempAr[dd];
                        tempAr[dd] = tempAr[dd + 1];
                        tempAr[dd + 1] = (temp);
                    }
                    if (t === tempAr[dd]) {
                        tempAr[dd] += ",";
                    }
                    else {
                        tempAr[dd + 1] += ",";
                    }

                } else {
                    if (tempAr[dd].length < tempAr[dd + 1].length) {
                        var temp = tempAr[dd];
                        tempAr[dd] = tempAr[dd + 1];
                        tempAr[dd + 1] = temp;
                    }
                }
            }
        }
    }
    if (tempAr[tempAr.length - 1] === "") tempAr.pop();
}
//Новая строка
var newText = "";

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length <= 1) continue;

    newText += arr[i].join(" ") + ". ";
}

console.log (newText);
alert (newText);
