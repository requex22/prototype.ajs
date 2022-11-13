class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    
        if (name.length < 2 || name.length > 10) {
            throw new Error('Не корректное имя');
        }

        let favoritesTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

        if (!favoritesTypes.includes(this.type)) {
            throw new Error('Не корректный тип');
        }

        switch(this.type) {
            case 'Bowman': 
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
        }
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = this.attack * 0.2;
            this.defence = this.defence * 0.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить уровень умершего');
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowman extends Character {
    constructor (name, type) {
        type = 'Bowman',
        super(name, type)
    }
}

export class Swordsman extends Character {
    constructor (name, type) {
        type = 'Swordsman',
        super(name, type)
    }
}

export class Magician extends Character {
    constructor (name, type) {
        type = 'Magician',
        super(name, type)
    }
}

export class Undead extends Character {
    constructor (name, type) {
        type = 'Undead',
        super(name, type)
    }
}

export class Zombie extends Character {
    constructor (name, type) {
        type = 'Zombie',
        super(name, type)
    }
}

export class Daemon extends Character {
    constructor (name, type) {
        type = 'Daemon',
        super(name, type)
    }
}