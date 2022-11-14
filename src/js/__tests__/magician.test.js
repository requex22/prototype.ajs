import { Character } from "../index.js";
import { Magician } from "../magician.js";

test ('check Magician class', () => {
    const hero = new Magician('Alex', 'Magician');
    const expected = {name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
    expect(hero).toEqual(expected);
});