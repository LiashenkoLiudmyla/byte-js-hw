
//  ПЕРШЕ ЗАВДАННЯ

// const a = 5;
// const b = 10;

// result = a + b;
// console.log(`a + b =`, result);

// result = a - b;
// console.log(`a - b =`, result);

// result = a * b;
// console.log(`a * b =`, result);

// result = a / b;
// console.log(`a / b =`, result);



const a = 5;
const b = 10;
const getSum = a + b;
const getDifference = a - b;
const getMultiplication = a * b;
const getDivision = a / b;


console.log(`getSum`, getSum);
console.log(`getDifference`, getDifference);
console.log(`getMultiplication`, getMultiplication);
console.log(`getDivision`, getDivision);







// ДРУГЕ ЗАВДАННЯ (КОНСОЛЬ НЕ ВКЛЮЧАЛА І НА ВІРНІСТЬ НЕ ПЕРЕВІРЯЛА)))

// true && true                               true 
// false || true                              true 
// true && 'false'                            false 
// 0 && 1 || ' ' && 42                        '  '  тут не згодна, що передає 42
// null == undefined                          true
// '' == 0                                    true
// 1 === '1'                                  false
// NaN === NaN && true                        false
// true || false && true || false             true
// (true || false) && (true || false)         true
// 10 || 0 && 'dog' || ''                     10
// (10 || 0) && ('dog' || '')                 dog




// ТРЕТЄ ЗАВДАННЯ


const num1 = prompt("Enter any number");
//  console.log(`num1`, num1); 

const num2 = prompt("Enter any number-2");
//  console.log(`num2`, num2);

if(num1 > num2){
    alert(`num1 більше ніж num2`)
}else if(num1 === num2){
    alert(`числа рівні`)
}else{
     alert(`num1 менше ніж num2`)
}



// ТЕОРІЯ


// ALERT -ПОКАЗУЄ ПОВІДОМЛЕННЯ КОРИСТУВАЧУ

// alert("Hello")
// alert(42)
// const userName = prompt ("what is your name?")
// console.log(`userName`,userName);

// alert("Привіт! " + userName + "!")



// PROMPT ОТРИМУЄ ПОВІДОМЛЕННЯ КОРИСТУВАЧА , тобто є строка для ввода інформації від користувача

// let userMoneyAmount = 500;

// const amountToAdd = Number(prompt("How much to add?(скільки ти хочеш додати грошей)"));
// userMoneyAmount = userMoneyAmount + amountToAdd;

// alert("Now in your wallet(тепер у твоєму гаманці): " + userMoneyAmount);

// CONFIRM ПІДТВЕРДЖЕННЯ, тобто повертає буліновське значення truu-ok false-cancel


// const isAdmin = confirm("Are you admin (ти адмін?)");
// console.log(`isAdmin`, isAdmin);

// if (isAdmin) {
//     alert("Welcome!");
// }



// const userNickName = prompt("Your nickname?");
// const userAge = prompt("How old are you?");

// const isConfirmed = confirm(
//     `Are you really ${userNickName}, ${userAge} years old?`
// );

// if (isConfirmed) {
//     alert("Your data saved!");
// }

// const num1 = 10;
// const num2 = 3;
// let operationResult;
// operationResult = num1 + num2;
// console. log("10+3=", operationResult);

// let result;
// result = 2 + 3 - 1;
// console.log(result);

// console.log(9 >= 11);