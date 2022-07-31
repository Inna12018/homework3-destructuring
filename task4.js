// Завдання 4
// Детективне агентство кілька років збирає інформацію про можливу особистість Сатоши Накамото. 
// Вся інформація, зібрана у конкретному році, зберігається в окремому об'єкті.
//  Усього таких об'єктів три - satoshi2018, satoshi2019, satoshi2020.
// Щоб скласти повну картину та профіль, вам необхідно об'єднати дані з цих трьох об'єктів в один об'єкт - fullProfile.
// Зверніть увагу, що деякі поля в об'єктах можуть повторюватися. 
// У такому випадку в результуючому об'єкті має зберегтися значення, яке було отримано пізніше 
// (наприклад, значення з 2020 пріоритетніше порівняно з 2019).
// Напишіть код, який складе повне досьє про можливу особу Сатоші Накамото. 
// Змінювати об'єкти satoshi2018, satoshi2019, satoshi2020 не можна.

const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422, 
    lng: 139.876632
  }
};

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
};

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto', 
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
};

const fullProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020};
console.log(fullProfile);



