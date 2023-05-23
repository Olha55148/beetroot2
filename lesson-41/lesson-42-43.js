// lesson 42
// class Computer {
//     // processor: 'Intel Pentium Gold 8500',
//     // memory: '4096MB RAM',
//     // name: 'my'
//     constructor (processor, memory, name) {
//         this.processor = processor;
//         this.memory = memory;
//         this.name = name;
//     }
//     get Info () {
//         return `${this.name} ${this.memory}`;
//     }
//     set Info (Info) {
//         [this.name, this.memory] = Info
//     }
//     PrintInfo () {
//         console.log(this.Info)
//     }
// }
// const userOne = new Computer('Intel Pentium Gold 8500', '4096MB RAM', 'my');
// console.log(userOne);
// Computer.Info = 'he has other memory'
// console.log(Computer.Info);
// userOne.PrintInfo ();


// lesson-43
// class Animal {
//     legs;
//     color;
//     weight;
//     constructor(name, color, weight) {
//         this.name = name;
//         this.legs = 4;
//         this.color = color;
//         this.weight = weight;
//     }
//     say() {
//         throw new Error('Not implemented')
//     }
//     eat() {
//         console.log('eating')
//     }
// }
// class Dog extends Animal{
//     #somDogProperty;
//     constructor (somDogProperty, name, color, weight) {
//         super (name, color, weight)
//         this.#somDogProperty = somDogProperty;
//     }
//     say () {
        
//         console.log('Bark', this.#somDogProperty)
//     }
// }
// class Cat extends Animal {
//     somCatProperty;
//     constructor (name, color, weight, somCatProperty) {
//         super (name, color, weight)
//         this.somCatProperty = somCatProperty;
//     }
//     say () {
//         console.log('Meow')
//     }
// }
// const dog = new Dog ('dog value', 'Barsik','Red', 20);
// const cat = new Cat ('Mushka', 'Green', 5, 'cat value')
// console.log(dog)
// console.log(cat)
// cat.eat()
// dog.eat()
// dog.say()
// cat.say()




// class Employee {
//     constructor(name, position, experience, salary) {
//         this.name = name;
//         this.position = position;
//         this.experience = experience;
//         this.salary = salary;
//     }

    // getName () {
    //     return this.name;
    // }
    // getPosition () {
    //     return this.position;
    // }
    // getSalary () {
    //     return this.salary;
    // }

    
    //  }
    //  class EmpTable {
    //     constructor (employers) {
    //         this.employers = employers;
    //     }
    //     getHTML () {
    //         let html = "<table><tr><th>Name</th><th>Position</th><th>Sarary</th></th>";
    //         for (let employers of this.employers) {
    //             html += '<tr>'
    //         }
    //     
    //  


//     sayHi() 
//     {
//         const hi = `${this.name} work in position ${this.position} with salary ${this.salary} for ${this.experience} year`
//         console.log(hi)
//     }
// }

// const workers = [
//     new Employee('Lynne Stokes', 'The Bank Teller', '3', '1500'),
//     new Employee('Dana Whitney', 'The Loan Officer', '2', '1550'),
//     new Employee('Hallie Brandt', 'The Investment Banker', '4', '2300'),
//     new Employee('Juliet Berger', 'The Loan Officer', '5', '2300'),
//     new Employee('Rosemary Flowers', 'The Bank Teller', '1', '1000'),
//     new Employee('Rosa Holmes', 'The Financial Manager', '3', '3000'),
//     new Employee('Janis David', 'The Financial Analyst', '6', '3250'),
//     new Employee('Morton Lawson', 'The Bank Manager', '8', '3500'),
//     new Employee('Phil Holden', 'The Branch Administrator', '7', '4500'),
//     new Employee('Nigel Mccarthy', 'The Bank Teller', '1', '1000'),
// ];



// const data = [{
//     name: 'Lynne Stokes',
//     position: 'The Bank Teller',
//     experience: 3,
//     salary:1500
// },

// {
//     name: 'Dana Whitney',
//     position: 'The Loan Officer',
//     experience: 2,
//     salary:1500
// },

// {
//     name: 'Hallie Brandt',
//     position: 'The Investment Banker',
//     experience: 4,
//     salary:1500
// }
// ].map(({name, position, experience, salary}) => new Employee (name, position, experience, salary)).forEach(worker => worker.sayHi())
// console.log(data)