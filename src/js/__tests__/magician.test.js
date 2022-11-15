import { Character } from "../index.js";
import { Magician } from "../magician.js";

test ('check Magician class', () => {
    const hero = new Magician('Alex', 'Magician');
    const expected = {name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const magician = new Magician('Alex', 'Magician');
    magician.levelUp();
    expect(2).toEqual(magician.level);
});

test('Проверка повышения левла при health < 0', () => {
    const magician = new Magician('Alex', 'Magician');
    magician.health = -1;
    expect(() => magician.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const magician = new Magician('Alex', 'Magician');
    magician.damage(10);
    expect(92.5).toEqual(magician.health);
});

test('Проверка damage при health < 0', () => {
    const magician = new Magician('Alex', 'Magician');
    magician.health = -1;
    expect(() => magician.damage(10)).toThrow();
});