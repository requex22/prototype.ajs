export class Character {
    constructor(name, type) {
        let favoritesTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.length < 2 || name.length > 10) {
            throw new Error('Не корректное имя');
        } else {
            this.name = name;
        }

        if (!favoritesTypes.includes(type)) {
            throw new Error('Не корректный тип');
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
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