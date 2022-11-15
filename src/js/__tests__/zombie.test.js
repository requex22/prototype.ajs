import { Character } from "../index.js";
import { Zombie } from "../zombie.js";

test ('check Zombie class', () => {
    const hero = new Zombie('Alex', 'Zombie');
    const expected = {name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const zombie = new Zombie('Alex', 'Zombie');
    zombie.levelUp();
    expect(2).toEqual(zombie.level);
});

test('Проверка повышения левла при health < 0', () => {
    const zombie = new Zombie('Alex', 'Zombie');
    zombie.health = -1;
    expect(() => zombie.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const zombie = new Zombie('Alex', 'Zombie');
    zombie.damage(10);
    expect(92.5).toEqual(zombie.health);
});

test('Проверка damage при health < 0', () => {
    const zombie = new Zombie('Alex', 'Zombie');
    zombie.health = -1;
    expect(() => zombie.damage(10)).toThrow();
});