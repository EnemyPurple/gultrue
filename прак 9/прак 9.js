let user = {
  name: "Джон",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!
let zxc = {
  name: "Евгений Худов",
  address: "ул. Адмирала, дом Кава",
  phone: "+7 (800) 555 35 35",
  email: "dmekh2005@gmail.com",
  orderHistory: [] 
 };
 
 console.log(zxc.name); 
 console.log(zxc.address); 
 console.log(zxc.phone); 
 let children = {
  name: "Игорь",
  isAdmin: false
 };
 let fff = {
userID: 1,
ZAKAZ: 2,
items: ["Mango","Pivo"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "Dinnero Vass",
  address:"Физтех"
 };
 if (fff.status === "Ожидание") {
  console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Валера");
 const member2 = new GroupMember("Ярик");
 const member3 = new GroupMember("Игорь");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
  };
 }
 
 const vasya = new Student("Евгений", "ИСП-309", ["Программирование"]);
 
 vasya.sayHi(); 
 vasya.showCourses();