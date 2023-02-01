const router = require("express").Router();

const userRoutes = require("./user.routes");
const roleRoutes = require("./role.routes");
const avatarRoutes = require("./avatar.routes");
const tierRoutes = require("./tier.routes");
const pokemonRoutes = require("./pokemon.routes");

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/avatars", avatarRoutes);
router.use("/tiers", tierRoutes);
router.use("/pokemons", pokemonRoutes);

module.exports = router;
