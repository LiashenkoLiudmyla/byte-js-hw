
/////// ПРАКТИКА......ЗАДАЧІ/////////

//  1  - Написати функцію для авторизації користувача з базавою валідацією даних

//  - логін та пароль повинні співпадати з слідуючими данними:
//   ADMIN
//   1q2w3e

//  -якщо користувач не ввів логін, показати йому повідомлення"ВВЕДІТЬ ЛОГІН"
//  і почати авторизацію спочатку, якщо ж не ввів пароль - показати "ВВЕДІТЬ ПАРОЛЬ",
//  і почати авторизацію спочатку

//  2  - Реалізувати функцію, яка буде відтворювати в консолі пірамідку заданою
//  користувачем висотою.

//     *
//    ***
//   *****
//  *******


//////////  1  \\\\\\\\\\\


const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const autorizade = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;

    do{
        userLogin = prompt("Логін: ");
if (!userLogin){
    alert("Ведіть логін: ");
    continue;
}
    userPassword = prompt("Пароль: ");
if (!userPassword){
    alert("Ведіть пароль: ");
    continue;
}

if (userLogin === LOGIN && userPassword === PASSWORD){ 
    isAuthSuccess = true;
}else{

    alert ("Данні введено не вірно");
    
}
}while (!isAuthSuccess);
alert ("Welcome");

};

autorizade ();






//////////  2  \\\\\\\\\\\

const drawPyramid = (height) =>{
    for (let i = 0; i < height; i++){
        let spacesBefor = "";
        let stars = "";
        for (let j = 0; j < 2 * i + 1; j++) {
            stars += "*";
        }
        for (let k = 0; k < height - i - 1; k++) {
            spacesBefor += " ";
        }
        console.log(spacesBefor + stars);
    }
};
const desiredHeight = Number(prompt("Яка висота ялинки"));
drawPyramid (desiredHeight);













 // пример на Java. класс while {public static void main (args []) {int n = 0; while (n <= 10) {n ++; system.out.println ("n =" + n); }}} 
 // вывод n = 1 n = 2 n = 3 n = 4 n = 5 n = 6 n = 7 n = 8 n = 9 n = 10 





// ЦИКЛИ LOOPS ТЕОРІЯ

// як працює лічильник

console.log("Цикл почав роботу");
for(let i = 0; i < 5; i++){
    console.log(`Лічильник і: `, i);
    console.log(`Умова ${i} < 5:` , i < 5);
}
console.log("Кінець циклy");

// вивести в консоль всі квадратні ступені числа 2 до 2048
for(let i = 2; i <= 2048; i = i * 2){
    console.log(`I = `, i);
}

// Піднесення числа до ступеня

for(let i = 0; i < 20; i++) {
    const power = 2 ** i;
    console.log(`Піднесення 2 до ступеня ${i} = ${power}`) // шаблонний запис
}

//універсальна з вводом чисел від користувача

let m = Number(prompt (`Введіть число  до якого чтупеня будемо підносити`));
let n = Number(prompt (`Введіть число, що підносимо n`));
for (i = 0; i < m; i++){
    const power = n ** i;
    console.log(`${n} в ступені ${i} = ${power}`)
}


// break зупинення циклу

const findFirstNumber = (start, finish, divider) => {
let targetNumber;
for(let i = start; i <= finish; i++) {
    console.log(`i`, i)
    if (i % divider === 0) {
        targetNumber = i;
        break;
    }
}

return targetNumber; 
}
const result = findFirstNumber(10, 50, 9)
console.log(`result`, result);

//  зупинення циклу без break через return

const findFirstNumber = (start, finish, divider) => {
       for(let i = start; i <= finish; i++) {
        console.log(`i`, i)
        if (i % divider === 0) {
            return i
        }
    }
    
    };
    const result = findFirstNumber(10, 50, 9)
    console.log(`result`, result);


   // CONTINUE

    // всі парні числа в проміжку, що задає користувач

    const showEventNumbers = (start, finish) => {
        for (let i = start; i <= finish; i++) {
            if (i % 2 !==0) {
                continue;
            }
            console.log(i);
        }
    };
    showEventNumbers (3, 33);

    // ВЛОЖЕНІ ЦИКЛИ

    //ТАБЛИЦЯ МНОЖЕННЯ

    for(let i = 1; i < 9; i++) {
        let row = "";
        for(let j = 1; j < 9; j++) {
            // console.log(`i, j`, i, j);
            row = row + (i * j) + "   ";
        }
        console.log(row);
    }



//ЦИКЛ ДУЖЕ ШВИДКО ПРАЦЮЄ (встроєна функція часу)

console.time(`Loop`);
for (let i = 0; i < 1000000000; i++) {
    const a = 2 * i;
}console.timeEnd(`Loop`);

// WHILE   DO WHILE

let i = 3;
while (i) {
    console.log("i", i);
    i--;
}


let name;
do {
    name = prompt ("ВВЕДІТЬ ІМ'Я: ");
    if (name === null) {
        break;
    }
    console.log( `name`, name);
}while ( !name);

