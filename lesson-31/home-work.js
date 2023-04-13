// Min 
1.
// const age2 = Number(prompt('Скажіть Ваш вік'));
// дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...),
// if (age2 <= 11) {
//     alert(`Ви є дитиною`);
// } else if (age2 >= 12 && age2 <= 17) {
//     alert(`Ви є підлітком`);
// } else if (age2 >=18 && age2 <= 59) {
//     alert(`Ви є дорослим`);
// } else if (age2 >=60) {
//     alert (`Ви є пенсіонером`)
// } else {
//     alert(`Error`)
// };

2.
// let numberUser = Number(prompt('Назвіть число від 0 до 9'));
// виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// switch (numberUser) {
//     case 0:
//         alert(`)`);
//         break;
//     case 1:
//         alert(`!`);
//         break;
//     case 2:
//         alert(`@`);
//         break;
//     case 3:
//         alert(`#`);
//         break;
//     case 4:
//         alert(`$`);
//         break;
//     case 5:
//         alert(`%`);
//         break;
//     case 6:
//         alert(`^`);
//         break;
//     case 7:
//         alert(`&`);
//         break;
//     case 8:
//         alert(`*`);
//         break;
//     case 9:
//         alert(`(`);
//         break;
//     default:
//         alert(`Error`)
// };

3.
// let firstNum = prompt('введіть перше число діапазону');
// let secondNum = prompt('введіть друге число діапазону');
// let sum = 0;

// for (let i = +firstNum; i <= +secondNum; i++) {
// sum +=i;
// }
// alert(`Сума всіх чисел в заданному діапазоні буде дорівнюватиме ${sum}`);

4.
// let firstNum1 = +prompt('введіть перше число');
// let secondNum1 = +prompt('введіть друге число');
// let dil;
// for (let i = 0; i < firstNum1; i++) {
//     if (firstNum1 % i == 0 && secondNum1 % i == 0 && i !== firstNum1 && i !== secondNum1) {
//     dil = i;  
//     }
// }
// alert(`Найбільший спільний дільник для цих двох чисел: ${dil}`);

5.
// let num5 = +prompt('введіть число');
// for (let i = 2; i *2 <= num5; i++) {
//     if (num5 % i == 0) {
//       alert(`Дільники цього числа будуть ${i}`);  
//     }
// };



// Norma


1. 
// let palindrom = +prompt('Введіть пятирозрядне число');
// let fifth = palindrom % 10;
// let fourth = Math.trunc((palindrom % 100) / 10);
// let third = Math.trunc((palindrom % 1000) / 100);
// let second = Math.trunc((palindrom % 10000) / 1000);
// let first = Math.trunc((palindrom % 100000) / 10000);
// let otherwise = `${fifth}${fourth}${third}${second}${first}`;
 
//     if (palindrom === +otherwise) {
//        alert(`Число - паліндром`);
//     } else {
//         alert (`Число - не паліндром`)
//     };
 

2. 
// const num3 = Number(prompt('Сума покупки?'));
// let result;

// if (num3 >= 200 && num3 < 300) {
//     result = num3 - (num3 * 0.03);
// }
//  else if
//     (num3 >= 300 && num3 < 500) {
//     result = num3 - (num3 * 0.05);
// }
// else if
//     (num3 >= 500) {
//     result = num3 - (num3 * 0.07);
// }
// else {
//     result = "Not"
// };
// alert(result);
 
3.

4.
// let dayOfWeek
// for (let i = 0; i < 1; i++) {
//     dayOfWeek = alert(`Понеділок. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`Вівторок. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`Середа. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`Четвер. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`П'ятниця. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`Субота. Хочеш побачити наступний день?`)
//     dayOfWeek = alert(`Неділя. Хочеш побачити наступний день?`)
// };

// Max
2.
// let result;
// for (let i = 2; i < 10; i++) {
//     console.log(i);
//     for (let y = 1; y < 11; y++) {
//         result = +i * +y;
//         console.log(result);
//     }
// }

3.
let date = +prompt('Назвіть поточну дату');
let month = +prompt('Назвіть поточний місяць');
let year = +prompt('Назвіть поточний рік');

date = date + 1;
month = month + 1;

if (date == 32) {
    date = 1;
}

if (month == 13) {
    month = 1;
    year +=year;
} else if (date > 31 || month > 12 ) {
    alert(`Error`)
};
if (date == 29 && month == 3) {
    date = 1;
};

alert(`наступна дата: ${date}.${month}.${year}`);


 






