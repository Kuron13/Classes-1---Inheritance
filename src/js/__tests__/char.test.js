import createCharacter from '../app.js'

const charList = [
  ['Лучник', 'Bowman', {name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}],
  ['Мечник', 'Swordsman', {name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
  ['Маг', 'Magician', {name: 'Маг', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
  ['Нежить', 'Undead', {name: 'Нежить', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}],
  ['Зомби', 'Zombie', {name: 'Зомби', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}],
  ['Демон', 'Daemon', {name: 'Демон', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}],
]
  
test.each(charList)('Testing create character %n with type %t', (name, type, expected) => {
  const result = createCharacter(name, type);
  expect(result).toEqual(expected);
});