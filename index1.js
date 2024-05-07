const Person = require("./Person");
let pers1 = new Person(100, 100, 5, 10, 200,1000);
let pers2 = new Person(200,50,2,5,200,2000);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function attack(damot, damdo, skat, hp){
    setInterval(()=>{
        let damage = randomInteger(damot, damdo);
        
        console.log(damage);
    }, skat);
}

attack(pers1.damageOt, pers1.damageDo, pers1.skat);
attack(pers2.damageOt, pers2.damageDo, pers2.skat);