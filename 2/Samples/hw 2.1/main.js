// Для работы с событиями, необходимо подключить модуль 'events'
let readExp = require('./readFile.js');
// Создаем объект ридера
// console.log(`test`);
let readMain = new readExp.Reader()
 console.log(readMain);
// функция readDataFromFile подключается к файлу, считывает данные и передает в нашу callback функцию
readMain.readSomeData('file.js', function (responce) {
  console.log(responce);
});

