function convertUnits(value, inputUnit, outputUnit) {
    let result;

    switch (inputUnit) {
        case "км":
            switch (outputUnit) {
                case "м":
                    result = value * 1000;
                    console.log(`${value} км це ${result} м.`);
                    break;
                default:
                    console.log("Невідома одиниця виводу.");
            }
            break;
        case "год":
            switch (outputUnit) {
                case "хв":
                    result = value * 60;
                    console.log(`${value} год це ${result} хв.`);
                    break;
                default:
                    console.log("Невідома одиниця виводу.");
            }
            break;
        case "кг":
            switch (outputUnit) {
                case "гр":
                    result = value * 1000;
                    console.log(`${value} кг це ${result} гр.`);
                    break;
                default:
                    console.log("Невідома одиниця виводу.");
            }
            break;
        default:
            console.log("Невідома одиниця вводу.");
    }
}


let value = parseFloat(prompt("Введіть значення:"));
let inputUnit = prompt("Введіть вхідну одиницю виміру (км, год, кг):").toLowerCase();
let outputUnit = prompt("Введіть вихідну одиницю виміру (м, хв, гр):").toLowerCase();


convertUnits(value, inputUnit, outputUnit);
