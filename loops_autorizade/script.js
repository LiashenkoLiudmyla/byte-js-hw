const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const autorizade = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    let userAttempts = 3;

  while (userAttempts !== 0){

    let userLogin = prompt ("Логін:");

    if (!userLogin){
      alert("Ведіть логін: ");
      continue;
    }

    let userPassword = prompt("Пароль: ");
        
    if (!userPassword){
        alert("Ведіть пароль: ");
        continue;
    }
    
    if (userLogin === LOGIN && userPassword === PASSWORD){ 
        isAuthSuccess = true;
    }else{
        userAttempts--
        alert ("Данні введено не вірно. Кількість спроб: " + userAttempts);
        
    }

  }
  if(isAuthSuccess) {
    alert ("Welcome")
  }else{
    alert ("Ваші спроби закінчилися")
  }


};

autorizade ();






// // МІЙ ВАРІАНТ, АЛЕ НЕ ДОСКОНАЛИЙ 
// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const autorize = () => {
// let userPassword;
// let userLogin;
// let isAuthSuccess = false;
// let i = 3;
// do {
//     userLogin = prompt('Login: ');
//     if (!userLogin) {
//     alert ('Enter LOGIN');
//     continue;
//   } 
 
//     userPassword = prompt('Password');
//     if(!userPassword) {
//     alert ('Enter PASSWORD');
//     continue;
//   }
 
//   if (userLogin === LOGIN && userPassword === PASSWORD) {
//   isAuthSuccess = true;
   
//   }else{
    
//     while (i){
//       alert(`ERROR. У Вас залишилося спроб: ${i-1}`);
//       i--;
//       { break;}
//     }
//     while (i === 0){
//       alert(`ERROR. Спробуйте пізніше`);
      
//       { break;}
//     }
                
//     }

// }while(!isAuthSuccess);
// alert ('WELCOME');
// };
// autorize();
