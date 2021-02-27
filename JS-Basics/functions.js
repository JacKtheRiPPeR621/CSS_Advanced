console.log(A())  /* JavaScript Hoisting  */

function A(){     /* function declaration */
    return 'A'
}
function B(){
    return 'B'
}

console.log(gamma())   /* Reference Error  */

let gamma = function() {   /* Intialization  */
    return 'C'
}