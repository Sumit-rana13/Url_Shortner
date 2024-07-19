const express = require("express");

const router = express.Router();
const  {handleGeneratedShortUrl, handleGetAnalytics, handleGetById} = require("../controller/url")

router.post("/" , handleGeneratedShortUrl);

router.get("/analytics/:shortId",handleGetAnalytics);

router.get("/:shortId",handleGetById)

module.exports = router;

