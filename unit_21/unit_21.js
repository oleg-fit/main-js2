
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    let out1 = document.querySelector('.out-1');

    out1.innerHTML += 'touch ';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2() {
    let out2 = document.querySelector('.out-2');

    out2.innerHTML = +out2.innerHTML + 1;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
// ========================================
function t3(event) {
    let out3 = document.querySelector('.out-3');
    let target = event.target;

    if (target.classList.contains('div-3_1')) {
        out3.innerHTML += 1 + ' ';
    } 
    else {
        out3.innerHTML += 2 + ' ';
    }
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    let out4 = document.querySelector('.out-4');

    out4.innerHTML += 'touch ';
}

document.querySelector('.b-4').onclick = function () {
    let div4 = document.querySelector('.div-4');

    div4.addEventListener('touchstart', t4);
}


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    let div4 = document.querySelector('.div-4');

    div4.removeEventListener('touchstart', t4);
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    let out6 = document.querySelector('.out-6');

    out6.innerHTML += 'touchend ';
}

document.querySelector('.div-4').addEventListener('touchend', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    let div7 = document.querySelector('.div-7');

    div7.style.background = 'red';
}

document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
    let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
    let div8 = document.querySelector('.div-8');

    div8.style.background = a8[Math.floor(Math.random() * a8.length)];
}

document.querySelector('.div-8').addEventListener('touchstart', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    let out9 = document.querySelector('.out-9');

    out9.innerHTML = event.touches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w10 =75;

function t10() {
    let div10 = document.querySelector('.div-10');

    w10++;
    div10.style.width = w10 + 'px';
}

document.querySelector('.div-10').addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    let out11 = document.querySelector('.out-11');

    out11.innerHTML = 'radiusX = ' + event.changedTouches[0].radiusX + ' ' + 'radiusY = ' + event.changedTouches[0].radiusY;
}

document.querySelector('.div-11').addEventListener('touchstart', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
const imgBig = document.querySelector('.img-12-max');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function calculatImageNumber () {
    pictureNumber = count + 1;
    imgBig.src = 'img/' + pictureNumber +'.png';
}

function nextFunction() {
    images[count].className = 'img-12-min';
    count = (count+1)%images.length;
    images[count].className = 'img-12-min active-img';

    calculatImageNumber();
}

function prevFunction() {
    images[count].className = 'img-12-min';
    count = (count-1);

    if (count < 0) {
        count = images.length - 1;
    } 

    images[count].className = 'img-12-min active-img';

    calculatImageNumber();
}

function resetFunction() { 
    for (let i = 0; i < images.length; i++ ) {

        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
        };
    };

    count = 0;
    images[count].className = 'img-12-min active-img';

    calculatImageNumber();
}
