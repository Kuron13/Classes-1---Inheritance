// TODO: write your code here

console.log('worked');


class Character {
  constructor(name, type, attack, defence) {
    if (name.length > 2 && name.length <= 10) {
      this.name = name
    } else {
      throw new Error("Неверные данные. Имя должно содержать 2-10 символов.");
    }
    if (type in allClasses) {
      this.type = type
    } else {
      throw new Error("Неверные данные. Такого типа персонажа не существует.");
    }
    this.health = 100
    this.level = 1
    this.attack = attack
    this.defence = defence
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}

const allClasses = {
  "Bowman" : Bowman,
  "Swordsman" : Swordsman,
  "Magician" : Magician,
  "Undead" : Undead,
  "Zombie" : Zombie,
  "Daemon" : Daemon,
}

export default function createCharacter (name, type) {
  const char = new allClasses[type](name);
  console.log(char)
  return char
}
