import { Character } from "../index.js";
import { Daemon } from "../daemon.js";

test ('check Daemon class', () => {
    const hero = new Daemon('Alex', 'Daemon');
    const expected = {name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40};
    expect(hero).toEqual(expected);
});