const add = (x,y) => x + y 

const PI = 3.14159

const square = x => x * x 

// export all functions in single object
module.exports = {add, PI, square}


// exporting each function 
// module.exports.add = add
// module.exports.PI = PI
// module.exports.square = square

// would be the same as 
// exports.add = add 
// exports.square = square
