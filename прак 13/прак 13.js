const clientBankSymbol = Symbol('clientBank');
const clinicWorkerSymbol = Symbol('clinicWorker');
const citizenRFSymol = Symbol('citizenRF');
const clientBank = {
  [clientBankSymbol]: 'Худов Евгений',
  accountNumber: 321654987,
  balance: 300,
};
const clinicWorker = {
  [clinicWorkerSymbol]: 'Игорь Зайнулин',
  speciality: 'ПРОГГЕРРРР',
  employeeID: 789456123,
};
const citizenRF = {
  [citizenRFSymol]: 'Горабтенко Валерт',
  passportNumber: '6154 974468',
  address: 'г. Москва, ул. Пукова, д. 12',
};
console.log("Client Bank:", clientBank);
console.log("Clinic Worker:", clinicWorker);
console.log("Citizen RF:", citizenRF);
console.log(clientBank[clientBankSymbol]);
console.log(clinicWorker[clinicWorkerSymbol]);
console.log(citizenRF[citizenRFSymol]);


const number = +prompt('Загадайте цифру до 9', '');
switch (number) {
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
    alert('Вы ввели число 2');
    break;
  case 3:
    alert('Вы ввели число 3');
    break;
  case 4:
    alert('Вы ввели число 4');
    break;
  case 5:
    alert('Вы ввели число 5');
    break;
  case 6:
    alert('Вы ввели число 6');
    break;
  case 7:
    alert('Вы ввели число 7');
    break;
  case 8:
  case 9:
    alert('Вы ввели число 8, а может и 9');
    break;
  default:
    alert('Вы ввели число вне диапазона 1-9'); 
}

const str = prompt("Введите строку с цифрами:", "");
const phoneNumber = "YourPhoneNumberHere"; // Replace with your phone number


if(str){ // add input validation
    let firstDigitMessage;
    switch (str.charAt(0)) {
        case '1':
        case '2':
        case '3':
            firstDigitMessage = 'Первая цифра 1, 2 или 3';
            break;
        default:
            firstDigitMessage = 'нет';
    }

    const phoneNumberIncluded = str.includes(phoneNumber);
    console.log(firstDigitMessage);
    console.log("Номер телефона включен:", phoneNumberIncluded);
} else {
    console.log("Строка пуста")
}