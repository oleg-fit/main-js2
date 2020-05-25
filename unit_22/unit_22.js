
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
let count1 = 0;

function t1() {
    let out = document.querySelector('.out-1');

    count1++;

    out.innerHTML = count1;
}

document.querySelector('.div-1').onclick = t1;
// Тут отслеживаем события нажатия левой кнопки мыши

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */
let count2 = 0;

function t2() {
    let out = document.querySelector('.out-2');

    count2++;

    out.innerHTML = count2;
}

document.querySelector('.div-2').ondblclick = t2;
// Тут отслеживаем события двойного нажатия левой кнопки мыши

// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */
let count3 = 0;

function t3() {
    let out = document.querySelector('.out-3');

    count3++;

    out.innerHTML = count3;
}

document.querySelector('.div-3').onmousemove = t3;
// Тут отслеживаем события движения мыши внутри блока .div-3


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */
let count4 = 0;

function t4() {
    let out = document.querySelector('.out-4');

    count4++;

    out.innerHTML = count4;
}

document.querySelector('.div-4').oncontextmenu = t4;
// Тут отслеживаем события нажатия правой кнопки мыши

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */
let count5 = 0;

function t5() {
    let out = document.querySelector('.out-5');

    count5++;

    out.innerHTML = count5;
}

document.querySelector('.div-5').onmousedown = t5;
// Тут отслеживаем события нажатия кнопки мыши, в момент НАЖАТИЯ на кнопку

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */
let count6 = 0;

function t6() {
    let out = document.querySelector('.out-6');

    count6++;

    out.innerHTML = count6;
}

document.querySelector('.div-6').onmouseenter = t6;
// Тут отслеживаем события наведения курсора мыши на блоке div-6

// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/
let count7 = 0;

function t7() {
    let out = document.querySelector('.out-7');

    count7++;

    out.innerHTML = count7;
}

document.querySelector('.div-7').onmouseleave = t7;
// Тут отслеживаем события когда курсор мыши покинет блок div-7

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/
let count8 = 0;

function t8() {
    let out = document.querySelector('.out-8');

    count8++;

    out.innerHTML = count8;
}

document.querySelector('.div-8').onmouseout = t8;
// Тут отслеживаем события когда курсор мыши покинет блок div-8

// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */
let count9 = 0;

function t9() {
    let out = document.querySelector('.out-9');

    count9++;

    out.innerHTML = count9;
}

document.querySelector('.div-9').onmouseover = t9;
// Тут отслеживаем события при наведении курсора мыши на блок div-9

// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/
let count10 = 0;

function t10() {
    let out = document.querySelector('.out-10');

    count10++;

    out.innerHTML = count10;
}

document.querySelector('.div-10').onmouseup = t10;
// Тут отслеживаем события нажатия кнопки мыши, в момент ОТЖАТИЯ кнопки
