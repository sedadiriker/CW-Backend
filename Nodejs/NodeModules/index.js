"use strict"

/*-------------------------------------------------------*/
//? DOTENVv
/*-------------------------------------------------------*/

//! env dosyasını okumak için kullanıyoruz

//? kurulum
// npm i dotenv

//? çalıştır
require('dotenv').config()

console.log(process.env.HOST)
console.log(process.env.PORT)