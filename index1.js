const Person = require("./Person");

//                              hp        om       ot   do  zach ukl blc vamp      skat
let pers1 = new Person("Sasha", 4000, 40, 100, 10, 110, 240, 400, 0, 20, 27,  1500);
let pers2 = new Person("Lexa1",  2000, 40, 50, 10,  200, 400,  50, 20, 0, 12,  1300);
let pers3 = new Person("Lexa2",  2000, 40, 50, 10,  200, 400,  50, 20, 0, 12,  1400);
let pers4 = new Person("BOSS",  10000, 40, 50, 10,  300, 600,  600, 20, 0, 12, 1100);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function regen(obj){
    setInterval(()=>{
        obj.hp+=obj.regHp; //максимальная мана
        obj.mana+=obj.regMana;
    },1000);
}
function attack(obj1, obj2){
    let inter = setInterval(()=>{
        let damage = randomInteger(obj1.damageOt, obj1.damageDo); //Наносимый дамаг
        damage=Math.floor(damage - obj2.fizzach*0.35); //Работа физ защиты
        if (damage<0) damage=0; //Проверка урона
        let chance1 = randomInteger(0, 100);
        if (chance1<obj2.uklon) damage = 0; //Уклонился
        let chance2 = randomInteger(0, 100);
        if (chance2<obj2.block) damage = 0; //Блок
        let healHP = Math.floor(damage*obj1.vampirizm*0.01);
        obj1.hp+=healHP; //Вампиризм
        obj2.hp-=damage;
        if (obj2.hp<0){ //Убираем интервал если убит или ОТСТУПИЛ
            clearInterval(inter);
            clearInterval(obj2.interval);
            obj2.hp=0;
            console.log(`Убит - ${obj2.name}`);
            if (obj1.next_frag!==null){
                obj1.next_frag_i++;
                if (obj1.next_frag.length>obj1.next_frag_i)
                    attack(obj1, obj1.next_frag[obj1.next_frag_i]);
            }
        }
        console.log(`Игрок ${obj1.name} нанес ${damage} урона игроку ${obj2.name}. ${chance1<obj2.uklon?"Уклонился":""} ${chance1<obj2.block?"Блок":""} (${obj1.name}-${obj1.hp} __ ${obj2.name}-${obj2.hp})`);
    },obj1.skat);
    obj1.interval = inter;
    return inter;
}
pers4.next_frag = [pers1, pers2, pers3];

attack(pers1, pers4);
attack(pers2, pers4);
attack(pers3, pers4);

attack(pers4, pers1);