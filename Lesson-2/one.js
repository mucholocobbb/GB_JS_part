

alert("задание 1");

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
// в данном примере используем префиксный инкремент, 
// переменная (а) увеличивается на 1 и результат записывается в (с)

//пример 2
d = b++;
alert(d); //ответ: 1
// в данном примере используем постфиксный инкремент, 
// переменная (b) увеличивается на 1 но результат не записывается в (d) 
// произойдет это после выполнения этой строки.

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
// в данном примере присваиваем новое значение переменной (с)
// а именно  переменную (а == 2) увеличиваем на единицу =>(a == 3) и прибавляем число 2
// Поскольку имеем дело с префиксным инкрементом , то результат операции с (а)
// сразу записывается в (с)

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
// в данном примере присваиваем новое значение переменной (d )
// а именно  переменную (b == 2) увеличиваем на единицу =>(b == 3) и прибавляем число 2
// Поскольку имеем дело с постфиксным инкрементом , то результат операции с (b)
//  записывается в (d) без учета увеличения (d)


alert(a); //3 на этой строке все операции с увеличением на единицу выполнятся
alert(b); //3



