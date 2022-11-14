import { Character } from "../index.js";
import { Zombie } from "../zombie.js";

test ('check Zombie class', () => {
    const hero = new Zombie('Alex', 'Zombie');
    const expected = {name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10};
    expect(hero).toEqual(expected);
});