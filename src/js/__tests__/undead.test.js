import { Character } from "../index.js";
import { Undead } from "../undead.js";

test ('check Undead class', () => {
    const hero = new Undead('Alex', 'Undead');
    const expected = {name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25};
    expect(hero).toEqual(expected);
});