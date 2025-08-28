let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new String();
 * new number(); 12
 * new Boolean(); true false
 * 
 * El value of tambien los tienen los numbers y los booleans
 * 
 */

function Usuario(){
    this.name = 'Kenier';
    
}

let user = new Usuario();
console.log(user.constructor);

const s1 = 1+1;
const s2 = new String ("1 + 1");
console.log(eval(s1), eval(s2));
console.log(s2.valueOf());