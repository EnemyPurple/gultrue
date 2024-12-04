console.log("1 Задание")
function generateRandomArray(min, max, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  }
  
  function averageOfPositive(array) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
        count++;
      }
    }
    return count > 0 ? sum / count : 0;
  }
  
  const randomArray = generateRandomArray(-10, 30, 15);
  const averagePositive = averageOfPositive(randomArray);
  
  console.log("Случайный массив:", randomArray);
  console.log("Среднее арифметическое положительных:", averagePositive);
  
console.log("2 Задание")
  function replaceNegativesWithSquares(array) {
    if (array.length <= 10) {
      throw new Error("Длина массива должна быть больше 10.");
    }
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        array[i] = array[i] * array[i];
      }
    }
    return array;
  }
  
  const numbers = [-5, 2, -3, 8, -1, 7, -4, 10, 9, 1, -2, 6, 5, -8, 3];
  
  try {
    const updatedNumbers = replaceNegativesWithSquares(numbers);
    console.log("Исходный массив:", numbers);
    console.log("Измененный массив:", updatedNumbers);
  } catch (error) {
    console.error(error.message);
  }
  
console.log("3 Задание")
  function analyzeArray(array) {
    let sumPositive = 0;
    let sumNegative = 0;
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sumPositive += array[i];
        countPositive++;
      } else if (array[i] < 0) {
        sumNegative += array[i];
        countNegative++;
      } else {
        countZero++;
      }
    }
  
    return {
      averagePositive: countPositive > 0 ? sumPositive / countPositive : 0,
      averageNegative: countNegative > 0 ? sumNegative / countNegative : 0,
      countZero: countZero
    };
  }
  
  const testArray = [1, -2, 0, 3, -4, 5, -6, 7, 0, 8, -9, 10];
  
  const analysis = analyzeArray(testArray);
  
  console.log("Среднее арифметическое положительных:", analysis.averagePositive);
  console.log("Среднее арифметическое отрицательных:", analysis.averageNegative);
  console.log("Число нулей:", analysis.countZero);
  
console.log ("задание 4")
  function simulateColors(iterations) {
    let maxRed = 0;
    let currentRed = 0;
  
    for (let i = 0; i < iterations; i++) {
      const randomValue = Math.floor(Math.random() * 3);
  
      if (randomValue === 0) {
        currentRed++;
      } else {
        currentRed = 0; 
      }
  
      maxRed = Math.max(maxRed, currentRed);
    }
  
    return maxRed;
  }
  
  const maxRedCount = simulateColors(1000000);
  console.log("Максимальное число выпадений красного:", maxRedCount);