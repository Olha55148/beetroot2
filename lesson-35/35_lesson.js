// // const ul = document.querySelector('ul');
// // console.log(Array.from(ul));
// // // як рцхатитись по елементам
// // const li = ul.querySelectorAll('li'[3]);
// // console.log (li); 
// // // parent
// // const manipulate = li.parentElement;
// // manipulate.style.border = '1px solid red';

// // const manipulate = li.children;
// // if (manipulate.length) {
// //     Array.from(manipulate).forEach.forEach(elem => {
// //         elem.style.border = '1px solid red';
// //     })
// // } else {
// //     manipulate.style.border = '3px solid red';
// // }

// // console.log(li.parentNode)

// const div = document.querySelector('div');
// // додавання
// div.append('Some text');
// div.appendChild('Some text');
// // створюємо
// const span = document.createElement('span');
// // додаємо
// span.append('span text');
// div.appendChild(span);
// div.before(span);
// div.after(span);
// div.firstElementChild.after(span);
// div.querySelector('#here').after(span);
// // span додвємо текст
// span.innerText = ('some text')
// // все що на сторінціб це ччстіше
// span.textContent = 'some text' 
// // все що в коді
// console.log(div.textContent)

// span.innetHTML = '<h1> text </h1>';
// // div.outerHTML = '<h1> text </h1>'  перезаписуємо;

// div.removeChild(span)

// // знайти link у div
// const link = div.querySelector('a');
// console.log(link)

// // Атрибути
// console.log(link.getAttribute('uuu'))

// link.setAttribute('href', 'http://google.com')
// console.log(link)

// // Data set
// console.log(JSON.parse(link.dataset.home)); 
// // Він зі стрінги зробив обєкт який js розуміє його, 
// // але потрібно слідкувати за лапками


// // класи
// link.classList.add('warning');
// link.classList.remove('warning');
// link.classList.toggle('warning');
// console.log(link.className);


// // style
// link.style.color = 'black';
// link.style.textDecoration = 'none';
// link.style.display = 'block';









// // світлофор
// function changeLight() {
//     let activeRed = document.querySelectorAll('.red.active');
//     let activeYellow = document.querySelectorAll('.yellow.active');
//     let activeGreen = document.querySelectorAll('.green.active');

//     if(activeGreen.length > 0) {
//         turnOffLight();
//         document.querySelector('.red').classList.add('active');
//         return;
//     }
//     if(activeRed.length > 0) {
//         turnOffLight();
//         document.querySelector('.yellow').classList.add('active');
//         return;
//     } 
//     if(activeYellow.length > 0) {
//         turnOffLight();
//         document.querySelector('.green').classList.add('active');
//         return;
//     }
// }

// 




// function turnOffLight() {
//     let elements = document.querySelectorAll('.light');
//     elements.forEach((element) =>  element.classList.remove('active'));
// }


// turnOffLight -  це я вирубаю всі
// <div class="traffic-light">
//     <div class="light red active"></div>
//     <div class="light yellow active"></div>
//     <div class="light green active"></div>
//   </div> - це в індекс так

// const list = document.querySelector('#list');

// const data = [{ 
//     text: "Some link 1 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 2 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 3 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 4 text",
//     url: "some url...",
// },
// ]



// const list = document.querySelector('#list');

// const data = [{ 
//     text: "Some link 1 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 2 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 3 text",
//     url: "some url...",
// },
// { 
//     text: "Some link 4 text",
//     url: "some url...",
// },
// ]



// const createListITEM = ({text, url}) => {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.innerText = text;
//  li.appendChild(a);
//     return li;
// };

// data.forEach((item) => {;
   
//    const el = createListITEM(item);
//     list.appendChild(el);
//     console.log(el);
// })
