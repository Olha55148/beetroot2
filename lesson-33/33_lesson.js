// const person = {
//     first: "David",
//     last: 'ghg',
//     age: 45,
// }
// const address = {
//     city: "river",
//     country: "UA",

// }
// const fullPersonInfo = {...address,...person};
// const { age, first, ...anyName } = fullPersonInfo;

// console.log(!!person.first)

// for (const key in fullPersonInfo) {
//     console.log(key, fullPersonInfo[key])
//     }

// console.log(Object.keys(fullPersonInfo))
// console.log(Object.values(fullPersonInfo))
// console.log(Object.entries(fullPersonInfo))

// const obj = {}
// console.log(!!Object.keys(obj).length)
// console.log(!!obj)





// const tectimonialTV = {
//     producer: "Xiaomi",
//     model: "Mi TV E75S Pro",
//     diagonal: "75″",
//     permition: "4K UHD",
//     format: "HDR10+",
//     system: "Android TV",
//     angle: 178,
// };
// const descriptionTV = {
//     color: "black",
//     width: 166,
//     height: 94, 
// }

// const f = {
//     ProducerModel: function(){
//          return `${this.producer} ${this.model}` 
//     },
//     heightWidthColor: function(){
//         return `${this.height} ${this.width} ${this.color}` 
//    }
// }

// const TV = {...descriptionTV, ...f, ...tectimonialTV}
// alert(TV.ProducerModel())
// const { color, width, height,...any} = TV;
// console.log(any);
// console.log(TV.heightWidthColor());
// console.log(TV)



// const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
// const dayNames = ["Понедіок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота",
//   "Неділя"];
//   const correctNumber = (number) => number < 10 ? `0${number}` : number;
// const getUserTime = (dateObj) => {
//     const date = correctNumber(dateObj.getDate());
//     const month = months[dateObj. getMonth()];
//     const day = dayNames[dateObj. getDay()];
//     const year = 
//     console.log(month);
//     return `${date} ${month} ${year} ${hours} : ${minuts} (${day})`

// } 
// console.log(detUserTime(new Date()))





// const date = new Date();
// const daysOfWeek = ["Понедіок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"];
// const dayOfWeek = daysOfWeek[date.getDay()];
// const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
// const months1 = months[date.getMonth()];

// console.log(`${date.getDate()} ${months1} ${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()} ${dayOfWeek}`);








    


// // 0 означає 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // тепер додамо 24 години, отримаємо 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );

// const moonLanding = new Date('April 17, 2023 11:20:28');

// console.log(moonLanding.getHours());
// Expected output: 18

// const event = new Date();

// event.setSeconds(32);

// console.log(event.getSeconds());
// // Expected output: 42

// console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary


// Max
// const number1 = {
//     numerator: 5,
//     denominator: 24,
// };

// const number2 = {
//     numerator: 3,
//     denominator: 40,
   
// };
// let divider;

// if (number2.denominator == number1.denominator) {
//     let numeratorSum;
//     numeratorSum = number2.numerator + number1.numerator;
//    alert(`${numeratorSum}/${number2.denominator}`);
// } else if (number1.denominator > 0 && number2.denominator > 0) {
//     for (let i = 1; i <= number1.denominator; i++) {
//     if (number1.denominator % i == 0 && number2.denominator % i == 0 && i !== number1.denominator && i !== number2.denominator) {
//     divider = i;
//     } 
//     }alert(divider);
//     numerator
// }


// Array.Suturday
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const cars = [1,2,3]
// const {first} = fruits
// const second = [...fruits, ...cars]

// console.log (fruits.join('~'))

// const arr = fruits.indexOf(('apple'))



  

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);


// function myFunction(value, index, array) {
    
//   txt += value + "<br>";
//   console.log(value)
// } 







// const plus = (array, index, ...element) => array.splice(index, 0, ...element)
//    plus(fruits, 0, "Lemon", "Kiwi") ; 
//  console.log(fruits);

//  const minus = (array, index) => array.splice(index, 1)
//    minus(fruits, 1) ; 
//  console.log(fruits);

//  const two = (arr1, arr2) => arr1.concat(arr2)
//  two(numbers, fruits);
//  const together = (item, pos) => arr1.concat(arr2)
//  two(numbers, fruits);
//  ;
//  console.log(two(numbers, fruits))



  
//   console.log(reduce([1, 2, 3, 4], function(a, b) {
//     return a + b;
//   }, 0));
         
// function filterRangeInPlace(arr, a, b) {

//     let res = arr.filter(item => (item >= a && item <= b));
    
//     arr.splice(0);
    
//     for (let i of res) {
//     arr.push(i);
//     }
    
//     }
    
//     let arr = [5, 3, 4, 9, 8, 1];
    
//     filterRangeInPlace(arr, 1, 9);
    
//     alert( arr );

// const fruits = [45, "Banana", "Orange", "Apple", "Mango"];

// function f(arr) {
//     arr.forEach(e => {
//                      console.log(e);
//             })
// } f(fruits)


// const arr = [1, 2, 3, 4, 5, 12, 7];

// const multiple = arr.map(function(item) {
//     return item + 2;
// }).filter(item => {
//     // Проверяем делится ли текущий элемент массива на 2 без остатка
//     if (item % 2 === 0) return item;
// })
// console.log(multiple); // [4, 6]


// const arr = [22, 35, 57, 41, 60];

// const sum = arr.reduce((current, accum) => {
//     return current + accum;
// });
// console.log(sum); // 215

// сумма значень массиву
// function f2(arr1) {
//     const sum = arr1.reduce((current, accum) => {
//             return current + accum;
//         });
//         console.log(sum)
// }f2(arr)


// знайти більший єлемент

// let f2 = (arrr) => arrr.sort((a, b) => b - a);
 
//  console.log(f2(arr))
//  console.log(arr[0]);


// додати єлемент за індексом

// function new1(arr3, element, index) {
// let newArray = arr3.splice(index, 0, element);

//   return newArray;
// }
//         console.log(new1(arr, 2, 3));
//         console.log(arr)
        
     
   
    





 








