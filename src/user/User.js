// Напиши сутність юзера, має ПІБ, пошту, пароль.
// Напиши сутність База Даних. В ній є масив юзерів.
// Напиши сутність Application (твоя точка входу в додаток). Має метод створити юзера. Логіка така що ти створюєш нового юзера, і потім додаєш його в Базу даних

class User {
constructor(name, email, password, toDoList, id){
    this.name = name;
    this.email = email;
    this.password = password;
    this.toDoList = toDoList;
    this.id= id;
}

}
module.exports = { User };