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
       function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
   result *= x;
 }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
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