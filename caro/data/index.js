const { json } = require("express");

const getProductos= (callback) =>{
  const url = "https://fakestoreapi.com/products";
  
  fetch(url).then(response  =>{
     return response.json();
  })
  .then((products) =>{
        
        callback(products);
  });
} 

module.exports = getProductos;