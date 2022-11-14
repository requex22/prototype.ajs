import { Character } from "../index.js";
import { Swordsman } from "../swordsman.js";

test ('check Swordsman class', () => {
    const hero = new Swordsman('Alex', 'Swordsman');
    const expected = {name: 'Alex', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    expect(hero).toEqual(expected);
});