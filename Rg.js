//ДЗ 1
let text = "Sample text without the letter A and with more than six characters";
let regex = /^((?!A).){6,}$/i;
let result = text.match(regex);

if (result) {
  console.log(`Результат пошуку: ${result[0]}`);
} else {
  console.log("Рядок, що задовольняє умовам, не знайдено.");
}

let text2 = "Without symbol";
let result2 = text2.match(regex);

if (result2) {
  console.log(`Результат пошуку: ${result2[0]}`);
} else {
  console.log("Рядок, що задовольняє умовам, не знайдено.");
}



//ДЗ 2
let arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@gmail.ru",
  },
];

let trustedDomains =
  /^(?=.*@((gmail\.com)|(yahoo\.com))$)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,4})$/;

let trustedEmails = arr.filter((obj) => trustedDomains.test(obj.email));

console.log(trustedEmails);
