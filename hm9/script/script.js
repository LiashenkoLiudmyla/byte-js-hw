
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

// const everyAdmins = users
//     .filter(users => users.role === 'admin')
// // console.log(everyAdmins);
// const adultAdmins = everyAdmins
//     .filter(everyAdmins => everyAdmins.age >= 18);
// // console.log(adultAdmins);
// const nameAdmin = adultAdmins
//     .map(adultAdmins => adultAdmins.name);
//     console.log(nameAdmin);


    //II var shot pres &&

const adultAdmins = users
    .filter(users => users.age >= 18 && users.role === 'admin');
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







// 2 forEach (I var)

const names = ['Jhon', 'Ella', 'Peter', 'Leo'];



const myForEach = function(arr, fn) {
    for(let i = 0; i < arr.length; i++ ) {
       
        fn(arr[i], i, arr);
    }
};
myForEach(names, (name, i, arr) => {
    console.log(name, i, arr);
});

// 2 forEach (II var !!!beauty!!!)
const logger = (element, index, array) =>{
  console.log(`In array [${array}]  on position ${index}: ${element}`);
}
const ownForEach = (arr, logger) => {

  for (let num of arr) {
    logger (num, arr.indexOf(num), arr)
  }
}
ownForEach([1,2,3],logger)


// names.forEach((name, i, arr) =>{
//     console.log(name, i, arr)
// });



const increment = (number) => number + 1;
const ownMap = (arr, increment) => {

  let emptyArr = []

    for(let num of arr) {
       
      emptyArr.push(increment(num))
    }
    return emptyArr
};

let resOwnMap = ownMap ([1,2,3], increment)
console.log (resOwnMap)


//  let arr2 = [1,2,3]
// let test2 = arr2.map((num) => increment (num))
// console.log(test2);



const isNegativ = (number) => number < 0;
const ownFilter = (arr, isNegativ) => {
  let arrClone = []
  for (let num of arr) {
    if( isNegativ(num) === true) {
      arrClone.push(num)
    }
  }
  return arrClone
};
let resOwnFilter = ownFilter([1,3,-30,0,4,-19],isNegativ);
console.log (`resOwnFilter`, resOwnFilter);

//let arr3 = [1,3,-30,0,4,-19]
// let test3 = arr3.Filter((num) => isNegativ (num))
// console.log(test3)


// Задание 3* (опциональное)
// Написать универсальную функцию для фильтрации массива объектов

// Функция принимает на вход 2 аргумента, первый это массив данных, второй - объект содержащий данные для фильтрации.

// На выходе результатом должен быть массив сожержащий объекты в которых нашлись совпадения.

// Учтите, что функция должна быть универсальной и работать с любыми объектами одного уровня вложенности.

const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

const filterData = (dataArray, objectToFilter) => {
  let result = dataArray.filter(item => {
    //console.log(`keys:`, Object.keys(objectToFilter)) // Object.keys(objectToFilter) перетворює обєкт на масив [[age,19], [position, "middle"]] 
                                                      // і тоді метод масиву перебирає саме такого вигляду масив
// на кожній ітерації беремо ключі філтра

//кожне значення по ключу фільтра порівнюємо зі значенням по цьому ж ключу  в обєкті

return Object.keys(objectToFilter).every(key => {

   //console.log(item[key], 'i', objectToFilter[key], '=', item[key] === objectToFilter[key])
  return item[key] === objectToFilter[key]

})

  });
  return result;
}
// в одну строчку:
//const filterData = (dataArray, objectToFilter) => dataArray.filter((item) => Object.keys(objecrToFilter).every(key => item[key] === objectToFilter[key]))
let resFiltered = filterData(data, {age:19, position: "middle"}); //data-в якому з масивів шукаємо ключі(невідоме)... {age:19, position: "middle"} -умова що саме треба знайти з чим порівняти зміст обєктів тобто колекції
// console.log(resFiltered)






