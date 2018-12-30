class User {
  constructor() {
    this.users = [];
  }

  create(element) {
    const newUser = element;
    this.users.push(newUser);
    return { newUser };
  }

  findAll() {
    return this.users;
  }

  findOne(name) {
    return this.users.find(user => user.username === name);
  }

  findById(id) {
    return this.users.find(user => user.id === id);
  }

  checkUsername(element) {
    return this.users.find(user => user.username === element);
  }

  checkEmail(element) {
    return this.users.find(user => user.email === element);
  }

  deleteUser(id) {
    const search = this.users.indexOf(id);
    this.users.splice(search, 1);
    return true;
  }

  updateUser(id, element) {
    const equal = this.findById(id);
    const user = this.users.indexOf(equal);
    return (this.users[user] = element);
  }
}

module.exports = new User();
