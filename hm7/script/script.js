// Задание 1
// Реализовать функцию, которая составляет расписание

// В цикле спрашивать у пользователя задачу и время, на которое она запланирована. После получения данных, записываем их в объект расписания в формате время: задача
// Окно ввода prompt должно появляться до тех пор пока пользователь не нажмет Esc или кнопку Отмена.
// По окончании работы функция должна вернуть объект с расписанием.
// Вывести распиание в консоль.
// Результат должен иметь приблизительно такой вид:

// {
//   "10:00": "Подъем",
//   "10:15": "Зарядка",
//   "10:30 ": "Завтрак",
// }




// Фу-ція, що запитує Задачу  



const userTaskDay = () => {

    let end = false;
    const timeTable = {};// змінна, що збирає данні розкладу який вводе користувач

    do{

        let addTime = prompt(`Ведіть запланований час: `);
        let addTask = prompt(`Ведіть заплановану задачу: `);

        if ((addTask == null || addTime == null)) {
            end = true
        }else{
            timeTable [addTime] = addTask
           
        }
    }while(!end)
    return timeTable
}

// const shedule = userTaskDay();
console.log (`shedule`, shedule)


// Задание 2
// Написать функцию, которая находит сумму зарплат работников.

// На вход функция будет получать объект, где значениями в объекте являются СТРОКИ, содержащие размер заработной платы сотрудников компании.
// Необходимо посчитать сумму всех значений и вернуть ее.


const salaries = {
    john: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};
const sumOfEmploueesalaries = (salaries) => {
    let counter = 0;
    for (let key in salaries) {
        counter += +salaries [key]
    }
    let result = counter.toFixed(2)
    return result;
}
// const sum = +sumOfEmploueesalaries(salaries);
console.log (`sum`, sum);

