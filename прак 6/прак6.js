var number1 = prompt("введите переменную");
alert(number1);

var Calc_1 = prompt("первое число для калькулятора");
var Calc_2 = prompt("второе число для калькулятора");
var Arif = prompt("введите арифметическое действие");

var res = eval(Calc_1 + Arif + Calc_2);
alert(res);

var result1 = prompt("Умножьте число на 2 и прибавьте 7");
var number2 = (result1 - 7)/ 2;
alert("Задуманное число:" + number2);


var currentYear = new Date().getFullYear();
var name = prompt("Введите имя");
var yearRoj = prompt("Введите год рождения");
var age = currentYear - yearRoj;
document.write(name + ": " + age);