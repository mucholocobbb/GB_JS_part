'use strict';

console.log("ЗАДАНИЕ 4!")

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg", 
        ]
    }, 
    {
        id: 5,
        price: 499,
        photos: []
    }, 
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]    
    },
    {
        id: 8,
        price: 78, 
    },
];

let i = 0;
let photoProduct = []

 products.forEach(function(photo){
    
    if ("photos" in photo && products[i].photos.length > 0){
        let a = photoProduct.push(photo)
    } 
    i++;
})

console.log(photoProduct)  // я целый день просидел пытаясь использовать filter , но так и не понял как его применить на этом  примере. В примере в доп видео все понятно. Возможно я зациклился на определении нужного обьекта в массиве по длинне вложенного массива photos. Как не пытался прикинуть, не смог слезть с этой идеи.  


products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
});

console.log(products)