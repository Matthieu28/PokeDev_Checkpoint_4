const router = require("express").Router();

const userRoutes = require("./user.routes");
const roleRoutes = require("./role.routes");
const avatarRoutes = require("./avatar.routes");

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/avatars", avatarRoutes);

module.exports = router;
