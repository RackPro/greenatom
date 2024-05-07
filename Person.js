let obj={
    base: {
        name: "",
        max_hp: 0,
        hp: 0,
        reg_hp: 0,
        max_mana: 0,
        mana: 0,
        reg_mana: 0,
        fletta: 0, //Для прокачки дерева особых навыков.
        phys_damage_ot: 0,
        phys_damage_do: 0,
        magic_damage_ot: 0,
        magic_damage_do: 0,
        phiz_armor: 0,
        magic_armor: 0,
        chance_uklon: 0,
        chance_block: 0,
        chance_crit: 0,
        damage_from_crit: 0,
        skat: 0,
        vampirizm:0,
    },

    stati:{
        intelect: 0, // мана, реген маны.
        lovkost: 0, // скорость атаки, урон от и до
        sila: 0, // физ урон от и до
        mudrost: 0,
    }
}

class Person{    
    constructor(name, hp, regHp, mana, regMana, damageOt, damageDo, fizzach, uklon, block, vampirizm, skat){
        this.name = name;
        this.hp = hp;
        this.regHp = regHp
        this.mana = mana;
        this.regMana = regMana;
        this.damageOt = damageOt;
        this.damageDo = damageDo;
        this.fizzach = fizzach;
        this.uklon = uklon;
        this.block = block;
        this.vampirizm = vampirizm;
        this.skat = skat;
    }
}

module.exports = Person;