import { Character } from "../index";
import { Bowman } from "../index";
import { Swordsman } from "../index";
import { Magician } from "../index";
import { Undead } from "../index";
import { Zombie } from "../index";
import { Daemon } from "../index";

test ('check Bowman class', () => {
    const hero = new Bowman('Alex', 'Bowman');
    const expected = {name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25};
    const received = hero;
    expect(received).toEqual(expected);
});

test ('check Swordsman class', () => {
    const hero = new Swordsman('Alex', 'Swordsman');
    const expected = {name: 'Alex', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    const received = hero;
    expect(received).toEqual(expected);
});

test ('check Magician class', () => {
    const hero = new Magician('Alex', 'Magician');
    const expected = {name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
    const received = hero;
    expect(received).toEqual(expected);
});

test ('check Undead class', () => {
    const hero = new Undead('Alex', 'Undead');
    const expected = {name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25};
    const received = hero;
    expect(received).toEqual(expected);
});

test ('check Zombie class', () => {
    const hero = new Zombie('Alex', 'Zombie');
    const expected = {name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10};
    const received = hero;
    expect(received).toEqual(expected);
});

test ('check Daemon class', () => {
    const hero = new Daemon('Alex', 'Daemon');
    const expected = {name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40};
    const received = hero;
    expect(received).toEqual(expected);
});