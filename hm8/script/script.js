// Homework 8
// Задание 1
// Напишите функцию, которая принимает массив булевых значений, а возвращает число, которое представляет собой количесво значений true в массиве

// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0

// I variant

const getSumBoolen = (arr) => {
    let a = 0;
  
    for (let boolen of arr) {
      
        if (boolen === true){
            a += 1
        }
        else{
            a +=0
        }
    }
 
    return a
  
  }
const resultSum = getSumBoolen ([false, true,false,false]);
console.log(`resultSum`, resultSum)



// II variant


const countTrue = (value) => {
    const res = []
    for (let findTrue of value) {
        if (findTrue === true) {
            res.push(findTrue)
        }
    }
    return res.length 
};
const finalResult = countTrue ([false, true,true, false, false])
console.log (`K-ть в масиві TRUE: `, finalResult);



// Задание 2
// Вам необходимо посчитать количество вхождений каждого элемента в массиве. Результатом работы написанного вами метода 
// должен быть объект, где ключами являются елементы массива а их значениями - количесво раз, 
// которое каждый конкретный элемент встречается в массиве. В массиве гарантировано находятся исключительно строки.

// getOccurrencesCount(["a", "v", "a", "b", "b"]);
// // {
// //   a: 2,
// //   v: 1,
// //   b: 2,
// // }

// getOccurrencesCount([
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ]);
// // {
// //   apples: 2,
// //   oranges: 3,
// //   pears: 3,
// // }


// I variant


const arr = ["oranges", "apples", "pears", "oranges", "oranges", "apples"];
const getOccurrencesCount = {};

for (let elem of arr) {
    let count = getOccurrencesCount;
    if (count[elem] === undefined) {
    count[elem] = 1;
    } else {
    count[elem]++;
    }
}
//  getOccurrencesCount = arr.split(',')
console.log(getOccurrencesCount); 




// II variant


const getOccurrenceCount = (items) => {
const occurrencesCount = {};
for (let elem of items){
    if (!occurrencesCount[elem]){
        occurrencesCount[elem] = 1
    }else{
        occurrencesCount[elem]++
    }
    // console.log (`occurrencesCount`, occurrencesCount)
}
return occurrencesCount;
};

const showResult = getOccurrenceCount (["oranges", "apples", "pears", "oranges", "oranges", "apples"])
console.log (`showResult`, showResult);




// Задание 3
// Вам предоставляется массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. 
// Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за 
// исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает это «лишнее» N.

// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0


const findExcess = (integers) => {
    let evenArray = []
    let oddArray = []
    for (let num of integers) {
        num %2 ==0 ? evenArray.push(num) : oddArray.push(num)
    }

    if (evenArray.length > oddArray.length) {
        return oddArray [0]

    }else{
        return evenArray [0]

    }
}
const integers = findExcess ([2,6,12,14,0,9])
console.log (`integer`,integers);