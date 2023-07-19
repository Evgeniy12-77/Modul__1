'use strict'

function filterStudent(allStudents, failedStudents) {
   // Используем метод filter для фильтрации фамилий сдавших экзамен
  let passedStudents = allStudents.filter(function(student) {
     // Проверяем, есть ли фамилия студента в массиве с несдавшими экзамен студентами
  return !failedStudents.includes(student);
  });
   // Возвращаем массив с фамилиями сдавших экзамен
  return passedStudents;
};

let allStudents = ['Иванов', 'Петров', 'Сидоров', 'Смирнов'];
let failedStudents = ['Иванов', 'Сидоров'];

let passedStudents = filterStudent(allStudents, failedStudents);
console.log(passedStudents);