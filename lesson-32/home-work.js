
// Min
// 1.
// 1.1. Декларація функції;
// function showMessage() {
//     alert('Всім привіт!');
//   };
//   1.2. Функціональний вираз;
//   let sayHi = function(name) {
//     alert( `Привіт, ${name}` );
//   };
//   1.3.
//   let func = (arg1, arg2, arg3...) => arg1 * arg2 * arg3;
// 2.
// function quantity() {
//     for(i = 0; i < arguments.length; i++) {
//         return arguments.length;
//     }
    
// }
// alert(quantity(4, 6, 90, 87, 54));

// 3.
// let a = prompt('назвітьчисло');
// let b = prompt('назвітьчисло');
// let c;
// function min(a, b) {
 
//     if (+a < +b) {
//         return  c = -1;
//     } else if (a > b) {
//         return c = 1;
//     }else if (a === b) {
//         return c = 0;
//     }
// }
// 4.
// function factorial (n) {
//     if (n != 1) {
//         n = n * factorial(n-1)
//         return n;
//     } else 
//     return 1;
//     }
// alert(factorial(6));

// 5. 
// function showNum(a, b, c,) {
//     let plus = `${a}${b}${c}`
//     return +plus;
// }
// alert(showNum(3, 5, 67));

// 6. 
// let width = +prompt('Назвіть ширину прямокутника');
// let length = +prompt('Назвіть довжину прямокутника');

// function calcSquare(width, length) {
//     let square;
//     if (width && length) {
//         square = width * length;
//         return `Площа прямокутника ${square}`;
//     } else if (width || length) {
//         square = length * length || width * width;
//         return `Площа квадрата ${square}`;
//     }
// };
// alert (calcSquare(width, length));

// Norma
// 1.
 
//  function getAbsolut(number) {
//     let sum = 0;
//     for (i=1; i *2 <= +number; i++){
//         if ( number % i == 0) {
//             sum +=i;
//         } 
//     } 
//     if (sum === number) {
//         alert(`good`)
//     } else {
//         alert(`not`)
//     }
//  }
//  getAbsolut(40)
// 2. 
// function getAbsolut2(a, b) {
//     let sum;
//     sum = 0;
//     for (i = a; i <= b; i++){
//         for (j = 1; j < i; j++)
//         if (i % j == 0) {
//             sum += j
//         }
//     } if (sum == i) {
//         alert(`good`)
//     } else {
//         alert(`not`)
//     }
// }
// getAbsolut2(1, 300)





