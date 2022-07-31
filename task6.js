// Завдання 6
// Даний об'єкт employee. Додайте до нього властивості age і salary, не змінюючи початковий об'єкт 
// (має бути створено новий об'єкт, який включатиме всі необхідні властивості). Виведіть новий об'єкт у консоль.

const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
};


const newEmployee = {...employee, age: 35, salary: 5000};
console.log(newEmployee);
