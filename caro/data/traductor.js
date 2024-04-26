const getProductos = require("./index.js");
const translate = require('node-google-translate-skidz');

 
   

    const  translateText = (text, callback) => {
      translate({
        text: text,
        source: "en",
        target: "es"
      }, function(result) {
        callback(result.translation);
      });
    }

     
 

module.exports = translateText;