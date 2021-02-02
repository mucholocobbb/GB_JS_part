'use strict';

console.log("ЗАДАНИЕ 3!")

const products1 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let j = 0;


let newProduct = products1.forEach(function(element){
    let newPrice = products1[j].price - (products1[j].price * 0.15);
    let saleProduct = Object.assign({},element,{salePrice: newPrice});
    console.log(saleProduct);
    j++    
})

