// задание 1

// let password = 'пароль';

// let entry = String(prompt('Введите пароль'));

// let respond = entry !== password ? 'пароль введён неверно' : 'пароль введён верно';
// alert(respond);

// задание 2

// let c = 11;
// c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// c = 0;
// c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// c = 10;
// c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// c = -3;
// c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// c = 2;
// c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// задание 3

// let d, e;
// d = 15, e = 105;

// d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

// задание 4

// let a = '2';
// let b = '3';

// a = parseInt('2', 10);
// b = parseInt('3', 10);

// alert(a + b);

// задание 5

// let monthNumber = Number(prompt('Введите номер месяца и узнайте, к какому сезону он относится'));

// if (monthNumber === 12 || monthNumber <= 2 && monthNumber > 0) {
//     alert('Это зима!');
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     alert('Это весна!');
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     alert('Это лето!');
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     alert('Это осень!');
// } else if (monthNumber === 0) {
//     alert('В году нет месяца 0!');
// } else if (monthNumber < 0) {
//     alert('В году нет отрицательных месяцев!');
// } else {
//     alert('В году только 12 месяцев, которые также не могут быть дробными! При введении названия месяца вместо его номера вы также увидите эту ошибку!')
// }

// дополнительные задания

// задание 7

// let typeAnyNumber = Number(prompt('Вбейте любое целое число'));

// if (typeAnyNumber % 2 === 0 && Number.isInteger(typeAnyNumber) === true) {
//     alert('Вы ввели чётное число!');
// } else if (typeAnyNumber % 2 !== 0 && Number.isInteger(typeAnyNumber) === true) {
//     alert('Вы ввели нечётное число!');
// } else {
//     alert('Введите целое число!');
// }

// задание 8

// let clientOS = Number(prompt('Пожалуйста, укажите 0, если вы пользователь IOS, и 1, если вы пользователь Android'))

// if (clientOS === 0) {
//     console.log('Установите версию приложения для IOS по ссылке: ссылка');
// } else if (clientOS === 1) {
//     console.log('Установите версию приложения для Android по ссылке: ссылка');
// } else {
//     console.log('Извините, но мы не работаем с другими ОС, кроме IOS или Android!');;
// }

// задание 9

// let clientOS = Number(prompt('Пожалуйста, укажите 0, если вы пользователь IOS, и 1, если вы пользователь Android'));
// let currentYear = Number(prompt('Пожалуйста, укажите также год выпуска устройства'));

// if (clientOS === 0 && currentYear >= 2015) {
//     console.log('Установите версию приложения для IOS по ссылке: ссылка');
// } else if (clientOS === 0 && currentYear < 2015 && currentYear >= 2009) {
//     console.log('Установите облегчённую версию приложения для IOS по ссылке: ссылка');
// } else if (clientOS === 1 && currentYear >= 2015) {
//     console.log('Установите версию приложения для Android по ссылке: ссылка');
// } else if (clientOS === 1 && currentYear < 2015 && currentYear >= 2008) {
//     console.log('Установите облегчённую версию приложения для Android по ссылке: ссылка');
// } else {
//     if (clientOS === 0 && currentYear < 2009) {
//         console.log('Версии IOS такого года нет, потому что первый Iphone был выпущен только в 2009 году');
//     } else if (clientOS === 1 && currentYear < 2008) {
//         console.log('Версии Android такого года нет, потому что первый Android был выпущен только в 2008 году');
//     }
// }














