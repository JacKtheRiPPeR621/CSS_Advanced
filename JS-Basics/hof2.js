function creategreeting( greeting){

    function greet(name){
        console.log(greeting, name)
    }
    return greet;
}

function getname() {
    return document.getElementById('namebox').value
}

let g1= creategreeting('Good Morning')
let g2= creategreeting('Good Evening')
// console.log(typeof g1())
// console.log(g1('Vivek'))
// console.log(g2('Mehul'))