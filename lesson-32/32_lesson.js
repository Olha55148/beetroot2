

 
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // просте число
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < +n; i++) {
//       if ( +n % i == 0) return false;
//     }
//     return true;
//   }




// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
//   } else {
//     alert( pow(x, n) );
//   }






// function someOther() {
//     let text = 'someOther'
//   return text;
// }

// const some = function(){
//     const arg = arguments;

// }
// console.log (some(David, 47))


// const some1 = (name, age) => {

//     return `my name is ${name} and ${age} years`;
// }


// someOther();
// some();

// const some3 = function(...rest) {
//     console.log(rest);
//     return`My name ${name}`;
// }



// const some = () => {
// console.log('callback')
// }
// const other = (callback) => {
// if (callback) {
//     callback ();
// }
// }

// setTimeout ()
// setInterval ()

// const some5 = () => console.log('H1');
// setTimeout (some5, 500);
// setTimeout (() => console.log (('H1'), 500));



// let num = (a, b) => {
//     if (a < b) {
//         return `-1`
//     } else if (a > b) {
//         return `1`
//     } else if (a == b) {
//         return `0`
//     }
// }
// alert(num (5, 5))

// let showNumTogether = (a, b, c) => {
//     return +(`${a}${b}${c}`)
// }
// alert(showNumTogether(8,5,9))

// function randomMinMax (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   alert(randomMinMax(39, 100))

// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }
  
//  let num2 = setTimeout(()=>sayHi ("Привіт","Джон"), 1000, );
//   let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
  
//   alert(timerId);
//   alert(num2) // идентификатор таймера
//   clearTimeout(timerId);

//   let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); 

// повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       alert(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
  
  // использование:
//   printNumbers(5, 10);




//   var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// console.log(add.call(obj, 3, 5));



// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// console.log(add.apply(obj, [3, 5]));


// const count = 7;
// let res = "";
// for (let index = 1; index <= count; index++) {
//     res = `${res} ${index} вівця...`;
// }

// const getSheepString = (count, res = '', index = 1) => 
    
//    retur (count)
//    ? getSheepString(count - 1, `${res} ${index} вівця...`, index + 1)
//    : res; 


//     if (count) {
//         res = `${res} ${index} вівця...`;
// return getSheepString(count - 1, `${res} ${index} вівця...`, index + 1)
//     } else {
//         return res;
//     }
// }
// alert(getSheepString)


// const greetings = (text) => {
//     const setName = (name) => `${text} ${name}`;
//     return setName;
// }

// const sayHi = greeting('Hi,');
// const sayGreeting = greetings('Hello');


// const printName = function() {
//     console.log(this)
//     return `This is ${this.name} ${this.strange}`
// }
// const subzero = {
//     name: "subzero",
//     strange: 12,
// }

// const jacson = {
//     name: "jacson",
//     strange: 7,
// }


// subzero.name = 'jacson'
// console.log(printName.call(subzero))
// const randomInteger = (min = 0, max = 3) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// const punch = (number) => {
//     return (power) => number ** power
// }
// const num1 = punch(2);
// alert(num1(randomInteger()));


// function getSum(...array) {
//     let sum = 0;
//     for (let index = 0; index < array.length && index < 5; index++) {
//         const element = array[index];
//         sum += element;
       
        
//     } return sum
// }
// console.log(getSum(5, 6, 7, 8, 9, 4))