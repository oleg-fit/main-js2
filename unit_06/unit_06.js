//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1 () {
    let out1 = document.querySelector('.out-1');
    out1.innerHTML = ' ';

    for (let i = 1; i <=  3; i++) {
    
        for(let j = 1; j <= 3; j++) {
            out1.innerHTML += '*';
        }

        out1.innerHTML += '_';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

function t2 () {
    let out2 = document.querySelector('.out-2');
    out2.innerHTML = ' ';

    for (let i = 1; i <=  3; i++) {
        out2.innerHTML += i + '<br>';

        for (let j = 1; j <= 6; j++) {

            if (j % 2 == 0){
                out2.innerHTML += '_';
            } 
            else {
                out2.innerHTML += '*';
            }
        }

        out2.innerHTML += '<br>';
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3 () {
    let out3 = document.querySelector('.out-3');
    out3.innerHTML = ' ';

    for (let i = 1; i <=  4; i++) {

        for (let j = 1; j <= 6; j++) {

            if (j % 2 == 0){
                out3.innerHTML += '_';
            } 
            else {
                out3.innerHTML += '*';
            }
        }
        
        out3.innerHTML += '<br>';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

function t4 () {
    let out4 = document.querySelector('.out-4');
    out4.innerHTML = ' ';

    for (let i = 1; i <=  3; i++) {
        out4.innerHTML += i + '_';

        for (let j = 1; j <= 5; j++) {
            out4.innerHTML += j + ' ';
        }
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

function t5 () {
    let out5 = document.querySelector('.out-5');
    out5.innerHTML = ' ';

    for (let i = 1; i <=  3; i++) {
        
        for (let j = 1; j <= 6; j++) {

            if (j % 2 == 0){
                out5.innerHTML += 0;
            } 
            else {
                out5.innerHTML += 1;
            }
        }

        out5.innerHTML += '<br>';
    }

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

function t6 () {
    let out6 = document.querySelector('.out-6');
    out6.innerHTML = ' ';

    for (let i = 1; i <=  3; i++) {
        
        for (let j = 1; j <= 6; j++) {

            if (j % 2 == 0){
                if (j % 3 == 0) {
                    out6.innerHTML += 'x';
                }
                else {
                    out6.innerHTML += 0;
                }
            } 

            else {
                if (j % 3 == 0) {
                    out6.innerHTML += 'x';
                }
                else {
                    out6.innerHTML += 1;
                }
            }
        }
        
        out6.innerHTML += '<br>';
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

function t7() {
    const out7 = document.querySelector('.out-7');
    out7.innerHTML = ' ';

    for (let i = 1; i <=  4; i++) {
        
        for (let j = 1; j <= 4; j++) {
            
            if (j <= i) {
                out7.innerHTML += '*';
            }
            else {
                out7.innerHTML += '&nbsp';
            }
        }
        
        out7.innerHTML += '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

function t8() {
    let out8 = document.querySelector('.out-8');
    out8.innerHTML = ' ';

    for (let i = 1; i <=  5; i++) {
        
        for (let j = 1; j <= 5; j++) {
            
            if (j <= 5 - i + 1) {
                out8.innerHTML += '*';
            }
            else {
                out8.innerHTML += '&nbsp';
            }
        }
        
        out8.innerHTML += '<br>';
    }

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

function t9 () {
    let out9 = document.querySelector('.out-9');
    out9.innerHTML = ' ';

    for (let i = 1; i <= 5; i++) {

        for (let j = 1; j <= i; j++) {
            out9.innerHTML += ` ${j}`;
        }

        out9.innerHTML += ' <br>';
    }

}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

function t10() {
    const out10 = document.querySelector('.out-10');
    out10.innerHTML = ' ';

    for (let i = 0; i <= 4; i++) {

        for (let j = 1; j <= 10; j++) {
            
            if (j === 10) {
                out10.innerHTML += ' ' + (i + 1) + '0';
            }
            else {
                out10.innerHTML += ` ${i}${j}`;
            }
        }

        out10.innerHTML += ' <br>';
    }
}

document.querySelector('.b-10').onclick = t10;