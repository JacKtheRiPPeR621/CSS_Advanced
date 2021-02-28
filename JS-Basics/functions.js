console.log(A())  /* JavaScript Hoisting  */

function A(){     /* function declaration */
    return 'A'
}
function B(){
    return 'B'
}

// console.log(gamma())   /* Reference Error  */

let gamma = function() {   /* Intialization  */
    return 'C'
}

function area( height , width){
    if(width == undefined){    /* if(!width) */
        return Math.PI * height * height
    }
    return height * width
}

console.log('area 3,4' , area(3,4))
console.log('area 4' , area(4))


function hello(){
    console.log('hello world' + arguments[0] + arguments[1])
}

console.log(hello(1,2))
console.log(hello('vivek', 'puneet'))