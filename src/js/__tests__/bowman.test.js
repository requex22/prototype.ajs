import { Character } from "../index.js";
import { Bowman } from "../bowman.js";

test ('check Bowman class', () => {
    const hero = new Bowman('Alex', 'Bowman');
    const expected = {name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const bowman = new Bowman('Alex', 'Bowman');
    bowman.levelUp();
    expect(2).toEqual(bowman.level);
});

test('проверка повышения левла при health < 0', () => {
    const bowman = new Bowman('Alex', 'Bowman');
    bowman.health = -1;
    expect(() => bowman.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const bowman = new Bowman('Alex', 'Bowman');
    bowman.damage(10);
    expect(92.5).toEqual(bowman.health);
});

test('Проверка damage при health < 0', () => {
    const bowman = new Bowman('Alex', 'Bowman');
    bowman.health = -1;
    expect(() => bowman.damage(10)).toThrow();
});