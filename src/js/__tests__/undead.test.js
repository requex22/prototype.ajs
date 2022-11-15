import { Character } from "../index.js";
import { Undead } from "../undead.js";

test ('check Undead class', () => {
    const hero = new Undead('Alex', 'Undead');
    const expected = {name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const undead = new Undead('Alex', 'Undead');
    undead.levelUp();
    expect(2).toEqual(undead.level);
});

test('Проверка повышения левла при health < 0', () => {
    const undead = new Undead('Alex', 'Undead');
    undead.health = -1;
    expect(() => undead.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const undead = new Undead('Alex', 'Undead');
    undead.damage(10);
    expect(92.5).toEqual(undead.health);
});

test('Проверка damage при health < 0', () => {
    const undead = new Undead('Alex', 'Undead');
    undead.health = -1;
    expect(() => undead.damage(10)).toThrow();
});