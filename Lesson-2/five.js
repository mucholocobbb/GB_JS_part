function pushParamA(){
    return num1 = +prompt("Введите число 1 :");
}
function pushParamB(){
    return num2 = +prompt("Введите число 2 :");
}
function pushParamC(){
    return mat = prompt("Введите одну из математических операций * / + - ");
}

function sum(a,b){
    let c = a + b;
    return c ;
}

function min(a,b){
    let c = a - b;
    return c ;
}

function pro(a,b){
    let c = a * b;
    return c ;
}

function del(a,b){
    let c = a / b;
    return c ;
}

let a = pushParamA();
let b = pushParamB();
let c = pushParamC();


function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "*":
            return pro(arg1,arg2)
        case "/":
            return del(arg1,arg2)
        case "+":
            return sum(arg1,arg2)
        case "-":
            return min(arg1,arg2)
        default:

            alert(" Введите верный математический оператор !");
            operation = pushParamC();    
            alert(" Результат вычисления : " + mathOperation(arg1, arg2, operation));         
          
    }
}

if((mathOperation(a, b, c)) !== undefined  ){
    alert (" Результат вычисления : " + mathOperation(a, b, c));
}
