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