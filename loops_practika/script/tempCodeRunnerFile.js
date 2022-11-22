const findFirstNumber = (start, finish, divider) => {
let targetNumber;
for(let i = start; i <= finish; divider){
    if(i % divider === 0) {
        targetNumber = i;
        break;
    }
}
return targetNumber;
}
const result = findFirstNumber(10, 50, 7)
console.log(`result`, result);