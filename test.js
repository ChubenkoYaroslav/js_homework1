//var x = 'number' + 3 + 3;//результат буде number33 тому що числа після number будуть оброблюватись як строки,склейка
//console.log(x)
//var empty = null + 3 
//console.log(empty) //В JavaScript null не є “посиланням на неіснуючий об’єкт” або “покажчиком на null”, як може бути в інших мовах програмування.
//Це лише спеціальне значення, яке представляє “нічого”, “порожнє” або “невідоме значення”. Результат 3
//var x = 5 && "qwerty" //результат буде qwerty тому що && - повертає true, якщо обидва операнди є true, інакше повертає false.
//console.log(x)
//var number = +'40' + +'2' + "hillel";
//console.log(number)
//var result = '10' - 5 === 6; //peзультат буде false тому що символ == означає рівність між значеннями , а я не дорівнює 6
//console.log(result)
//var BoolResult = true + false // результат буде 1 , в таких випадках команда показує лише true або false, 1 = true 
//console.log(BoolResult)
//var result = '4px' - 3; // при відніманні числа з рядка результат завжди NaN
//console.log(result)
//var number = '4' - 3; //результат 1 , це також рядок але він має тільки числа, тому прирівнюється до числа
//console.log(number)
//var result = '6' + 3 ** 0; // результат 61 3 у степені 0 дорівнює 1 шість вважається рядком
//console.log(result)
//var number = 12 / '6'; // результат буде 2 , так як 6 в дужках іде потім, воно не вважається рядком
//console.log(number)
//var number = '10' + (5 === 6); // 10 вважається рядком, 5 не дорівнює 6 тому false, результат 10false
//console.log(number)
//var empty = null == ''; //Значення null більш схильне до false, навіть якщо воно не є false , результат false
//console.log(empty)
//var number = 3 ** (9 / 3); //спочатку виконується ділення, бо в дужках (результат 3), потім зведення в степінь (27)
//console.log(number)
//var number = !!'false' == !!'true'; // Повертає true,  значення різні або мають різний тип
//console.log(number)
//var result = 0 || '0' && 1; // з ліва на право, оскільки 0 та рядок то fals , нам повертається значення true 1
//console.log(result)
//var BoolResult = (+null == false) < 1; // пусте значення не може дорівнювати false , тому його і неможливо порівняти з 1, відповідь false
//console.log(BoolResult)
//var BoolResult = false && true || true; в такому випадку якщо є значення true повертається true
//console.log(BoolResultS)
//var BoolResult = false && (false || true); //тут через скобки результат буде false
//console.log(BoolResult)
//var result = (+null == false) < 1 ** 5; // тут так само null не може дорівнювати false, тому сказати чи менше воно 5 також не можливо
//console.log(result)