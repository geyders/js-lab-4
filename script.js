console.log("Завдання 1");

let fruits = ["Яблуко", "Слива", "Банан"];
console.log(fruits);
function processFruits(array) {
    array.pop();
    console.log("Масив після видалення останнього елемента:", array);

    array.unshift("Ананас");
    console.log("Масив після додавання 'Ананас':", array);

    array.sort((a, b) => b.localeCompare(a));
    console.log("Масив у зворотному алфавітному порядку:", array);

    let appleIndex = array.findIndex(fruit => fruit === "Яблуко");
    console.log("Індекс елемента 'Яблуко':", appleIndex);
}

processFruits(fruits);



console.log("Завдання 2");

function processColors() {
    let colors = ['рожевий', 'жовтий', 'синій', 'червоний'];

    let longest = colors.reduce((a, b) => a.length > b.length ? a : b);
    console.log("Найдовший елемент:", longest);

    let shortest = colors.reduce((a, b) => a.length < b.length ? a : b);
    console.log("Найкоротший елемент:", shortest);

    let filteredColors = colors.filter(color => color.includes("синій"));
    console.log("Рядки, що містять слово 'синій':", filteredColors);

    let result = colors.join(',');
    console.log("Об'єднаний рядок:", result);

    return result;
}

processColors();


console.log("Завдання 3");

function task3() {
    let users = [
        { name: "Олексій", age: 23, pos: "Розробник" },
        { name: "Петя", age: 34, pos: "Тестувальник" },
        { name: "Марія", age: 18, pos: "Розробник" }
    ];

    users.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Відсортований масив за іменами: ", users);

    let someUsers = users.filter(item => item.pos == "Розробник");
    console.log("Працівники, які мають посаду розробник: ", someUsers);

    let delAge = (users) => {
        for (let i = users.length - 1; i >= 0; i--) { 
            if (users[i].age < 20) {
                users.splice(i, 1); 
            }
        }
    };

    delAge(users);
    console.log("Видалено працівників віком менше 20: ", users);

    users.push({ name: "Юлія", age: 18, pos: "Адміністратор" });
    console.log("Додано нового працівника: ", users);

}
task3();

console.log("Завдання 4");

function studentsArr() {
    let students = [
        { name: "Олексій", age: 17, course: 1 },
        { name: "Людмила", age: 19, course: 3 },
        { name: "Андрій", age: 18, course: 2 },
    ]
    console.log("Масив студентів: ", students);

    let delStud = (students) => {
        for (let i = students.length - 1; i >= 0; i--) { 
            if (students[i].name == "Олексій") {
                students.splice(i, 1); 
            }
        }
    };

    delStud(students);
    console.log("Видалено студента з імям Олексій: ", students);

    students.push({ name: "Юлія", age: 18, course: 2 });
    console.log("Додано нового студента: ", students);

    students.sort((a, b) => b.age - a.age);
    console.log("Студенти, відсортовані за віком: ", students);

    let someStudent = students.filter(item => item.course == 3);
    console.log("Студент який навчаєтья на 3 курсі: ", someStudent);
}

studentsArr();

console.log("Завдання 5");

function task5() {
    let arr = [2, 3, 2, 4].map(item => item ** 2);
    console.log(arr); // 4,9,4,16

    let isEven = arr.filter(item => item % 2 == 0 ? item : 0);
    console.log(isEven);

    let sumArr = arr.reduce((a, b) => a + b);
    console.log("Сума елементів:", sumArr);

    let newArray = arr.concat([3, 4, 6, 2, 8]);
    console.log("Новий масив: ", newArray);

    console.log("Видалимо перші 3 елементи:", newArray.splice(0, 3));
    console.log(newArray);

}

task5();

console.log("Завдання 6");
console.log("Бібліотека");

function libraryManagment() {
    let books = [
        {
            title: "Тіні забутих предків",
            author: "Михайло Коцюбинський",
            genre: "Класика",
            pages: 256,
            isAvailable: false
        },
        {
            title: "Лісова пісня",
            author: "Леся Українка",
            genre: "Драма",
            pages: 112,
            isAvailable: true
        },
        {
            title: "Гаррі Поттер і філософський камінь",
            author: "Джоан Роулінг",
            genre: "Фентезі",
            pages: 332,
            isAvailable: true
        }
    ];
    console.log(books);


    //додавання
    function addBook(title, author, genre, pages) {
        books.push({
            title: title,
            author: author,
            genre: genre,
            pages: pages,
            isAvailable: true 
        });
    }
    addBook("Соляріс", "Станіслав Лем", "Наукова фантастика", 204);

    console.log("Оновлений список книг:", books);


    //видалення
    let removeBook = (books) => {
        for (let i = books.length - 1; i >= 0; i--) { 
            if (books[i].title == "Лісова пісня") {
                books.splice(i, 1); 
            }
        }
    };

    removeBook(books);
    console.log("Видалено книгу з назвою Лісова пісня: ", books);

    let findBooksByAuthor = books.filter(item => item.author == "Джоан Роулінг");
    console.log("Книжки автора Джоан Роулінг: ", findBooksByAuthor);

    // зміна доступності книги
    function bookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title); 
        if (book) {
            book.isAvailable = !isBorrowed; 
            console.log(`Статус книги "${title}" змінено на ${book.isAvailable ? "доступна" : "взята"}`);
        } else {
            console.log(`Книга з назвою "${title}" не знайдена.`);
        }
    }

    bookAvailability("Тіні забутих предків", false); //повернута
    bookAvailability("Гаррі Поттер", true); //не знайдена

    console.log("Оновлений список книг:", books);

    function sortByPages() {
        books.sort((a, b) => a.pages - b.pages);
        console.log("Книги, відсортовані за сторінками: ", books);
    }
    sortByPages();

    function bookStatistics() {
        let total = books.length; 
        let available = books.filter(book => book.isAvailable).length; 
        let borrowed = total - available; 
        let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
        let avgPages = total > 0 ? (totalPages / total).toFixed(2) : 0; 

        return {
            totalBooks: total,
            availableBooks: available,
            borrowedBooks: borrowed,
            avgPages: avgPages
        };
    }

    let statistics = bookStatistics();
    console.log("Статистика про книги:", statistics);
}

libraryManagment();

console.log("Завдання 7")

function task7() {
    let student =
    {
        name: "Олексій",
        age: 17,
        course: 1
    }

    console.log("Об'єкт студент: ", student);

    student.subjects = ["Англійська", "Математика"];
    console.log("Масив після додавання властивості: ", student);

    delete student.age;
    console.log(student);
}

task7();