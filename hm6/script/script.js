
// Реализовать регистрацию пользователя c валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. 
// Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное 
// имя пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. 
// Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.
// Hints: вам может понадобится цикл do while, так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.



// Фу-ція, що перетворює імя в вірний формат
const upperCaseString = (userString) => {

    const firstSymbolString = (userString(0)).toUpperCase();
    const symbolsString = (userString.slice(1)).toLowerCase();
    return firstSymbolString + symbolsString;
}


// Фу-ція, що запитує і перевіряє імя

const userRegistrationName = () => {

    let userName

    do{userName = prompt(`Ведіть ім'я: `)
    
    if(!userName){
        alert (`Введіть хочаб один символ`)

    }else{
        break
    }

}while (true);

const upperCaseName = upperCaseString (userName)

return upperCaseName

};


// Фу-ція, що запитує і перевіряє прізвище
const userRegistrationLastName = () => {

    do{
        userLastName = prompt(`Введіть Ваше прізвище: `);

        if(!userLastName) {
            alert(`Введіть хочаб один строчний символ: `)

        }else{
            break
        }
    }while(true);
    const upperCaseLastName = upperCaseString(userLastName)
    return upperCaseLastName
  
}


// Фу-ція, що запитує і перевіряє пароль
const userRegistrationPassworrd = () => {

   let userPassword 


 do{

    
    userPassword = prompt(`Напишіть пароль (не менше ніж 6 символів, що складається з символів різного регисту)`)
  
    if(!userPassword || userPassword.length < 6){

        alert (`Введіть не менше 6 символів`)

    }else if((!isNaN(userPassword)) || (userPassword.toLowerCase() === userPassword) || (userPassword.toUpperCase() === userPassword)){
        // userPassword.toLowerCase() === userPassword - перевірка строгого порівняння
        // userPassword.toLowerCase() - функція для того щоб привести введену строчку до нижнього реєстру
        // userPassword.toLowerCase() === userPassword -  приведена строка до нижного реєстра ===  паролю, що ввів користувач
        alert (`Не коректний пароль`)
        break
    }

}while(true)
return userPassword
}


const resName = userRegistrationName();
const resLastName = userRegistrationLastName();
const resPassword = userRegistrationPassworrd();


alert (`Ви зареєстровані під імям:  ${resName} ${resLastName} Ваш пароль:  ${resPassword}`);


//АЛЬТЕРНАТИВНЕ РІШЕННЯ TASK1

const askUserData = () => {
    let userName
    let userSurName
    let itsNotOkey = true

    do{
         userName = promot(`Ведіть імя`)
         userSurName = promot(`Введіть прізвище`)
         userPassword = promot(`Введіть пароль`)

         itsNotOkey = validateData(userName, userSurName, userPassword )

        

    }while(itsOkey)
        
}
askUserData()

// Задание 2
// Реализовать функцию - генератор случайных чисел в заданном промежутке

// Функция должна принимать на вход 2 числа, которые являются границами промежутка.
// Функция должна возвращать случайное число, которое большое или равно меньшего числа и меньше или равно большего.

// const getRandomNumber = (min, max) => {
//     const random = min + Math.random(min) * (max + 1 - min);
//     return Math.floor(random);
// };
// const resRandom = getRandomNumber(3, 30);
// console.log(resRandom);






