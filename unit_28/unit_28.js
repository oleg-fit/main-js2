 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

 let myGoods = new Goods ('Mike', '100');
 console.log(' myGoods.creatGoods(): ',  myGoods.creatGoods());
 
 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 //Сделано
 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

 //Сделано
 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let myGoods2 = new Goods ('Name', 5, 'img/1.png', 3, '.out-4', '2000руб');
myGoods2.draw();

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

 //Сделано
  
 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

 let myGoods3 = new Goods2 ('Name', 5, 'img/2.png', 3, '.out-6', '2000руб', true);
 myGoods3.draw();

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

 //Сделано

 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 let myValid = new Valid ('Name', 'qwewr');
 myValid.validate();

 console.log(' myValid.isValid: ',  myValid.isValid);

 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 let myValid2 = new Valid ('Name', 'qwewrQW');
 myValid2.validate();

 console.log(' myValid2.isValid: ',  myValid2.isValid);

 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  
//Сделано

 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 let myValid3 = new Valid2 ('', 'qwewr3123', );
 myValid3.validate();

 console.log(' myValid3.isValid: ',  myValid3);
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 let myValid4 = new Valid2 ('name', 'qwewr3123', );
 myValid4.validate();

 console.log(' myValid4.isValid: ',  myValid4);