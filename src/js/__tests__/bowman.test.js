import { Character } from "../index.js";
import { Bowman } from "../bowman.js";

test ('check Bowman class', () => {
    const hero = new Bowman('Alex', 'Bowman');
    const expected = {name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25};
    expect(hero).toEqual(expected);
});