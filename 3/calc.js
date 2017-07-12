/**
 * Created by Martian on 11.07.2017.
 */
var result;
var operation = prompt("Choose action: +, -, *, /", "+");
var first = prompt ("Enter number", "10");
var second = prompt ("Enter number", "5");

switch (operation) {
    case "+":
        result = +first + +second;
        break;
    case "-":
        result = +first - +second;
        break;
    case "*":
        result = +first * +second;
        break;
    case "/":
        result = +first / +second;
        break;
    default:
        alert ("Error");
        break;

}

alert ("Result Is " +result);




