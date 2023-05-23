

// Home-work
// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.

class circleDescribes {
    constructor (radius) {
        this.radius = radius;
    }
    get takeRadius () {
        return `${this.radius}`
    }
    set giveRadius (value) {
        this.radius = value;
    }
    get diameter () {
        return +(this.radius * 2)
        
    }
    Area ()  {    
    const res = (+(Math.PI * this.radius ** 2).toFixed(2));
    console.log (`${res} cm - це периметр`);
}
    lengthCircle() {
        const res =  (+(2 * Math.PI * this.radius).toFixed(2));
        console.log(`${res} cm - це довжина кола`)
    }
  
};
const circle = new circleDescribes (20);
circle.Area();
circle.lengthCircle();
circle.radius = 50;
circle.lengthCircle();
circle.Area();
console.log(`${circle.takeRadius} cm - це радіус`);
console.log(`${circle.diameter} cm -це діаметр`);


// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.

    class Marker {
        constructor (color, inkAmount) {
            this.color = color;
            this.inkAmount = inkAmount;
        }
        showText (text) {
            let textQty = this.inkAmount;
            if (text.length <= textQty) {
                document.getElementById("markerOutput").innerHTML = `
                    <p class="mt-2" id="markerResult" style="color:${this.color}">${text}</div>
                `;
            } else {
                let textArray = [...text];
                let notEnoughInk = textArray.splice(textQty);
                document.getElementById("markerOutput").innerHTML = `
                    <span style="color:${this.color}">${textArray.join("")}</span><span style="color: black">${notEnoughInk.join("")}</span>
                `;
            }
        }
    }
    
    class fullMarker extends Marker {
        constructor(color, inkAmount) {
            super(color, inkAmount)
        }
        refill() {
            this.inkAmount = 100;
            alert(`Чорнило було поповнено на ${this.inkAmount}%`);
        }
    }
// Реалізуй клас, що описує канцелярський маркер.

// виводимо текст

document.getElementById("markerTextConfirm").addEventListener("click", function () {
    const textColor = document.getElementById("markerColorInput").value;
    const inkAmount = document.getElementById("markerInkQty").value;
    const myMarker = new Marker(textColor, inkAmount);
    const text = document.getElementById("markerTextInput").value;
    myMarker.showText(text);
});

// поповнюємо чорнила

document.getElementById("inkRefill").addEventListener("click", function () {
    const refillMarker = new fullMarker();
    refillMarker.refill();
    document.getElementById("markerInkQty").value = 100;
});

// #3
class Employee {
    constructor (name, position, age, salary) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.salary = salary;
    }
}

class EmpTable {
    constructor (empList) {
        this.empList = empList; 
    }
    getHtml (){
        let html = '';
        this.empList.forEach(element => {
            html += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.position}</td>
                    <td>${element.age}</td>
                    <td>${element.salary}</td>
                </tr>
            `;
        });
        return html;
    }
    viewHtml (elementId){
        document.getElementById(elementId).innerHTML = this.getHtml();
    }
}


const list = [
 {
        name: 'Lynne Stokes',
        position: 'The Bank Teller',
        age: 28,
        salary: 1600
    },
{
        name: 'Dana Whitney',
        position: 'The Loan Officer',
        age: 25,
        salary: 1700
    },
{
        name: 'Hallie Brandt',
        position: 'The Investment Banker',
        age: 27,
        salary: 1800
    },
 {
        name: 'Juliet Berger',
        position: 'The Loan Officer',
        age: 26,
        salary: 1500
    }
]

const myTable = new EmpTable (list);
myTable.viewHtml('employeeTable');
    
// lesson 43
// #1
class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('role може бути або admin або user');
    }
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Name changed to ${newName}.`);
  }

  changePassword(newPassword) {
    console.log(`Password changed to ${newPassword}.`);
  }
}

const user1 = new User('Petro', 'admin');
console.log(user1.getName()); // Petro
console.log(user1.getRole()); // admin
user1.login(); // Petro logged in.
user1.logout(); // Petro logged out.
user1.changeName('Ivan'); // Name changed to Ivan.
user1.changePassword('newpassword'); // Password changed to newpassword.





class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log(`${user.getName()} added.`);
    } else {
      alert('Invalid user!');
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`${user.getName()} removed.`);
    } else {
      alert('User not found!');
    }
  }

  changeUserRole(user, role) {
    if (user instanceof User && (role === 'admin' || role === 'user')) {
      user.role = role;
      console.log(`${user.getName()}'s role changed to ${role}.`);
    } else {
      alert('Invalid user or role!');
    }
  }

  getAllUsers() {
    console.log(this.users);
  }

  removeAllUsers() {
    this.users = [];
    console.log('All users removed.');
  }
}

const admin1 = new Admin('Ivan');
console.log(admin1.getName()); // Ivan
console.log(admin1.getRole()); // admin
const user2 = new User('Petro', 'user');
admin1.addUser(user2); // Petro added.
admin1.getAllUsers(); // [User { name: 'Petro', role: 'user' }]
admin1.changeUserRole(user2, 'admin'); // Petro's role changed to admin.
admin1.getAllUsers(); // [User { name: 'Petro', role: 'admin' }]
admin1.removeUser(user2); // Petro removed.
admin1.getAllUsers(); // []
admin1.removeAllUsers(); // All users removed.
  






		class WorldClock {
			constructor(city, offset) {
				this.city = city;
				this.offset = offset;
			}

			getCurrentDate() {
				let date = new Date();
				let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
				let newDate = new Date(utc + (3600000*this.offset));
				return newDate.toLocaleDateString();
			}

			getCurrentDateTime() {
				let date = new Date();
				let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
				let newDate = new Date(utc + (3600000*this.offset));
				return newDate.toLocaleString();
			}

			deleteClock() {
				document.getElementById(this.city).remove();
			}
		}

		function addClock() {
			let city = document.getElementById("city").value;
			let offset = document.getElementById("offset").value;
			let worldClock = new WorldClock(city, offset);
			let div = document.createElement("div");
			div.setAttribute("id", worldClock.city);
			div.innerHTML = "<h2>" + worldClock.city + "</h2><p>Date: " + worldClock.getCurrentDate() + "</p><p>Time: " + worldClock.getCurrentDateTime() + "</p><button onclick='deleteClock(\"" + worldClock.city + "\")'>Delete Clock</button>";
			document.body.appendChild(div);
		}
	
	









