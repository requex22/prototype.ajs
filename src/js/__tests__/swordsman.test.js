import { Character } from "../index.js";
import { Swordsman } from "../swordsman.js";

test ('check Swordsman class', () => {
    const hero = new Swordsman('Alex', 'Swordsman');
    const expected = {name: 'Alex', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const swordsman = new Swordsman('Alex', 'Swordsman');
    swordsman.levelUp();
    expect(2).toEqual(swordsman.level);
});

test('Проверка повышения левла при health < 0', () => {
    const swordsman = new Swordsman('Alex', 'Swordsman');
    swordsman.health = -1;
    expect(() => swordsman.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const swordsman = new Swordsman('Alex', 'Swordsman');
    swordsman.damage(10);
    expect(92.5).toEqual(swordsman.health);
});

test('Проверка damage при health < 0', () => {
    const swordsman = new Swordsman('Alex', 'Swordsman');
    swordsman.health = -1;
    expect(() => swordsman.damage(10)).toThrow();
});