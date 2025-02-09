// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.damage = damage;
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

function random(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);

  return randomIndex;
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const indexViking = random(this.vikingArmy);
    const indexSaxon = random(this.saxonArmy);
    let damageDealt;

    damageDealt = this.saxonArmy[indexSaxon].receiveDamage(
      this.vikingArmy[indexViking].strength
    );

    if (this.saxonArmy[indexSaxon].health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return damageDealt;
  }

  saxonAttack() {
    const indexViking = random(this.vikingArmy);
    const indexSaxon = random(this.saxonArmy);
    let damageDealt;

    damageDealt = this.vikingArmy[indexViking].receiveDamage(
      this.saxonArmy[indexSaxon].strength
    );

    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return damageDealt;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
