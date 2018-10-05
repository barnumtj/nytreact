const router = require("express").Router();
const articleRoutes = require("../api/articles");

// Article & Comment routes
router.use("/articles", articleRoutes);

module.exports = router;