const AbstractManager = require("./AbstractManager");

class PokemonManager extends AbstractManager {
  constructor() {
    super({ table: "pokemon" });
  }

  insert(pokemon) {
    return this.connection.query(`insert into ${this.table} SET ?`, [pokemon]);
  }

  update(pokemon) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      pokemon,
      pokemon.id,
    ]);
  }
}

module.exports = PokemonManager;
