// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
  for (const index in array) {console.log(index)};
  
  // Проходимося по всіх індексах масиву
  // Виводимо кожен індекс на консоль
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
  let sum = 0; 
  for (let index in array) {
    sum += array[index];
  }  
  return sum; 

  // Ініціалізуємо змінну для зберігання суми
  // Проходимося по всіх індексах масиву
  // Додаємо кожен елемент до загальної суми
  // Повертаємо суму
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
  let prod = 1; 
  for (let item of array) {
    prod *= item;
  }  
  return prod; 
  // Ініціалізуємо змінну для зберігання добутку
  // Проходимося по всіх значеннях масиву
  // Множимо кожен елемент на загальний добуток
  // Повертаємо добуток
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. Видаліть третій елемент масиву та перетворіть в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
  delete array[2];
  console.log(array.toString())

  // Видаляємо третій елемент масиву
  // Виводимо масив перетворений в рядок
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].toUpperCase())

    // const element = array[i];
    // const uppercaseElement = element.toUpperCase();
    // console.log(uppercaseElement);
  }
  // Проходимося по всіх елементах масиву
  // Перетворюємо кожен елемент в верхній регістр та виводимо на консоль
}

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) {
  let min = firstElement;
  let max = firstElement;
  for (let i = 1; i < restElements.length; i++) {
        
      if (restElements[i] < min) {
          min = restElements[i];
        }

        if (restElements[i] > max) {
          max = restElements[i];
        }
      }
      console.log("Min:", min );
      console.log("Max:", max );
     
      function findMinMax([firstElement, ...restElements]) {
  let min = firstElement;
  let max = firstElement;
  
  for (let i = 0; i < restElements.length; i++) {
    const element = restElements[i];
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }

  console.log("Мінімальне значення:", min);
  console.log("Максимальне значення:", max);
}
  // Ініціалізуємо змінні для мінімального та максимального значень, задаємо їм перше значення масиву
  // Перебираємо масив починаючи з другого елементу
  // Перевіряємо, чи поточний елемент менший за мінімальне значення
  // Якщо так, оновлюємо мінімальне значення
  // Перевіряємо, чи поточний елемент більший за максимальне значення
  // Якщо так, оновлюємо максимальне значення
  // Виводимо мінімальне та максимальне значення
}

// від chatGPT:
// function findMinMax([firstElement, ...restElements]) {
//   let min = firstElement;
//   let max = firstElement;
  
//   for (let i = 0; i < restElements.length; i++) {
//     const element = restElements[i];
//     if (element < min) {
//       min = element;
//     }
//     if (element > max) {
//       max = element;
//     }
//   }

//   console.log("Мінімальне значення:", min);
//   console.log("Максимальне значення:", max);
// }

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторіть його 2 рази. Результат виведіть на консоль.
function printStrings(array) { 
  
  console.log(array.toString().repeat(2).trim())
  // Перетворюємо масив в рядок і видаляемо пробіли та виводимо його на консоль
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
  // const string = array.toString();
  // const isSubstringPresent = string.includes(subString);

  // console.log(isSubstringPresent)

  console.log(array.toString().includes(subString))

  // Використовуємо метод toString() для перетворення масиву в рядок
  //Перевіряємо чи містить рядок підрядок
  // Виводимо результат
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
  let result = Array(array.length);

  for (const index in array) {result[index] = array[index] + 10;
   
  // resultArray.push(result);
}
console.log(result)
  // Ініціалізуємо масив через конструктор з такою же кількістю елементів як в вхідному масиві для зберігання результату
  // Перебираємо масив за допомогою циклу for-in
  // Додаємо до поточного елемента 10 та додаємо результат в новий масив
  // Виводимо результат
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
  let max = array[0];
  let min = array[0];
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    } else if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  [array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]];
  return array;
  // Ініціалізуємо дві змінні (max і min) з першим елементом масиву. Ці змінні будуть використовуватися для зберігання максимального та мінімального значень в масиві.
  // Ініціалізуємо дві змінні (maxIndex і minIndex) з нульового значення. Ці змінні будуть використовуватися для зберігання індексів максимального та мінімального значень в масиві.
  // Використовуємо цикл for для ітерації по масиву. Починаємо з першого елемента (i = 0) і продовжуємо до останнього елемента масиву (i < array.length).
  // Умова if перевіряє, чи є поточний елемент масиву більшим за поточне максимальне значення. Якщо це так, оновлюємо max з поточним елементом масиву та maxIndex з поточним індексом.
  // Умова else if перевіряє, чи є поточний елемент масиву меншим за поточне мінімальне значення. Якщо це так, оновлюємо min з поточним елементом масиву та minIndex з поточним індексом.
  // Застосовуємо деструктуризацію масиву для обміну місцями мінімального та максимального значення в масиві.
  // Функція повертає масив, в якому мінімальне та максимальне значення обміняні місцями.
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
      const evenNumbers = [];   
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];  
      if (number % 2 === 0) {
       evenNumbers[evenNumbers.length] = number;
      }
    }  
    return evenNumbers; 
  // Створюємо пустий масив для зберігання результату
  // Проходимо через кожен елемент вхідного масиву
  // Перевіряємо чи є число парним
  // Якщо так, додаємо його до масиву результату
  // Повертаємо масив результату
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
  const evenNumbers = [];   
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i] * i;  
     {
      evenNumbers[evenNumbers.length] = number;
    }
  }  
  return evenNumbers; 
  // Створюємо пустий масив для зберігання результату
  // Проходимо через кожен елемент вхідного масиву
  // Помножуємо число на його індекс і додаємо до масиву результату
  // Повертаємо масив результату
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
  const evenNumbers = [];   
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];  
    if (number > 10) {
      evenNumbers[evenNumbers.length]="Greater than 10";
    }
    if (number <= 10) {
      evenNumbers[evenNumbers.length]="Less than or equal to 10";
    }
  }  
  return evenNumbers; 
  // Створюємо пустий масив для зберігання результату
  // Проходимо через кожен елемент вхідного масиву
  // Перевіряємо, чи число більше за 10
  // Якщо число більше за 10, додаємо рядок "Greater than 10" до масиву результату
  // Якщо число менше або дорівнює 10, додаємо рядок "Less than or equal to 10" до масиву результату
  // Повертаємо масив результату
}

console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]
