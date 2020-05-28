
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
 let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)

        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-1');

        out.innerHTML = myData;
    }

}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Oleg');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-2');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=5&num2=5');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-3');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=1&num2=25');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-4');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-5');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=1&num2=25');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-6');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-7');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1987');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-8');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=9&year=1987&m=1&d=1&y=1');
    xhttp.send();

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-9');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=1');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-10');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=oleg');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=2&name=oleg');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-11');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=1&num2=25');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=3&num1=1&num2=25');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-12');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=1&num2=25');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=4&num1=1&num2=25');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-13');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=5');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-14');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-14').onclick = t14;

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=1&num2=25');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=6&num1=1&num2=25');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-15');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=7');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-16');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1987');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=8&year=1987');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-17');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }

    xhttp.open('POST', 'http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1');

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send('auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1');

    function myFunction(data) {
        let myData = data;
        const out = document.querySelector('.out-18');

        out.innerHTML = myData;
    }
}

document.querySelector('.b-18').onclick = t18;

