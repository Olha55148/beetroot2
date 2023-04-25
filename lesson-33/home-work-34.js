const itemShopping = [
    { name: 'apple', much: 3, bought: 'yes', price: 2, sum: 6, },
    { name: 'meat', much: 6, bought: 'no', price: 2, sum: 12, },
    { name: 'cheese', much: 5, bought: 'yes', price: 3, sum: 15, },
    { name: 'pineapple', much: 9, bought: 'no', price: 2, sum: 18, },
];

// 1.
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
// 1. 
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

2. 
function itemShoppingListAdd(array)
 {
    let addItem = prompt('Який товар додати?');
    let addMuch = +prompt('Яка кількість товару?');
    for(let i = 0; i < array.length; i++) {
if(array[i].name == addItem){
                array[i].much += addMuch;
                array[i].sum = array[i].price * array[i].much;
               return array;
    }

 if (array[i].name !== addItem ) {
            let addPrice = +prompt('Яка ціна товару?');
            let addSum = addPrice *  addMuch;
            array.unshift(
                 {
                    name: addItem,
                    much: addMuch,
                    bought: 'no', 
                    price: addPrice,
                    sum: addSum
                }
            );  return array;
        }
        else return 'error';
         };
       
              

};
console.log(itemShoppingListAdd(itemShopping));
    //         itemShopping.forEach(e => {
    //          if(e.bought == 'yes' === true){
    //             console.log('Продукти, які не треба купувати:');
    //             console.log(e.name);
    //          }});
    // }
    // itemShoppingList(itemShopping);
// Max
1.
// let SumOfAll = (array) => {
//     let Sum1 = 0;
//     array.forEach (e => {

//         Sum1 +=e.sum;
//     });
//      return Sum1;

// };
//  console.log(SumOfAll(itemShopping))
2.
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
