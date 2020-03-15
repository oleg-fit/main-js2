// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for. Выведите на страницу в .out-1 формате значение+пробел.

const a1 = [5,7,9, 11, 13, 15];
function f1() {
    let out = document.querySelector('.out-1');
    let str = '';

    // for (let i = 0; i < a1.length; i++) {
    //     str += `${a1[i]} `
    // }

    // for (let key in a1) {
    //     str += `${a1[key]} `
    // }

    for (let item of a1) {
        str += `${item} `;
    }

    out.innerHTML = str;
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

const a2 = [5,7,9, 11, 13, 15];

function f2() {
    let out = document.querySelector('.out-2');
    let str = '';

    // for (let i = 0; i < a2.length; i++) {
    //     str += `${i} ${a2[i]} `
    // }

    for (let key in a2) {
        str += `${key} ${a2[key]} `
    }

    out.innerHTML = str;
}

document.querySelector('.b-2').addEventListener('click', f2);


// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.


function f3() {
    let allDivOut3 = document.getElementsByClassName('out-3');

    // Первый способ
    // for (let i = 0; i < allDivOut3.length; i++) {
    //     allDivOut3[i].innerHTML = 3;
    // }

    // Второй способ
    for (let key in allDivOut3) {
        allDivOut3[key].innerHTML = 3;
    }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.


function f4() {
    let allDivOut4 = document.querySelectorAll('.out-4');

    // Первый способ
    // for (let i = 0; i < allDivOut4.length; i++) {
    //     allDivOut4[i].innerHTML += 4;
    // }

    // Второй способ
    for (let key in allDivOut4) {
        allDivOut4[key].innerHTML += 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна: 1. Получить все div.out-5 со страницы в массив a5. 2. Cоздать новые div.out-5 через createElement. Добавить с помощью push созданный div в массив a5.
// Поскольку для коллекций push запрещен - то данная операция должна вызывать ошибку. Убедитесь в этом. Чтобы экранировать ошибку и не дать ей влиять на работу документа в целом, применим try, catch.

function f5() {
    let a5 = document.querySelectorAll('.out-5');
    var newDiv = document.createElement('div');
    newDiv.classList.add('.out-5');

    try {
        a5.push(newDiv);
    }
    catch(error) {
        // если будет ошибка - то просто сообщим об этом в консоль, но код продолжит работать
        console.log(error);
    }
    console.log('already work');
}

document.querySelector('.b-5').addEventListener('click', f5);

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [ [1,2], [3,4], [5,6]];

function f6() {
    let out = document.querySelector('.out-6');
    let str = '';
    a6New = [];

    // Первый способ
    // for (let i = 0; i < a6.length; i++) {
        
    //     for (let j = 0; j < a6[i].length; j++) {
    //         a6New.push(a6[i][j]);
    //     }
    // }

    // for (let k = 0; k < a6New.length; k++) {
    //     str += `${a6New[k]} `
    // }

    // out.innerHTML = str;

    // Второй способ
    for (let key in a6) {

        // Можно сделать так
        // for (let key2 in a6[key]) {
        //     a6New.push(a6[key][key2]);
        // }

        // Но так мне больше нравиться
        for (let item of a6[key]) {
            a6New.push(item);
        }
    }

    // Тоже самое тут
    // for (let key3 in a6New) {
    //     str += `${a6New[key3]} `
    // }

    for (let item of a6New) {
        str += `${item} `
    }

    out.innerHTML = str;

}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}

let a7 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let aNew7 = {};

    for (let i = 0; i < a7.length; i++) {

        aNew7[a7[i].id] = a7[i].name;
    }

    a7 = aNew7;

    console.log(a7);
}

document.querySelector('.b-7').addEventListener('click', f7);


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [ 23, 45].

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let aNew8 = [];

    for (let i = 0; i < a8.length; i++) {
        aNew8.push(a8[i].id);
    }

    a8 = aNew8;

    console.log(a8);
}

document.querySelector('.b-8').addEventListener('click', f8);

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна выводить в out-9 самый большой индекс вложенных массивов в массив a9. В данном случае это 4.

let a9 = [ [4,3,2] , [2,5],  [0,0,0,0,0]];

function f9() {
    let out = document.querySelector('.out-9');
    let count = 0;

    for (let i = 0; i < a9.length; i++) {

        if (count + 1 < a9[i].length) {
            count = a9[i].length - 1;
        }
    }

    out.innerHTML = count;
}

document.querySelector('.b-9').addEventListener('click', f9);

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let aNew10 = {};
    
    for (let i = 0; i < a10.length; i++) {
        aNew10[a10[i]] = a10[i];
    }
    console.log(aNew10);
    return aNew10;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let out = document.querySelector('.out-11');
    let str = '';

    for (let key in a11) {

        if (a11[key] > 11) {

            str += `${a11[key]} `
        }
    }

    out.innerHTML = str;
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];

function f12() {
    let out = document.querySelector('.out-12');
    let str = '';

    for (let item of a12) {
        str += `${item} `
    }

    out.innerHTML = str;
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символам в out-13 через пробел.

let a13 = 'testone';

function f13() {
    let out = document.querySelector('.out-13');
    let str = '';

    for (let item of a13) {
        str += `${item} `
    }

    out.innerHTML = str;
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);

function f14() {
    let out = document.querySelector('.out-14');
    let str = '';

    for (let item of a14) {
        str += `${item} `
    }

    out.innerHTML = str;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).



function f15() {
    let allOuts = document.querySelectorAll('.out-15');

    for (let item of allOuts) {
        item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);