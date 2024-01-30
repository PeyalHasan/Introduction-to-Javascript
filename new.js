const visit = ['Bandorban', 'Nikli', 'Sajek'];
console.log(visit.length)
visit.push('Kaptai');
visit.push('sitakondo', 'Niladri');
console.log(visit)
visit.pop();
console.log(visit)

const fruits = ['apple', 'orange', 'banana', 'lemon', 'pineapple', 'watermelon'];
console.log(fruits);
console.log(fruits[3]);
fruits[2] = 'Jambura';
fruits.splice(2,1,'jambora');
fruits.splice(2,1);
console.log(fruits)

const books = [
    "Data Structure & Algorithm",
    "Java Programming",
    "Microprocessor",
    "Digital Electronics",
    "Javascript:The good parts",
    "Python Programming",
    "It support & service",
    "Engineering Drowing"
];
const hasJavaScriptBook = books.includes("Javascript:The good parts");
if(hasJavaScriptBook){
    console.log("The array contain Javascript books.")
}
else{
    console.log("The array do not contain any javascript book ")
}

const book = ["Data Structure & Algorithm",
    "Java Programming",
    "Microprocessor",
    "Digital Electronics"
]
const chack = 3445;
let contract = [123434];
var flash = "[go,back]";
console.log(Array.isArray(book));
console.log(Array.isArray(contract));
console.log(Array.isArray(flash));

const boys = ["Arif", "Rana", "Sojib", "Anamul", "Rashik"];
const girls = ["Halima", "Joly", "Ruma", "Sneha"];
const teacher = ["Solayman", "Arif", "Srabonti", "Binimoy"];
const institute = boys.concat(girls,teacher);
console.log(institute);
