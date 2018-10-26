// var _ = require('lodash');

// function Person(cfg) {
//     this.names = [cfg.fname, cfg.lname];
// }
Person.prototype.greet = function (title) {
    title = title || "Mr";
    var fullName = this.names
        .map(n => {
            n = n || ''
            return _.upperFirst(n);
        })
        .join(" ");

    console.log("Hello " + title + " " + fullName + "!");
};
// Person.prototype.greetWithAllTitles = function(...args) {
//     for (var i = 0; i < args.length; i++) {
//         var title = args[i];
//         this.greet(title);
//     }
// };

// module.exports = Person;