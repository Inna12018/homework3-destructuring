// Усі завдання потрібно виконати, використовуючи синтаксис деструктуризації

// Завдання 1
// Дві компанії вирішили об'єднатись, і для цього їм потрібно об'єднати базу даних своїх клієнтів.
// У вас є 2 масиви рядків, у кожному з них – прізвища клієнтів. Створіть на їх основі один масив,
//  який буде об'єднання двох масивів без повторюваних прізвищ клієнтів.

const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

const company = [...new Set([...clients1,...clients2])];
console.log(company);



