//Дз 2
var x = 0, sum = 0;
        while (x < 100) {
            x++;
           if (x%3 == 0) 
           continue;
           sum = x+sum;
      }
       console.log(sum)






//Дз 3
       function pow(x, y) {
  var result = x;

  for (var i = 1; i < y; i++) {
   result *= x;
 }

  return result;
}

var x = prompt("x?", '');
var y = prompt("y?", '');

if (y >= 1 && y % 1 == 0) {
  alert( pow(x, y) );
} else {
  alert(`Ступінь ${y} не підтримується, використовуйте натуральное число`);
}

    


// Дз 1

var rows = 5;
 var pattеrn = "";
 
for (var n = 1; n <= rows; n++) {
   
   for (var num = 1; num <= n; num++) {
      pattеrn += "*";
   }
   pattеrn += "\n";
}
console.log(pattеrn);