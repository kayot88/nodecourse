// function User(name) {
//     this.name = name;
//     this.sayHello = () => {
//         console.log('Hello ', this.name);
//     };
// }

// var Jhon = new User('Jhon');

// Jhon.sayHello();

function Use(note) {
    this.note = note;
    this.SeyH = () => {
        console.log(`hello User ${this.note}`);
    }
}

let Rome  = new Use('Gromov')
Rome.SeyH();