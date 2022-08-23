//Напишите функцию isEmpty(obj), которая принимает в себя объект и возвращает true, если у объекта нет свойств, иначе false.

// interface IIsEmpty {
//     [key: string]: any
// }
    
// const isEmpty = (obj: IIsEmpty): boolean => {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// 2. У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// а) при помощи метода reduce найдите сумму зп
// б) при помощи метода map дайте каждому участнику id (для этого можете использовать index)

// interface ISalaries {
//     John: number
//     Ann: number
//     Pete: number
// }

// interface IEmployeeWithId {
//     id: number
//     name: string
//     salarie: number
// }

// type result = [IEmployeeWithId[], number]

// let salaries: ISalaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   };


  
//   const foo = (obj: ISalaries): result => {
//     let sumSalaries = Object.entries(obj).reduce((acc, item) => {
//       return acc + item[1];
//     }, 0);
  
//     let employeeWithId = Object.entries(obj).map((item, index) => {
//       return { name: item[0], salarie: item[1], id: index };
//     });
//     return [employeeWithId, sumSalaries];
//   };

// 3. Напишите функцию count(obj), которая принимает объект и возвращает количество свойств объекта:

// interface IUser {
//     name: string
//     age: number 
// }

// let user: IUser = {
//   name: 'John',
//   age: 30
// };

// let foo = (obj: IUser): number => {
//     let count = Object.keys(obj).length
//     return count
// }

// 4. Создайте функцию topSalary(salaries), которая принимает объект и возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// let salaries: ISalaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// interface ISalaries {
//     [key: string]: number
// }

// type result = string | null

// const topSalary = (salaries: ISalaries): result => {
//     let topSalary = 0
//     let nameOfTopEmp: null | string = null
//     if (Object.keys(salaries).length) {
//         Object.entries(salaries).forEach(item =>{
//            if (topSalary < item[1]){
//             topSalary = item[1]
//             nameOfTopEmp = item[0]
//            }
//         })
//     }
//     return nameOfTopEmp
// }

// 5. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
  
// const min = (x: number, y: number): number => {
//    return x < y ? x : y
// }

// 6. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
// В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. 
// Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

// const range = (start: number, end: number, step: number): number[] => {
//     let arr: number[] = []
//     if (start < end) {
//         for (let i = start; i <= end; i += step){
//             arr.push(i)
//         }
//     } else {
//         for (let i = start; i >= end; i += step) {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// const sum = (arr: number[]): number => {
//  return arr.reduce((acc, numb) => {
//     return acc + numb
//  } )
// }

// 7.Напишите функцию, которая принимает массив массивов и соединяет их в один массив, у которого есть все элементы входных массивов.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код 
// → [1, 2, 3, 4, 5, 6]

// type TArrNumber = number[]

// const foo = (arr: TArrNumber[]): TArrNumber => {
//     return arr.reduce((acc, item) => {
//         return [...acc, ...item]
//     }, [])
// }

// 8. Написать функцию, которая принимает в себя объект в качестве первого аргумента и строку (=название одного из ключей объекта) 
// в качестве второго аргумента, а в качестве результата возвращает новый объект уже без этого ключа.

// let obj = {
//     name: "jika",
//     surName: "kurga",
//     age: 23
// }

// interface IObj {
//     name: string
//     surName: string
//     age: number
// }

// const foo = <T>(obj: T, str: keyof T): Omit<T, keyof T> => {
//     const { [str]: w, ...rest } = { ...obj }
//     return rest
// }


// function fo<T>(obj: T, str: keyof T): Omit<T, keyof T> {
//     const { [str]: w, ...rest } = obj
//     return rest
// }

// foo<IObj>(obj, "name")

//////////=============================================================================================================================///////////////////////////////

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
 
    // 1. Создать строку из имен пользователей через запятую
    // 2. Подсчитать общее количество машин у пользователей
    // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    // 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    // 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую



//  const users: IUser[] = [
//     {
//         name: "Harry Felton",
//         phone: "(09) 897 33 33",
//         email: "felton@gmail.com",
//         animals: ["cat"],
//         cars: ["bmw"],
//         hasChildren: false,
//         hasEducation: true
        
//     },
//     {
//         name: "May Sender",
//         phone: "(09) 117 33 33",
//         email: "sender22@gmail.com",
//         hasChildren: true,
//         hasEducation: true
//     },
//     {
//         name: "Henry Ford",
//         phone: "(09) 999 93 23",
//         email: "ford0@gmail.com",
//         cars: ["bmw", "audi"],
//         hasChildren: true,
//         hasEducation: false
//     }
// ]

// interface IUser {
//     name:string,
//     phone:string,
//     email:string,
//     hasChildren: boolean,
//     hasEducation:boolean,
//     animals?: string[]
//     cars?: string[]
// }

//=========1

// function getNames <T extends IUser>(arr: T[]): string {
//    return arr.reduce((acc, item) => {
//         return `${acc}${item.name},`
//     }, "")
// }

// getNames<IUser>(users)


//========2

// function getCountCars<T extends IUser>(arr: T[]): number {
//     return arr.reduce((acc, item) => {
//         return item.cars ? acc += item.cars.length : acc
//     }, 0)
// }

//=======3

// const getEducateUsers = <T extends IUser>(arr: T[]): T[] => {
//     return [...arr].filter((item) => item.hasEducation )
// }

//=======4

// const getUsersWithAnimals = <T extends IUser>(arr: T[]): T[] => {
//    return arr.filter((item) => item.animals)
// }   

//======5

// const getUsersNames = <T extends IUser>(arr: T[]): string => {
//     return arr.reduce((acc, item) => {
//         return `${acc}${item.name}, `
//     }, "").split(", ").slice(0,-1).join(", ")
// }

//===================================================================

// 0)============== протипизировать при помощи дженериков

// interface IObj {
//     [key: string]: any
// }

// interface IUser {
//     name: string
//     surName: string
//     age: number
// }

// let obj: IUser = {
//     name: "jika",
//     surName: "kurga",
//     age: 23
// }

// function isEmptyObject<T extends IObj> (obj: T): boolean {
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// isEmptyObject<IUser>(obj)


// 1)============== написать функцию, которая принимает в качестве первого аргумента объект типа IObject1 или IObject2 или IObject3, и в качестве второго
// аргумента строку. И проверяет, является ли данная строка ключом переданного объекта

// let obj: IObj = {
//     name: "jika",
//     surName: "kurga",
//     age: 23
// }

// interface IObj {
//     name: string
//     surName: string
//     age: number
// }

// type TAnyObj = Record<string, any>

// const foo = <T extends TAnyObj, K extends keyof T>(obj: T, str: K): boolean => {
//    return str in obj ? true : false
// }

// foo<IObj, keyof IObj>(obj, "age")

// 2)============ написать простую функцию, которая принимает массив и возвращает перевернутый массив.

// const foo = <T>(arr: T[]): T[] => {
//     return arr.reverse()
// }

// 3)=============== написать типизированную обертку над Object.keys() (то есть его функционал с нуля, как мы делали с map и reduce)

// let obj: IUser = {
//     name: "jika",
//     surName: "kurga",
//     age: 23
// }

// interface IUser {
//     name: string
//     surName: string
//     age: number
// }

// interface IObj {
//     [key: string]: any
// }

// const foo = <T extends IObj>(obj: T): string[]  => {
//     let arr: string[] = []
//     for (let key in obj) {
//         arr.push(key)
//     }
//     return arr
// }

// foo<IUser>(obj)

// 4)=========== написать функцию, которая возвращает случайный элемент из переданного массива

// type TArr = number | string

// const foo = <T> (arr: T[]): Pick<T, keyof T> => {
//     let randomNumb: number = Math.floor(Math.random()*arr.length)
//     return (arr[randomNumb])
// }

// foo<TArr>([1,"fa",3])

// 5)================= написать функцию, которая принимает 2 объекта и возвращает их смерженными в один

// const obj1 = { la: 2, ga: 3 };
// const obj2 = { le: 4, ge: 5 };

// interface IObj1 {
//     la: number
//     ga: number
// }

// interface IObj2 {
//     le: number
//     ge: number
// }

// const foo = <T, E>(obj1: T, obj2: E): T & E => {
//     const obj3 = {...obj1, ...obj2}
//     return obj3
// }

// foo<IObj1, IObj2>(obj1, obj2)

// 6)==================== написать функцию, чтобы получать свойство из объекта по ключу

// const obj1 = { la: 2, ga: 3 };

// interface IObj1 {
//     la: number
//     ga: number
// }

// const foo = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
//     return obj[key]
// }

// foo<IObj1, keyof IObj1>(obj1, "la")

// 7)========================== написать функцию, которая будет принимать объект и изменять значение его свойства при этом функция должна быть безопасной 
// (т.е если тип данных у свойства number, то менять его можно только на number)

// const obj1 = { la: 2, ga: 3 };

// interface IObj1 {
//     la: number
//     ga: number
// }

// const foo = <T, K extends keyof T, N extends T[K]>(obj1: T, key: K, newV: N): T => {
//     return {...obj1, key: newV}
// }

// foo<IObj1, keyof IObj1, number>(obj1, "la", 44)

// 8)==================== написать функцию, которая ищет ключ по свойству

// const obj1 = { la: 2, ga: 3 };

// interface IObj1 {
//     la: number
//     ga: number
// }

// const foo = <T>(obj: T, prop: T[keyof T]): keyof T | undefined => {
//     let x = undefined
//     Object.entries(obj).forEach(item => {
//         item[1] === prop ? x = item[1] : x = x
//     })
//     return x
// }

// 9====================== написать функцию, которая добавить индекс каждому объекту в массиве
// из IOld к INew
interface IOld {
  name: string;
}
 
interface INew {
  name: string;
  id: number;
}

const foo = <T>(arr: T[]): (T & {[key: string]: number})[] => {
    let newArr = arr.map((user,index) => {
        return {...user, ["id"]: index}
    })
    return newArr
}

foo<IOld>([{ name: "2" }, { name: "3" }])