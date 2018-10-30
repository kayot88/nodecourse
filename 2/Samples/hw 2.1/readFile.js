let evt = require('events');

// Создаем функцию конструктор, которая будет унаследована от функции EventEmitter
function ReadFile() {
  // this._file = '';
};

// В прототип ридера записываем объект EventEmitter что бы была возможность генерировать события
ReadFile.prototype = new evt.EventEmitter();

ReadFile.prototype.readSomeData = function (path, callback) {
  this.file = path;
  // callback - функция, которая  вызовется после того как данные будут прочитаны
  if (typeof callback == 'function') {
    this.on('myEvent', callback)
  }
  this._read();
}
// Объект созданый функцией позволит подключиться к файлу и считать из него данные

ReadFile.prototype._read = function () {
  console.log('start reading data');
  let someData = 'testing';
  this.emit('myEvent', someData)
  console.log(`reading is done`);
}

module.exports.Reader = ReadFile;