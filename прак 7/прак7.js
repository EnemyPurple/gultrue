var otgadka = 0;
alert("загадка 1: Сколько мм в сантиметре");
var otvet = 10;
var otvet1 = prompt("Ответ на загадку 1");

if (otvet == otvet1) {
    alert("верно");
    var otgadka =otgadka + 1;
} else {
    alert("неверно");
};

alert("Сколько у токаря Виталия пальцев");
var otvet1 = prompt("ответ на загадку 2");
var otvet = 10;
if (otvet == otvet1) {
    alert("правильно, Виталий еще не приступил к работе ");
    var otgadka = otgadka + 1;
} else {
    alert("неверно");
};
alert("количество отгаданных загадок = " + otgadka);

for (i = 1; i < 11; i++) {
    alert(i);
}

var z = 0;

while (z != 1) {
    var z = prompt("еще по одной");
};


var MoyNomer = prompt("введите свой номер");
var factorial = 1;
for (let i = MoyNomer; i > 0; i--) {
    factorial = factorial * i;
};
alert("Факториал моего номера в списке:" + factorial);








var Name = prompt("Введите имя:");
var j = Name.length;
var result = true;
var center = 0;

if (Name.length % 2 != 0) {
       var center = (Name.length / 2);
       Name = Name.replace(Name.charAt(center),'');
};

Name = Name.toLowerCase();
for (let i = 0; i < Name.length / 2; i++) {
    if (Name.charAt(i) !== Name.charAt(Name.length - 1 - i)) {
        result = false;
    }
}
alert(result);



var MoyNomer = prompt("мой номер в списке");
Metka:
for (let i = 2; i <= MoyNomer; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue Metka;
      
    }

  
    alert(i);
  }

  