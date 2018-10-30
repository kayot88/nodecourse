function CreateConnection() {
  this.connect = () => {
    console.log(`Connectiion done`);
  }
}

const testConnection = () => {
  console.log(`test connection...`);
    new CreateConnection().connect()
}

module.exports = {
  name: "Roman",
  age: 25
};
