const Router = require("express").Router;
const router = new Router();

router.post("/registration");
router.post("/login");
router.post("/logout");
router.post("/refresh");
router.post("/refresh2");

module.exports = router;
