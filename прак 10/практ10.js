function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
    alert(message);
  }
  
  showMessage(); // Привет, я JavaScript!
 // alert(message);  Ошибка

  function isPalindrome(str) {

    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome("А роза упала на лапу Азора")); // true
  console.log(isPalindrome("hello")); // false


  function replaceNegativesWithSquares(arr) {
    if (arr.length <= 10) {
      throw new Error("Массив должен содержать больше 10 элементов.");
    }
    return arr.map(num => num < 0 ? num * num : num);
  }
  
  let numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12];
  let result = replaceNegativesWithSquares(numbers);
  console.log(result); // [1, 2, 9, 4, 25, 6, 49, 8, 81, 10, 121, 12]
  
  class User {
    constructor(name) {
      this.name = name;
    }
  
    displayUserName() {
      console.log(`Имя пользователя: ${this.name}`);
    }
  }
  
  const user1 = new User("Евгений");
  user1.displayUserName(); // Имя пользователя: Евгений

  class Greeter {
    constructor(userName) {
      this.userName = userName;
    }
  
    showMessage() {
      let message = `Привет, ${this.userName}`;
      alert(message);
    }
  }
  
  const greeter = new Greeter('Евгений');//Привет Евгений
  greeter.showMessage();

  class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverseName() {
      return this.name.split("").reverse().join("");
    }
  }
  
  const reverser = new NameReverser("Евгений Худов");
  console.log(reverser.reverseName()); // йинегвЕ водуХ





  