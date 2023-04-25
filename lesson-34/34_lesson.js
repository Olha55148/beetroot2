
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


2.
// function itemShoppingListBuy(ar, name){
//     console.log('Список продуктів: ');
//     for (let key of itemShopping){
//         if (key.name == name){
//             key.bought = 'придбаний';
//         }  else key.bought = 'ще не придбаний';
//     }
//    return ar.forEach(e => {
//             console.log(e.name, e.bought);
//     });
// }
// itemShoppingListBuy(itemShopping, 'meat');  


// 2. 
// function itemShoppingListAdd(array)
//  {
//     let addItem = prompt('Який товар додати?');
//     let addMuch = +prompt('Яка кількість товару?');
//     for(let i = 0; i < array.length; i++) {
// if(array[i].name == addItem){
//                 array[i].much += addMuch;
//                 array[i].sum = array[i].price * array[i].much;
//                return array;
//     }

//  if (array[i].name !== addItem ) {
//             let addPrice = +prompt('Яка ціна товару?');
//             let addSum = addPrice *  addMuch;
//             array.unshift(
//                  {
//                     name: addItem,
//                     much: addMuch,
//                     bought: 'no', 
//                     price: addPrice,
//                     sum: addSum
//                 }
//             );  return array;
//         }
//         else return 'error';
//          };
       
              

// };
// console.log(itemShoppingListAdd(itemShopping));