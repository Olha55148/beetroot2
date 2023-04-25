
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
// який містить назву продукту, кількість і куплений він чи ні, ціну 
// за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const itemShopping = [
    { name: 'apple', much: 3, bought: 'yes', price: 2, sum: 6, },
    { name: 'meat', much: 6, bought: 'no', price: 2, sum: 12, },
    { name: 'cheese', much: 5, bought: 'yes', price: 3, sum: 15, },
    { name: 'pineapple', much: 9, bought: 'no', price: 2, sum: 18, },
];

1.
//  Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

// function itemShoppingList(itemShopping){
//     console.log('Список продуктів: ');
//     itemShopping.forEach(e => {

//         if(e.bought == 'yes' === false){
//             console.log('Продукти, які треба купити:');
//             console.log(e.name);
//         } });
//         itemShopping.forEach(e => {
//          if(e.bought == 'yes' === true){
//             console.log('Продукти, які не треба купувати:');
//             console.log(e.name);
//          }});
// }
// itemShoppingList(itemShopping);
 
2.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

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

// Norma
1. 
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)



//     const shoppingListDeleteItem = (array) => {
//         let deleteItem = prompt('Який товар Ви хочете видалити зі списку?');
//         let num;
//         for (let i = 0; i < array.length; i++){
//             if (array[i].name === deleteItem){
//                 num = i;
              
//             }
// }
//     if ( !isNaN(num) ) {
//         let newArray = array.slice();
//         newArray.splice(num, 1);
//         return newArray;
//       } else {
//         return `Товар відсутній у списку`;
//       }
//     };
//     console.log(shoppingListDeleteItem(itemShopping));
// Max
1.
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.


// let SumOfAll = (array) => {
//     let Sum1 = 0;
//     array.forEach (e => {

//         Sum1 +=e.sum;
//     });
//      return Sum1;

// };
//  console.log(SumOfAll(itemShopping))
2.
// Підрахунок суми всіх (не) придбаних продуктів.

// const SumNotBought = (array) => {
//     let Sum1 = 0;
//    array.forEach(e => {
//              if(e.bought == 'no' === true){
//         Sum1 +=e.sum;
//              }});  
//              return Sum1;
// };
// console.log(SumNotBought(itemShopping))
3.
// Показання продуктів в залежності від суми, (від більшого 
// до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

// let SumOf = (array, e) => {
//     if (e >= 0) {
//         return array.sort((a, b) => a.sum - b.sum);
//     }
//     if (e < 0) {
//         return array.sort((a, b) => b.sum - a.sum);
//     }
// };

// console.log(SumOf(itemShopping, -9))