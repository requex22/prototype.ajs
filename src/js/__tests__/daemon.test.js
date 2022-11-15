import { Character } from "../index.js";
import { Daemon } from "../daemon.js";

test ('check Daemon class', () => {
    const hero = new Daemon('Alex', 'Daemon');
    const expected = {name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40};
    expect(hero).toEqual(expected);
});

test('Проверка повышения левла при health > 0', () => {
    const daemon = new Daemon('Alex', 'Daemon');
    daemon.levelUp();
    expect(2).toEqual(daemon.level);
});

test('Проверка повышения левла при health < 0', () => {
    const daemon = new Daemon('Alex', 'Daemon');
    daemon.health = -1;
    expect(() => daemon.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const daemon = new Daemon('Alex', 'Daemon');
    daemon.damage(10);
    expect(92.5).toEqual(daemon.health);
});

test('Проверка damage при health < 0', () => {
    const daemon = new Daemon('Alex', 'Daemon');
    daemon.health = -1;
    expect(() => daemon.damage(10)).toThrow();
});