const express = require("express");
const router = express.Router();

/*
   @route GET api/shops/test
   @desc Tests shops route
   @access Public
*/
router.get("/test", (req, res) =>
  res.json({
    msg: "Shops Works"
  })
);

module.exports = router;
