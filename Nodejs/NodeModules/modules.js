"use strict"

// require('./modules/')

// const test = require('./modules/') //! modules içindeki test fonksiyonunu çalıştırdı.
// test()

// require('./modules/')() //!tek fonksiyon olduğu zamanlarda

/*-------------------------------------------------------*/

//? Çoklu Fonksiyonları Exportlama
//! Array
// const arrFunc = require('./modules/')


// console.log(arrFunc)
// arrFunc[0]()
// arrFunc[1]()
// arrFunc[2]()

//? Array Destructuring:
// const [test1,test2,test3] = arrFunc
// test1()
// test2()
// test3()

//!Obje
const objFunc = require('./modules/')

// objFunc.test1()
// objFunc.test2()
// objFunc.test3()

//? Obje Destructuring:
// const {func1,func2,func3} = objFunc
// func1()
// func2()
// func3()

objFunc.test1()
objFunc.test2()
objFunc.test3()