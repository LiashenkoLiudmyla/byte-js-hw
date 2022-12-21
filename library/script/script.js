const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
  {
    id: 5,
    author: "Достоевский",
    name: "Преступление и наказание",
    isReading: false,
  },
];

// Реализовать приложение, которое будет иммитировать терминал в библиотеке.
// Пользователь сможет:
// - взять любую уже существующую в базе книгу
// - сдать книгу назад в библиотеку
// - принести свою книгу и добаить ее в базу данных

// База данных - массив книг, которые сожержатся в библиотеке

// Свойства книги(модель):
// - id: уникальный идентификатор
// - author
// - name
// - isReading: содержит информацию о том, доступна ли книга

// Взять книгу:
// - пользователь вводит название книги, при этом ему показывается список
//   доступных
// - алгоритм должен проверить следующие параметры:
//   - есть ли вообще такая книга в наличии
//   - доступна ли она сейчас (isReading)
// - если проверка прошла, то выдать книгу пользователю,
//   изменив ее статус isReading на true и сообщив ее идентификатор

// - если нет то сказать пользователю почему он не может взять книгу:
//   - либо ее нет в базе данных
//   - либо ее сейчас читает кто-то другой

// Вернуть книгу:
//  - пользователь вводит идентификатор книги, которую хочет вернуть
//  - проверяем, существует ли книга с таким айди в базе данных
//  - если да, книга в базе данных меняет свой статус на isReading: false
//  - если нет - сообщаем что книги с таким айди не существует

// Добавить книгу:
//  - пользователь поочердно вводит данные книги: Автора и Название
//  - книге присваивается уникальный идентификатор и она добавляется в базу
//    данных со статусом isReading: false
//  - сообщаем пользователю о том, что книга успешно добавлена


// БАЗОВА Ф-ЦІЯ

function library() {
  let action = prompt (`Вкажіть свої дії: 
  <<take>>   - взяти книгу, 
  <<return>> - повернути книгу, 
  <<add>>    - додати нову книгу`);
  if (action === null) { //перевірка на коректне натискання
    alert (`Bye!`);
    return;
  }
  action = action.toLowerCase().trim() //усі літери після вводу робимо малими і обрфзаємо всі пробіли, на випадок якщо користувач вводе великими чи малими літерами і вводе пробіли не там де треба

 switch (action) {
  case "take":
    takeBook();
    break;

  case "return":
    returnBook();
    break;

  case "add":
  addBook();
  break;
  default: alert ("No action!");
 }

}

// робимо ф-цію щоб взяти книгу з бази по пошуку назви

const takeBook = () => {
  console.log("take");

  const avialableBooksNames = books // avialableBooksNames- бажана книга її назва
  .filter((book) => !book.isReading) // перевіряємо чи вона в доступі, чи її ніхто не читає
  .map((book) => `-${book.name}`) // робимо новий масив для показу користувачу через шаблонну строку `-${book.name}`
  .join("\n"); // щоб гарно виглядало виводимо масив строчкою і заджоніли з нової строки

  let desiredBookName = prompt (`Enter book name: \n ${avialableBooksNames}`); // щоб користувач ввів назву бажаної книги зі списку що вказується та присвоїти їй змінну

  if (!desiredBookName) { // перевіряємо на коректність вводу користувачем
    alert (`No book name`);

    return;
  }

  //Далі робимо перевірку, чи існує така книга у нас вбазі взагалі

  desiredBookName = desiredBookName.trim().toLowerCase() // для коректного пошуку приводимо все в ниєній регістр та без пробілів, так само як і після ввода користувачем, щоб пошук був чистим

  const desiredBook = books.find((book) => { // метод перевіряє чи співпаде в нас назва з бажаною і в базі якщо так то .find поверне назву якщо ні то undefinedі спрацює if(!desiredBook) {
   
    return book.name.toLowerCase() === desiredBookName 
  });

  if(!desiredBook) { // перевірка на співпадання імя бажаної книги і в базі
    alert (`No book whith this name`);

    return;

  }

  if (desiredBook.isReading) { // перевірка чи книга читається чи доступна для читання якщо isReading=falce ми можемо взяти її читати тобто її ніхто не читає
    alert (`sorry? this book is reading by some one else`);

    return;
  }

  desiredBook.isReading = true; // всі перевірки пройшли знайшли цю книгу взяли читати і відразу міняємо статус на те що вона читається isReading = true тобто правда що її читають
  alert (`Thnx! You book id is ${desiredBook.id}`); // показуємо читачу яку має id через шаблонну строку ${desiredBook.id} щоб потім її повернути

};

// ПИШЕМО МЕТОД НА ПОВЕРТАННЯ КНИГИ

const returnBook = () => {
const returnBookId = Number(prompt (`Enter book id: `));// введене число привели до числа намбер бо айдішка завжди число

if (!returnBookId) { // перевіряємо що ввів користувач, взагалі це айді?
  alert (`No book id`);

  return;

}
 const currentBook = books.find((book) => book.id === returnBookId); // перевіряємо через .find чи існує взагалі така книга з таким айді в базі якщо тру повертає нам айді якщо андефацнд скаже  `Invalid id book`
 if (! currentBook) {
  alert(`Invalid id book`);

  return;

 }
 if (!currentBook.isReading) { // перевіряємо статус книги на читання якщо в неї фолс то ви не можите її повернути, бо її ніхто не читає зараз
  alert (`This book is not reading now`);

  return;

 }
 currentBook.isReading = false; // усі перевіки пройшли тепер треба присвоїти цій книзі що її ніхто не читає, що вона в доступі для читання
 alert (`Thanks, come again! Do you like
 ${currentBook.name}?`);

};

// ПИШЕМО Ф-ЦІЮ ДЛЯ ДОДАВАННЯ НОВОЇ КНИГИ

const addBook = () => {
const name = prompt (`Enter book name`);

const author = prompt (`Enter book author`);

const newBook = {
  name,
  author,
  isReading: false,
  id: generateBookId(),
}

books.push(newBook);
alert (`Book was added! Library id: ${newBook.id}`);

};

// ПИШЕМО Ф-ЦІЮ ГЕНЕРАТОР  УНІКАЛЬНОГО ID

function generateBookId(){
  let isBookWithIdExists = true;
  let generateBookId;

  do {
    generateBookId = Math.ceil(Math.random()*1000);
    isBookWithIdExists = Boolean(books.find((book) =>  book.id === generateBookId))

  }while (isBookWithIdExists);

  return generateBookId;


};


