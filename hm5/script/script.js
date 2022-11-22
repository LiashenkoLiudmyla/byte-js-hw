//Задание 1
// Используя разные типы циклов (for, while и do while) выведите в консоль числа в промежутке от 1 до 10. 
// Потренируйтесь, и с помощью этих же циклов выведите числа от 20 до 10, в порядке уменьшения.




// for (let i = 1; i <= 10; i++){
//     console.log( `Число і:`, i);
// }


// for (let i = 20; i >= 10; i--){
//     console.log( `Число і:`, i);
// }


// const enterNumberStart = n = prompt("введіть число старту: ")
// const enterNumberFinish = m = prompt("введіть число фінішу: ")

//     for (let i = n; i < m; i++){
//     console.log( `Число і:`, i);
// }



// let i = 1;
// while (i <= 10) { 
// console.log (`i  `, i);
//   i++;
// }



// let i = 20;
// while (i) {
// console.log (`i  `, i);
//   i--;
//   if(i == 9) 
//   break;
// }

// let i = 20;
// do {
 
//    i -=1;
//    console.log (`i  `, i); 
// }
// while (i > 10) {
// }



// let i = 0;
// do {
 
//    i +=1;
//    console.log (`i  `, i); 
// }
// while (i < 10) {
// }











// Задание 2
// Вывести простые числа в заданном промежутке





// const enterNumberStart = m = Number(prompt("введіть число старту: "))
// const enterNumberFinish = n = Number(prompt("введіть число фінішу: "))

// for (let i = m; i <= n; i++) {

// for (let j = 2; j <= i; j++) {

// if (i / j == 1) {
// console.log(i);
// break;
// } else if (i % j == 0) {
// break;
// } else {
// continue;
// }
// }
// }




  // let n = 100;

  // for (let i = 2; i <= n; i++) {
  
  // for (let j = 2; j <= i; j++) {
  
  // if (i / j == 1) {
  // console.log(i);
  // break;
  // } else if (i % j == 0) {
  // break;
  // } else {
  // continue;
  // }
  // }
  // }
        
    // }




// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log (i); // простое число
// }



// Задание 3* (опциональное)
// Дополнить классную работу счетчиком количества попыток

// Пользователь иммет только 3 попытки авторизации. Попробуйте разные варианты реализации, через цикл for и цикл while. 
// отправьте на проверку более элегантный по вашему мнению вариант.

// При использовании каждой попытки пользователю должен показываться alert с сообщением об оставшемся количесве попыток


const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const autorize = () => {
let userPassword;
let userLogin;
let isAuthSuccess = false;
let i = 3;
do {
    userLogin = prompt('Login: ');
    if (!userLogin) {
    alert ('Enter LOGIN');
    continue;
  } 
 
    userPassword = prompt('Password');
    if(!userPassword) {
    alert ('Enter PASSWORD');
    continue;
  }
 
  if (userLogin === LOGIN && userPassword === PASSWORD) {
  isAuthSuccess = true;
   
  }else{
    
    while (i){
      alert(`ERROR. У Вас залишилося спроб: ${i-1}`);
      i--;
      { break;}
    }
    while (i === 0){
      alert(`ERROR. Спробуйте пізніше`);
      
      { break;}
    }
                
    }

}while(!isAuthSuccess);
alert ('WELCOME');
};
autorize();

