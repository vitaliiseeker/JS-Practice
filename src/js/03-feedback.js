import throttle from 'lodash.throttle';

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// const date1 = new Date(2030, 2, 16);
// const date2 = new Date();
// console.log(date);
// console.log(date1);

// const int = setInterval(() => {
//   console.log(Date());
//   // console.log(Date().getTime());
// }, 2000
// );


// HTML містить розмітку форми.Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// < form class="feedback-form" autocomplete = "off" >
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form >

//   Виконуй це завдання у файлах 03 - feedback.html і 03 - feedback.js.Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
