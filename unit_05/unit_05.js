//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let maxNumTask1 = 50;
    let outTask1 = document.querySelector('.out-1');

    for (let i = 0; i <= maxNumTask1; i++) {
        outTask1.innerHTML += i + ' ';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2() {
    let maxNumTask2 = 122;
    let outTask2 = document.querySelector('.out-2');

    for (let i = 0; i <= maxNumTask2; i +=2) {
        outTask2.innerHTML += i + ' ';
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

function t3() {
    let minNumTask3 = 7;
    let maxNumTask3 = 25;
    let outTask3 = document.querySelector('.out-3');

    for (let i = maxNumTask3; i >= minNumTask3; i--) {
        outTask3.innerHTML += i + ' ';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.


function t4() {
    let minNumTask4 = 35;
    let maxNumTask4 = 77;
    let outTask4 = document.querySelector('.out-4');

    for (let i = maxNumTask4; i >= minNumTask4; i -= 3) {
        outTask4.innerHTML += i + '_';
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

function t5() {
    let minNumTask5 = 1;
    let maxNumTask5 = 17;
    let outTask5 = document.querySelector('.out-5');

    for (let i = minNumTask5; i <= maxNumTask5; i++) {
        if (i % 2 == 0) {
            outTask5.innerHTML += i + '_**';
        } else {
            outTask5.innerHTML += i + '_*';
        }
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла вводит пользователь в i-6.

function t6() {
    let outTask6 = document.querySelector('.out-6');
    let inputTask6 = document.querySelector('.i-6');
    outTask6.innerHTML = ' ';

    for (let i = 0; i < inputTask6.value; i++) {
        outTask6.innerHTML += '******' + '<br>'
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла.

function t7() {
    let outTask7 = document.querySelector('.out-7');
    let inputTask7 = document.querySelector('.i-7');
    outTask7.innerHTML = ' ';

    for (let i = inputTask7.value; i >= 0; i--) {
        outTask7.innerHTML += i + ' ';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

function t8() {
    let outTask8 = document.querySelector('.out-8');
    let inputTask81NumMin = document.querySelector('.i-81');
    let inputTask82NumMax = document.querySelector('.i-82');
    outTask8.innerHTML = ' ';

    for (let i = inputTask81NumMin.value; i <= inputTask82NumMax.value; i++) {
        outTask8.innerHTML += i + ' ';
    }
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

function t9() {
    let outTask9 = document.querySelector('.out-9');
    let inputTask91Num = document.querySelector('.i-91');
    let inputTask92Num = document.querySelector('.i-92');
    outTask9.innerHTML = ' ';

    if (inputTask91Num.value < inputTask92Num.value) {

        for (let i = inputTask91Num.value; i <= inputTask92Num.value; i++) {
            outTask9.innerHTML += i + ' ';
        }
    } else {

        for (let i = inputTask92Num.value; i <= inputTask91Num.value; i++) {
            outTask9.innerHTML += i + ' ';
        }
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let startYear = 1950;
    let finithYear = 2000;
    let outTask10 = document.querySelector('.out-10');
    outTask10.innerHTML = ' ';

    for (let i = startYear; i <= finithYear; i += 2) {
        outTask10.innerHTML += i + ' ';
    }
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
    let allDivTask11 = document.querySelectorAll('.div-11');
    let outTask11 = document.querySelector('.out-11');
    outTask11.innerHTML = ' ';

    for (let i = 0; i < allDivTask11.length; i++) {
        outTask11.innerHTML += allDivTask11[i].textContent + ' ';
    }
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
    let allDivTask12 = document.querySelectorAll('.div-12');

    for (let i = 0; i < allDivTask12.length; i++) {
        allDivTask12[i].style.background = 'orange';
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let allInputsTask13 = document.querySelectorAll('.i-13');

    for (let i = 0; i < allInputsTask13.length; i++) {
        allInputsTask13[i].value = i + 1;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let allInputsTask14 = document.querySelectorAll('.i-14');
    let outTask14 = document.querySelector('.out-14');

    for (let i = 0; i < allInputsTask14.length; i++) {
        if (allInputsTask14[i].checked == true) {
            outTask14.innerHTML = allInputsTask14[i].value;
        }
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

function t15() {
    let minNumTask15 = 0;
    let maxNumTask15 = 10;
    let outTask15 = document.querySelector('.out-15');
    
    for (let i = maxNumTask15; i >= minNumTask15; i--) {
        outTask15.innerHTML += i + ' ' + (maxNumTask15 - i) + ' ';
    }
}

document.querySelector('.b-15').onclick = t15;
