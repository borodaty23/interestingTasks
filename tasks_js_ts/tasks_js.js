//Напишите функцию isEmpty(obj), которая принимает в себя объект и возвращает true, если у объекта нет свойств, иначе false.

// const isEmpty = (obj) => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

// 2. У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// а) при помощи метода reduce найдите сумму зп
// б) при помощи метода map дайте каждому участнику id (для этого можете использовать index)

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const foo = (obj) => {
  let sumSalaries = Object.entries(obj).reduce((acc, item) => {
    return acc + item[1];
  }, 0);

  let employeeWithId = Object.entries(obj).map((item, index) => {
    return { name: item[0], salarie: item[1], id: index };
  });
  return [employeeWithId, sumSalaries];
};
