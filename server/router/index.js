const Router = require("express").Router;
const router = new Router();

router.use("/users");
router.use("/tocken");
router.use("/material");

module.exports = router;