// // Min
// // 1.1
// const car = {
//     producer: 'Honda',
//     model: 'Civic',
//     'year of issue': 2012,
//     averageSpeed: 140,
//     'volum of the tank': 40,
//     averrageConsumption: 9,
//     driver: ['Vitalii', 'Sergii'],
//     fullName: function() {
//      return `${this.producer} ${this.model} ${this['year of issue']} ${this.averageSpeed} ${this['volum of the tank']}  ${this.averrageConsumption} ${this.driver} ${this.Name}`   
//     }
// }
// 

// 1.2
// car.Name = 'Ivan'
// console.log(car.fullName());
// 1.3
// alert("driver" in car)

// for (let prop in car) {
//     // ключі
//     alert( prop );  // name, age, isAdmin
//     // значення ключів
//     alert( car[prop] ); // Іван, 30, true
//   }
// 1.4
//   const distance = 3000;
//   let temp = 0;
//   let count = 0;
//   if (distance && car.averageSpeed) {
//     let time = Math.round(distance / car.averageSpeed);
//     alert(`Потрібно ${time} годин`);
//     for (let i = 1; i <= time;  i++ ) {
//         if (i % 4 == 0){
//             temp = i;
//             count +=1;
//         } 
//     } alert(`зроби ${count} перерву`) 
//   } if (car['volum of the tank'] && car.averageSpeed) {
// let tank = (car.averrageConsumption * distance) / 100
// alert(`Потрібно ${tank} літрів бензину`);
//   }

// Norma
// 1.1
// let now = new Date();
// alert( now );

// 1.2
// let date1Seconds = new Date();
// date1Seconds.setSeconds(date1Seconds.getSeconds() + 70);

// alert( date1Seconds );

// 1.3
// let dateMinuts = new Date();
// dateMinuts.setMinutes(dateMinuts.getMinutes() + 90);

// alert( dateMinuts );
// 1.4
// let dateHours = new Date();
// dateHours.setHours(dateHours.getHours() + 2);

// alert( dateHours );






