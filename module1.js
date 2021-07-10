// 1.3 /*
//  * Для оголошення змінної використовуються ключові слова let і const,
//  * за якими слідує ім'я змінної.
//  * Змінним оголошеним через let не обов'язково відразу привласнювати значення.
//  */
// let age;

// /*
//  * Змінні оголошені як const обов'язково повинні бути ініційовані
//  * значенням під час оголошення, інакше нічого не вийде.
//  */
// const yearOfBirth = 2006;

// /*
//  * Значення змінної можна отримати звернувшись до неї по імені.
//  * console.log() використовується для виведення даних в консоль розробника,
//  * з цим методом більш детально познайомимося пізніше.
//  */
// console.log(yearOfBirth); // 2006

// /*
//  * Якщо змінної оголошеної як let, з самого початку не присвоєно значення,
//  * вона ініціюється спеціальним значенням undefined (не визначене).
//  */
// console.log(age); // undefined

// /*
//  * Якщо змінна оголошена як let, її значення можна перезаписати.
//  */
// age = 14;
// console.log(age); // 14

// /*
//  * Якщо змінна оголошена як const, перезаписати її значення не можна.
//  * При спробі привласнити нове значення буде помилка виконання скрипта.
//  */
// yearOfBirth = 2020; 
// // буде помилка index.js:37 Uncaught TypeError: Assignment to constant variable.
// // at index.js:37

// 1.6
// let name;

// /*
//  *  Мінлива name оголошена, але не ініціалізована, тому
//  * Її значення undefined (не визначене), тоді як змінна age
//  * Не було визнано, тому доступ до неї викликає помилку
//  ReferenceError
//  */
// console.log(name); // undefined
// console.log(age); // ReferenceError: age is not defined

// 1.6.1
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // 10

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// const b = 15;
// console.log(b); //15

// Типы примитивово 
// (чтобы определить тип у переменно можно использовать оператор typeof: console.log(typeof d))
// Object - объект
// Number - число 
// String - строка
// Boolean - логичный тип данных
// null - пустой объект, ничто (например возвращается от нажатия кнопки на prompt('отмена'))
// undefined - спец.значение (оглашается переменная, но без значения/функция без ретерна)

// 2
// const message = 'JavaScript is awesome!';
// // /*
// //  * В круглих дужках вказуємо ім'я змінної,
// //  * Значення якої необхідно вивести в консоль
// //  */
// // console.log(message); // JavaScript is awesome!

// /*
//  * alert виводить модальне вікно, текст якого відповідає значенням
//  * змінної (або літерала) яку ми вкажемо в дужках.
//  */
// alert(message);

// const name = 'Mango';
// /*
//  * Можна спочатку вказати якийсь довільний рядок,
//  * наприклад описує змінну або доповнює її, після чого
//  * поставити кому і вказати ім'я змінної
//  */
// console.log('My name is: ', name); // My name is: Mango

//3
// /*
//  * Просимо клієнта підтвердити бронь на готель
//  * і зберігаємо в змінну результат роботи confirm
//  */
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing); -- возращает true or false

/*
 * Запитуємо ім'я готелю в якому хотів би зупиниться клієнт
 * і зберігаємо в змінну результат виклику prompt
 */
// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// /*
//  * Важлива особливість prompt в тому, що не залежно що ввів користувач,
//  * завжди повернеться рядок. Тобто якщо користувач ввів 5, то повернеться
//  * не число 5, а рядок "5". Про це необхідно завжди пам'ятати.
//  */
// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // 

