"use strict"


// console.log("module index started")

// function test () {
//     console.log("test fonksiyonu çalıştı")
// }

// module.exports = test

/*-------------------------------------------------------*/

//? Çoklu Fonksiyonları Exportlama

//! Array
// function test1 () {
//     console.log("test1 fonksiyonu çalıştı")
// }
// function test2 () {
//     console.log("test2 fonksiyonu çalıştı")
// }
// function test3 () {
//     console.log("test3 fonksiyonu çalıştı")
// }

// module.exports = [
//     test1,
//     test2,
//     test3
// ]

//!Obje

// module.exports = {
//     test1,
//     test2,
//     test3
// }

//! Farklı Exportlama Yöntemi
// module.exports.test1 = test1
// module.exports.test2 = test2
// module.exports.test3 = test3


// module.exports.func1 =function() {
//     console.log("test1 fonksiyonu çalıştı")
// }
// module.exports.func2 =function() {
//     console.log("test2 fonksiyonu çalıştı")
// }
// module.exports.func3 =function() {
//     console.log("test3 fonksiyonu çalıştı")
// }

//!Exportlama

module.exports = {
    test1: function() {
        console.log("test1 çalıştı")
    },
    test2: function() {
        console.log("test2 çalıştı")
    },
    test3: function() {
        console.log("test3 çalıştı")
    },
}