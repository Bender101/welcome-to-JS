//Release 0

//Создайте пустой объект student.
const student = {};

//Добавьте свойство firstName со значением Petr.
student.firstName = 'Petr'

//Добавьте свойство lastName со значением Perviy.
student.lastName = 'Pervyi'

//Измените значение свойства firstName на Petya.
student.firstName = 'Petya'

//Удалите свойство firstName из объекта.
delete student.firstName

//*********************************************************


//Release 1
//Создайте массив group
let group = [];

//Добавьте в него студента из предыдущего задания
group.push(student)

//Добавьте в массив еще 2 случайных студентов с заполненными свойствами firstName, lastName.
let student1 = {
    firstName: 'Aleksei',
    lastName: 'Sobakin',
};

let student2 = {
    firstName: 'Ivan',
    lastName: 'Svinouhov',
};

group.push(student1, student2);



console.log(group);