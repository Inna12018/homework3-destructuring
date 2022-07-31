// Завдання 3
// У нас є об'єкт' user:

// const user1 = {
//   name: "John",
//   years: 30
// };


// Напишіть деструктуруюче присвоєння, яке:

// властивість name присвоїть в змінну ім'я
// властивість years присвоїть в змінну вік
// властивість isAdmin присвоює в змінну isAdmin false, якщо такої властивості немає в об'єкті

// Виведіть змінні на екран.

const user1 = {
    name: "John",
    years: 30
  };

const {name, years: age, isAdmin = 'false'} = user1;
console.log(name, age, isAdmin);