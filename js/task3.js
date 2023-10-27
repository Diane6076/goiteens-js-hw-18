//Завдання 3
//Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
//Додай методи класу:

class Storage {
  constructor(items) {
    this.items = items;
}

getItems(){
  return this.items;
}  //повертає масив поточних товарів

addItem(item){
  this.items.push(item);
} // отримує новий товар і додає його до поточних

removeItem(item){
  const index = this.items.indexOf(item);
  if (index !== -1) {
    this.items.splice(index, 1);
  }
}
} // отримує товар і, якщо він є, видаляє його з поточних


const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
