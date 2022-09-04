class User {
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const yearOfStudy = new Date().getFullYear() - this.year;
    if (yearOfStudy < 1) return "The student is a freshman";
    return yearOfStudy <= 5 ? `${yearOfStudy} course` : "The student is a graduate";
  }
}

const student = new Student('Петрик', 'Пяточкин', 2019);
const student1 = new Student('Mark', 'Ivanov', 2017);
const student2 = new Student('Марія', 'Золоткова', 2022);

console.log(student.getFullName());
console.log(student.getCourse());

console.log(student1.getFullName());
console.log(student1.getCourse());

console.log(student2.getFullName());
console.log(student2.getCourse());

// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

