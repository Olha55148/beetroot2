
// 1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

let wrap_text = document.getElementById('edit_text')

const div_edit = document.createElement('div');
let some_text = `Some text, you can press \"ctrl + E\" to edit it `;
div_edit.innerText = some_text;

// div_edit.classList.add("action_div");

let text_area = document.createElement('textarea');
// text_area.classList.add("action_text_area");
text_area.innerText = some_text;
text_area.style.display = "none";
text_area.classList.add("get_text");



wrap_text.append(div_edit);
wrap_text.append(text_area);

// wrap_text = text_area;

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === "KeyE") {
        event.preventDefault();
        div_edit.style.display = "none";
        text_area.style.display = "block";
    };
    if (event.ctrlKey && event.code === "KeyS") {
        event.preventDefault();
        let some_text = document.querySelector(".get_text").value;
        div_edit.innerText = some_text;
        div_edit.style.display = "block";
        text_area.style.display = "none";
        div_edit.appendChild(resize_point);
    };
})


// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
div_edit.style.border = '1px solid blue';
div_edit.style.width = '50%';
div_edit.style.height = '200px';
div_edit.style.overflow = 'hidden';
div_edit.style.position = 'relative';

let resize_point = document.createElement('div');
div_edit.appendChild(resize_point);
resize_point.style.width = '10px';
resize_point.style.height = '10px';
resize_point.style.background = 'red';
resize_point.style.position = 'absolute';
resize_point.style.right = '0';
resize_point.style.bottom = '0';
resize_point.style.cursor = 'sw-resize';

resize_point.addEventListener('mousedown', function () {
    console.log('Init resize');
    document.addEventListener('mousemove', resizeDiv);
    document.addEventListener('mouseup', stopResize);
});


function resizeDiv(e) {
    div_edit.style.width = (e.clientX - div_edit.offsetLeft) + 'px';
    div_edit.style.height = (e.clientY - div_edit.offsetTop) + 'px';
};

function stopResize(e) {
    document.removeEventListener('mousemove', resizeDiv);
    document.removeEventListener('mouseup', stopResize);

}






