// ФУЕКЦІЯ ВИПАДКОВИХ ЧИСЕЛ

    // const getRadomInteger = (max) => {
    //   return Math.round(Math.random() * max);
    // }
    // const integerRandom = getRadomInteger(10);
    // console.log(`integerRandom`, integerRandom);

    // const a = (max) => {
    //   return Math.round(Math.random() * max);
    // }
    // const b = a(100);
    // console.log(b);

    // let c = 3;
    // const a = (max) => {
    //   return c * max;
    // }
    // const b = a(10);
    // console.log(b);
   

     
    // const a = (d,c) =>  c * d;
    // const r = a(10,3);
    // console.log(r);

   
    // let num = +prompt("Enter a number", '');

    // // буде істинним, якщо ви не введете Infinity, -Infinity чи не число
    // alert( isFinite(num) );
   

//     const getRGBFromHex = (hexCode) => {
//     const red = hexCode.slice(1,3);
//     const green = hexCode.slice(3,5);
//     const blue = hexCode.slice(5,7);

//     // console.log(`red`,red);
//     // console.log(`green`,green);
//     // console.log(`blue`,blue);

//     const decimalRed = parseInt(red, 16);
//     const decimalgreen = parseInt(green, 16);
//     const decimalblue = parseInt(blue, 16);
// return (`rgb(${decimalRed}, ${decimalgreen}, ${decimalblue} )`)
//    }

//    const resultRGB = getRGBFromHex(`#ffffff`);
//    console.log (`resultRGB`, resultRGB);




// ПЕРЕТВОРЕННЯ ЧИСЛОВОГО КОЛЬОРУ В СТРОЧНИЙ ТОБТО З RGB(255, 255, 255) - HEX #FFFFFF



// const getHexFromRGB = (r, g, b) => {
//   return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
//  }
// const resultHex = getHexFromRGB(255, 255, 255)
// console.log(`resultHex`, resultHex)


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
autorize()