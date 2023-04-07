
// Max
let radius =prompt('Який радіус кола в сантиментрах?');
const pi = 3.14159265358979323846;
const square1 = pi * Number(radius) * Number(radius);
alert(' Площа кола буде дорівнювати ' + square1 + ' см');

let distance =prompt('Яка відстань в кілометрах між двома містами?')
let time =prompt('За скільки годин Ви хочете дістатися до міста?')
const speed = Number(distance) / Number(time);
alert(' Ваша швидкість має бути ' + speed + ' км/год');

let dollar =prompt('Скільки долларів Ви хочете конвертувати у євро');
const exchageRateEuro = 0.92;
const result4 = Number(dollar) * exchageRateEuro;
alert(result4 + ' Євро ');
