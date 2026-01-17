// // 1. 
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// function logItems(array) {
//     for (let i=0; i<array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

const LogItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

console.log(LogItems(['Mango', 'Poly', 'Ajax']));

// 2. Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     let messageArray = message.split(" ");

//     return messageArray.length * pricePerWord;
// }

const calculateEngravingPrice = (message, pricePerWord) => {
    let messageArray = message.split(" ");

    return messageArray.length * pricePerWord;
}

console.log(calculateEngravingPrice("Напиши скрипт підрахунку вартості гравіювання прикрас", 5));

// 3. Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//     let stringArray = string.split(" ");
//     let longestWord = stringArray[0];

//     for (let i=0; i<stringArray.length; i++) {
//         if (longestWord.length < stringArray[i].length) {
//             longestWord = stringArray[i]
//         }
//     }

//     return longestWord;
// }

const findLongestWord = (string) => {
    let stringArray = string.split(" ");
    let longestWord = stringArray[0];

    for (let i = 0; i < stringArray.length; i++) {
        if (longestWord.length < stringArray[i].length) {
            longestWord = stringArray[i]
        }
    }

    return longestWord;
}

console.log(findLongestWord("Напиши функцію string яка приймає параметром довільний рядок"));

// 4. Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string) {
//     if (string.length > 40) {
//         return string.slice(0, 40) + "...";
//     } else {
//         return string;
//     }
// }

const formatString = (string) => {
    if (string.length > 40) {
        return string.slice(0, 40) + "...";
    } else {
        return string;
    }
}

console.log(formatString("яка приймає рядок і форматує його якщо необхідно"));

// 5. Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    if (message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("Super SaLE going on"));

// 6. 

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter a number:");

  if (input === null) {
    break;
  }

  const value = Number(input);

  if (Number.isNaN(value)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(value);
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
}