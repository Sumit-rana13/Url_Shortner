
const { nanoid } = require('nanoid');
const URL = require("../model/url");

async function handleGeneratedShortUrl(req, res){
    const shortID = nanoid(9);
    const body = req.body;
    if(!body.url) return res.status(400).json({msg:"url is required"})

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        vistHistory : []

    });

    // return res.json({id: shortID});
    return res.render("home",{id: shortID});
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClick: result.vistHistory.length,
        analytics: result.vistHistory,
    })
}

async function handleGetById(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{vistHistory:{
        timestamps: Date.now()
    }}});

    return res.redirect(entry.redirectURL);
}

module.exports = {
    handleGeneratedShortUrl,
    handleGetAnalytics,
    handleGetById,
}