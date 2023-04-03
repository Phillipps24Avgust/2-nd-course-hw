// задание 1

// const theLessNumber = (a, b) => {
//     if (a < b) {
//         console.log(a);
//     } else if (a > b) {
//         console.log(b);
//     } else if (a === b) {
//         console.log(a);
//     } else {
//         console.log("Введите числовые значения!");
//     }
//  }

// theLessNumber(1, 5);
// theLessNumber(5, 5);
// theLessNumber(10, 5);

// задание 2

// const isEven = (number) => {
//     if (number % 2 === 0) {
//         console.log("Число чётное");
//     } else if (number % 2 !== 0) {
//         console.log("Число нечётное");
//     }
// }

// isEven(2);
// isEven(3);

// задание 3

// задание 3.1

// const squared = (number) => {
//     console.log(number ** 2);
// }

// squared(5);

// задание 3.2

// const squared = (number) => {
//     let result = alert(number ** 2);
//     return result;
// }

// squared(5);

// задание 4

// const greeting = () => {
//     age = prompt("Сколько вам лет?");

//     if (age < 0) {
//         alert("Вы ввели неправильное значениe!")
//     } else if (age >= 0 && age <= 12) {
//         alert("Привет, друг!")
//     } else {
//         alert("Добро пожаловать!");
//     }
// }

// greeting();

// задание 5

// const isNumber = (a, b) => {
//    if (isNaN(a) !== true && isNaN(b) !== true) {
//         console.log(a * b);
//    } else {
//     console.log("Одно или оба значения не являются числом");
//    }
// }

// isNumber(2, 2);
// isNumber(2);
// isNumber("Не число", 2);

// задание 6

// const cubed = () => {
//     let number = prompt("Введите число");

//     if (isNaN(number) !== true) {
//         number = number ** 3;
//         console.log(`Введённое число в кубе равняется ${number}`);
//     } else {
//         console.log("Переданный параметр не является числом");
//     }
// }

// cubed();

// задание 7

// const pi = 3.14;

// function getArea () {
//     return (this.radius ** 2) * pi;
// }

// function getPerimeter () {
//     return (this.radius * 2) * pi;
// }

// const circle1 = {
//     radius: 5,
//     getSphereArea: getArea, 
// }

// const circle2 = {
//     radius: 12,
//     getSpherePerimeter: getPerimeter,
// }

// console.log(circle1.getSphereArea());
// console.log(circle2.getSpherePerimeter());

// задание 8

const seasonsOfYear = () => {
    let season = Number(prompt("Введите номер любого месяца года"));

    if (season > 0 && season <= 2 || season === 12) {
        console.log("Это зима!");
    } else if (season >= 3 && season <= 5) {
        console.log("Это весна!");
    } else if (season >= 6 && season <= 8) {
        console.log("Это лето!");
    } else if (season >= 9 && season <= 11) {
        console.log("Это осень!");
    } else if (isNaN(season) === true || season < 0) {
        console.log("Пожалуйста, введите числовое неотрицательное значение!")
    }
}



