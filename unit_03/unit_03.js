// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

function f1(){
    const a = 4;
    let out  = document.querySelector('.out-1');
    let inputTask1 = document.querySelector('.i-1');
    let inputTask1Value = +inputTask1.value;

    if (a == inputTask1Value) {
        out.innerHTML = 'true';
    }
    else {
        out.innerHTML = 'false';
    }
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;

function f2(){
    let out = document.querySelector('.out-2');

    if (a21 > a22) {
        out.innerHTML = a21;
    }
    else {
        out.innerHTML = a22;
    }
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-31 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3(){
    let out = document.querySelector('.out-3');
    let inputNum1 = document.querySelector('.i-31');
    let inputNum2 = document.querySelector('.i-32');
    let inputNum1Value = +inputNum1.value;
    let inputNum2Value = +inputNum2.value;

    if (inputNum1Value > inputNum2Value) {
        out.innerHTML = inputNum1Value;
    }
    else {
        out.innerHTML = inputNum2Value;
    }
}

document.querySelector('.b-3').onclick = f3;

// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4(){
    let out = document.querySelector('.out-4');
    let inputYearOfBirth = document.querySelector('.i-4');
    let inputYearOfBirthValue = +inputYearOfBirth.value;
    let nowYear = 2020;
    let age = nowYear - inputYearOfBirthValue;
    const checkAge = 18;

    if (age > checkAge) {
        out.innerHTML = 1;
    }
    else {
        out.innerHTML = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

function f5(){
    let out = document.querySelector('.out-5');
    let inputNum = document.querySelector('.i-5');
    let num = +inputNum.value;

    if (num < 0) {
        out.innerHTML = 'm';
    }
    else if (num == 0) {
        out.innerHTML = 0;
    }
    else {
        out.innerHTML = 1;
    }
}

document.querySelector('.b-5').onclick = f5;

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6(){
    let out = document.querySelector('.out-6');
    let inputNum = document.querySelector('.i-6');
    let num = +inputNum.value;
    let divisionRemainder = num % 2;

    if (divisionRemainder == 0) {
        out.innerHTML = 'even';
    }
    else {
        out.innerHTML = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7(){
    let out = document.querySelector('.out-7');
    let inputNum1 = document.querySelector('.i-71');
    let inputNum2 = document.querySelector('.i-72');
    let inputNum1Value = +inputNum1.value;
    let inputNum2Value = +inputNum2.value;
    let b = inputNum1Value ** inputNum2Value;

    out.innerHTML = b;
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8(){
    let out = document.querySelector('.out-8');
    var selectNum = document.querySelector('.s-8');
    var selectNumValue = selectNum.value;

    switch (selectNumValue) {
        case '1':
            out.innerHTML = 'one';
            break;
        case '2':
            out.innerHTML = 'two';
            break;
        case '3':
            out.innerHTML = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

function f9(){
    let inputFlatNumber = document.querySelector('.i-9');
    let inputFlatNumberVaulue = +inputFlatNumber.value;
    let out = document.querySelector('.out-9');

    if (inputFlatNumberVaulue >= 1 && inputFlatNumberVaulue <= 32) {
        out.innerHTML = 1;
    }
    else if (inputFlatNumberVaulue >= 33 && inputFlatNumberVaulue <= 43) {
        out.innerHTML = 2;
    }
    else if (inputFlatNumberVaulue >= 44 && inputFlatNumberVaulue <= 64) {
        out.innerHTML = 3;
    }
    else {
        out.innerHTML = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит две операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

function f10(){
    let inputNum1 = document.querySelector('.i-101');
    let inputNum2 = document.querySelector('.i-102');
    let inputNum1Value = +inputNum1.value;
    let inputNum2Value = +inputNum2.value;
    var select = document.querySelector('.s-103');
    var selectValue = select.value;
    let out = document.querySelector('.out-10');
    
    switch (selectValue) {
        case '+':
            out.innerHTML = inputNum1Value + inputNum2Value;
            break;
        case '-':
            out.innerHTML = inputNum1Value - inputNum2Value;
            break;
        case '*':
            out.innerHTML = inputNum1Value * inputNum2Value;
            break;
        case '/':
            out.innerHTML = inputNum1Value / inputNum2Value;
            break;
    }
}

document.querySelector('.b-10').onclick = f10;

// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f11(){
    var select1 = document.querySelector('.s-111');
    var select2 = document.querySelector('.s-112');
    var select3 = document.querySelector('.s-113');
    var select1Value = select1.value;
    var select2Value = select2.value;
    var select3Value = select3.value;
    let out = document.querySelector('.out-11');

    switch (select3Value) {
        case '&&':
            out.innerHTML = select1Value && select2Value;
            break;
        case '||':
            out.innerHTML = select1Value || select2Value;
            break;
    }
}

document.querySelector('.b-11').onclick = f11;
