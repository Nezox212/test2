//Задание 1. Функции,
// 1.1 Стрелочные функции
// Дана обычная функция:
// function multiply(a, b) {
//   return a * b;
// }
// Перепиши её в виде стрелочной функции multiplyArrow. Дополнительно создай стрелочную функцию
// isEven(number), которая возвращает true, если число чётное, и false, если нечётное. Протестируй обе.

const multiplyArrow = (a,b) => {
    return a * b;
}
const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    else if (number % 2 !== 0 ){
        return false
    }
};
console.log(multiplyArrow(2, 3));
console.log(isEven(3));
console.log(isEven(4));




//1.2 Функции
// Напиши функцию countVowels(str), которая считает количество гласных букв в строке.
// Протестируй на нескольких словах.
// Напиши функцию reverseString(str), которая возвращает перевёрнутую строку.
// Например, reverseString("hello") вернёт "olleh". Протестируй.
// Напиши функцию factorial(n), которая вычисляет факториал числа через цикл.
// Например, factorial(5) вернёт 120. Протестируй.
// Напиши функцию sumTo(n), которая возвращает сумму всех чисел от 1 до n.
// Например, sumTo(5) вернёт 15. Протестируй.
// Напиши функцию createProduct(name, price), которая возвращает объект вида
// { name, price, currency: "сом" }. Выведи результат в консоль.


const vowels = "aeoiuаеёиоуыэюя";
const countVowels = (str) => {
    let count = 0;
    const lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        if (vowels.includes(lower[i])) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("milk"));
console.log(countVowels("blablabla"));
console.log(countVowels("BIGGEST"));
console.log(countVowels("Молоко"));

const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("hello world!"));

const factorial = (n) => {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result  *= i
    }
    return result;
}
console.log(factorial(10));
console.log(factorial(1000));


const sumTo = (n) => {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result;
}
console.log(sumTo(10));
console.log(sumTo(1000));


const createProduct = (name, price) => {
    return {
        name,
        price,
        currency: "сом"
    };
}
console.log(createProduct("milk",100));



//Задание 2. Методы перебора массивов
// Дан массив товаров:


const products = [
    { name: "Ноутбук",   price: 45000, inStock: true  },
    { name: "Мышь",      price: 800,   inStock: false },
    { name: "Клавиатура", price: 2500, inStock: true  },
    { name: "Монитор",   price: 15000, inStock: true  },
    { name: "Наушники",  price: 3200,  inStock: false }
];


// Используя методы массива, выполни и выведи результат каждого пункта в консоль:

// Создай массив с названиями всех товаров (map).
// Создай массив только тех товаров, что есть в наличии — inStock: true (filter).
// Найди первый товар дороже 10000 (find).
// Посчитай суммарную стоимость всех товаров (reduce).
// Проверь, есть ли хотя бы один товар дешевле 1000 (some)
// Создай массив, где у каждого товара только название и цена, без поля inStock (map + возврат объекта).
// Проверь, все ли товары дороже 500 (every).
// Найди индекс товара «Монитор» (findIndex).
// Отсортируй товары по цене по возрастанию (sort).
// Посчитай, сколько товаров есть в наличии (filter + length или reduce).
// Создай массив строк вида «Ноутбук — 45000 сом» (map).
// Найди самый дорогой товар (reduce).
// Посчитай суммарную стоимость только тех товаров, что есть в наличии (filter + reduce).
// Создай новый массив, где цена каждого товара уменьшена на 10% (map).
// Проверь, есть ли товар с названием «Клавиатура» (some).

const mapped = products.map((el) => {
    return el.name;
});
console.log(mapped);

const filtered = products.filter((el) => {
    return el.inStock === true;
});
console.log(filtered);

const founded = products.find((el) => {
    return el.price > 10000;
})
console.log(founded);

const total = products.reduce((prev, el) => prev + el.price, 0);
console.log(total);

const cheapThan = products.some((el) => {
    return el.price < 1000;
})
console.log(cheapThan);

const withoutInStock = products.map((el) => {
    return {
        name: el.name,
        price: el.price,
    }
})
console.log(withoutInStock);

const everyMore = products.every((el) => {
    return el.price > 500;
})
console.log(everyMore);

const indexOfProduct = products.findIndex((el) => {
    return el.name === "Монитор"
})
console.log(indexOfProduct);


const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log(sortedProducts);

const howManyInStock = products.filter((el) => {
    return el.inStock === true;
})
console.log(howManyInStock.length);

const productsString = products.map((el) => {
    return el.name + " - " + el.price;
})

console.log(productsString);

const mostExpensive = products.reduce((prev, el) => {
    if (el.price > prev.price) {
        return el;
    }
    return prev;
})
console.log(mostExpensive);

const filterInStock = products.filter((el) => {
    return el.inStock === true
})
const justPrice = filterInStock.map((el) => {
    return el.price;
})
const wholePrice = justPrice.reduce((el,prev) => {
    return prev += el;
})
console.log("цена за все товары в наличие - " + wholePrice);

const tenPrecentDiscount = products.map((el) => {
    return {
        name: el.name,
        price: el.price*0.9,
        inStock: el.inStock,
    }
})
console.log(tenPrecentDiscount);

const hasKeyboard = products.some((el) => {
    return el.name === "Клавиатура";
})
console.log(hasKeyboard);








const students = [
    { name: "Айгуль", grade: 85, active: true },
    { name: "Бек", grade: 42, active: false },
    { name: "Дана", grade: 91, active: true },
    { name: "Эрлан", grade: 67, active: true },
    { name: "Мария", grade: 38, active: false }
];
// Создай массив имён всех студентов (map).
// Отбери студентов с оценкой выше 60 (filter).
// Найди первого студента с оценкой ниже 50 (find).
// Посчитай среднюю оценку по группе (reduce, затем делим на длину).
// Проверь, есть ли хотя бы один неактивный студент (some).
// Проверь, все ли студенты набрали больше 30 (every).
// Создай массив строк «Айгуль: 85 баллов» (map).
// Посчитай количество активных студентов (filter + length).
// Найди студента с самой высокой оценкой (reduce).
// Создай массив имён только активных студентов (filter + map).

const massOfNames = students.map((el) => {
    return el.name;
})
console.log(massOfNames);

const gradeMore = students.filter((el) => {
    return el.grade > 60;
})
console.log(gradeMore);

const gradeLess = students.find((el) => {
    return el.grade < 50;
})
console.log(gradeLess);
const gradesOnly = students.map((el) => {return el.grade})
const middleGrade = gradesOnly.reduce((prev, el) => {
    return prev + el;
}, 0)
console.log(middleGrade/students.length);

const isActive = students.some((el) => {
    return el.active === false;
})
console.log(isActive);

const everyMoreGrade = students.every((el) => {
    return el.grade > 30;
})
console.log(everyMoreGrade);

const againMass = students.map((el) => {
    return  el.name + ": " +  el.grade + " баллов"

})
console.log(againMass);

const howManyIsActive = students.filter((el) => {
    return el.active === true;
})
console.log(howManyIsActive.length);

const biggestGrade = students.reduce((el, prev) => {
    if (el.grade > prev.grade) {
        return el;
    }
    return prev;
})
console.log(biggestGrade);

const isActiveTrue = students.filter((el) => {
    return el.active === true;
})
const activeMass = isActiveTrue.map((el) => {
    return el.name
})
console.log(activeMass);



//Задание 3. Деструктуризация, spread, rest
// 3.1 Деструктуризация
// Дан объект:
const user = {
    id: 1,
    username: "coder_01",
    address: { city: "Бишкек", street: "Чуй 120" }
};
// Через деструктуризацию получи username и city (city вложен в address).
// Также через деструктуризацию получи country со значением по умолчанию "Кыргызстан"
// — этого поля в объекте нет, должно подставиться значение по умолчанию.
const {username,address:{city},country = "Кыргызстан"} = user
console.log(username,city,country);


//3.2 Spread и rest
// С помощью rest напиши функцию average(...numbers), которая возвращает среднее
// арифметическое любого количества чисел.
// С помощью spread объедини массивы [1, 2, 3] и [4, 5, 6] в один и добавь в начало число 0.
// С помощью spread создай копию объекта user из 3.1, измени в копии username и
// убедись, что оригинал не изменился.

const  average = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum/numbers.length;
}
console.log(average(1,2,3,19,123));

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]
let numbersTogether = [0, ...numbers1, ...numbers2];

console.log(numbersTogether);

const copyUser = {...user}
copyUser.username = "coder_02";
console.log(username)
console.log(user.username)
console.log(copyUser.username)


//Задание 4. JSON, LocalStorage, SessionStorage
// 4.1 JSON
// Дан объект:
const settings = { theme: "dark", fontSize: 16, notifications: true };
// Преобразуй объект в JSON-строку (JSON.stringify) и выведи её в консоль.
// Преобразуй строку обратно в объект (JSON.parse) и выведи значение theme.

const toJSONSettings = JSON.stringify(settings) ;
console.log(toJSONSettings);
const fromJSONSettings = JSON.parse(toJSONSettings) ;
console.log(fromJSONSettings.theme);


//4.2 LocalStorage
// Сохрани объект settings в localStorage под ключом "settings" (помни, что хранить можно только строку — используй JSON.stringify).
// Прочитай значение обратно из localStorage и преобразуй его в объект (JSON.parse).
// Выведи в консоль значение fontSize из полученного объекта.
localStorage.setItem("settings",toJSONSettings);
const gettedValue = JSON.parse(localStorage.getItem("settings"));

console.log(gettedValue.fontSize);

