//ДЗ 1
function MyIsNaN(value) {
  return value !== value;
}


console.log(MyIsNaN(42));        // false (число)
console.log(MyIsNaN('abc'));     // true (рядок)
console.log(MyIsNaN(null));      // false (null не є NaN)
console.log(MyIsNaN(undefined)); // true (undefined перетворюється в NaN)
console.log(MyIsNaN(NaN));       // true (NaN є NaN)


//ДЗ 2
function pad(str, char, count, isPadStart) {
  const currentLength = str.length;
  const diff = count - currentLength;

  if (diff <= 0) {
    return str;
  }

  const padding = char.repeat(diff);
  return isPadStart ? padding + str : str + padding;
}

//ДЗ 3
function checkProbabilityTheory(count) {
  let generatedNumbers = [];
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    generatedNumbers.push(randomNumber);

    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercentage = (evenCount / count) * 100;
  const oddPercentage = (oddCount / count) * 100;

  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenCount);
  console.log("Не парних чисел:", oddCount);
  console.log(
    "Відсоток парних до не парних:",
    `${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`
  );
}

const paddedString = pad("qwerty", "+", 6, true);
console.log(paddedString);

checkProbabilityTheory(1000);
