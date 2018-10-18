//Переменные обьявленные внутри модуля, являются локальными для модуля
var x = 10;

function test(){
    console.log('Test function, number = ', x);
};

// что бы переменная была доступна в другом модуле, можно сделать ее свойством глобального обьекта
// для доступа к глобальному объекту используется переменная global

// global.number = x;
// global.func = test;

global.number = x;
global.func = test;