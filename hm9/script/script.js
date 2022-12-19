
// 1.1
// С помощью метода массива map преобразуйте массив чисел в массив булевых значений.
// Принцип преобразования следующий: если число больше 0, в итоговый массив записывается true, если меньше - false.

const arrayNumbers = [1, 2, -10, -2, 7]
const arrayBoolen = arrayNumbers.map(x => x > 0 ? true : false);
console.log(arrayBoolen);

// 1.2
// Дан массив пользователей (в примере ниже)

// Напишите функцию, которая с помощью комбинации методов массива filter и map 
// будет возвращать массив имен взролых (старше 18 лет) 
// администраторов (role === 'admin').

const users = [
  {
    name: 'Sam',
    role: 'admin',
    age: 25,
  },
    {
    name: 'Peter',
    role: 'admin',
    age: 16,
  },
    {
    name: 'Pablo',
    role: 'admin',
    age: 32,
  },
    {
    name: 'Enrico',
    role: 'client',
    age: 43,
  },
    {
    name: 'Mary',
    role: 'client',
    age: 34,
  },
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
  },
]

const everyAdmins = users
    .filter(users => users.role === 'admin')
// console.log(everyAdmins);
const adultAdmins = everyAdmins
    .filter(everyAdmins => everyAdmins.age >= 18);
// console.log(adultAdmins);
const nameAdmin = adultAdmins
    .map(adultAdmins => adultAdmins.name);
    console.log(nameAdmin);

       


// 1.3
// Дан массив чисел
// С помощью метода reduce вычислите среднее арифметическое чисел в массиве.


const numbers = [1, 10, 17, 24, 45]
const sum = numbers.reduce((total,value) => total+value)

const length = numbers.length
const res = sum/length

console.log(res)

// 2 forEach

// const names = ['Jhon', 'Ella', 'Peter', 'Leo'];

// // names.forEach((name, i, arr) =>{
// //     console.log(name, i, arr)
// // });

// const myForEach = function(arr, fn) {
//     for(let i = 0; i < arr.length; i++ ) {
       
//         fn(arr[i], i, arr);
//     }
// };
// myForEach(names, (name, i, arr) => {
//     console.log(name, i, arr);
// });




const names = ['Jhon', 'Ella', 'Peter', 'Leo'];



const myForEach = function(arr, fn) {
    for(let i = 0; i < arr.length; i++ ) {
       
        fn(arr[i], i, arr);
    }
};
myForEach(names, (name, i, arr) => {
    console.log(name, i, arr);
});






