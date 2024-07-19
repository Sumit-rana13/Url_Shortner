const express = require("express");
const router = require("./router/url")
const {connectMongoDb} = require("./connect")
const URL = require("./model/url")
const path = require("path")
const staticRouter = require("./router/staticRouter")


const app = express();
const PORT = 8001;


//connection--
// connectMongoDb("mongodb://localhost:27017/shortUrl1").then(()=>console.log("mongoDb server connected"));
connectMongoDb("mongodb://localhost:27017/short-url").then(()=>console.log("MongoDb server is connected"));

//middle-ware--
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views", path.resolve("./view"));


//routes--
app.use("/url",router);

app.use("/",staticRouter);

app.use(express.static(path.join(__dirname, 'public')));

// app.get("/url/:shortId",async (req, res)=>{
//     const shortId = req.params.shortId;
//     const entry = await URL.findOneAndUpdate({
//         shortId
//     },{$push:{vistHistory:{
//         timestamps: Date.now()
//     }}});

//     return res.redirect(entry.redirectURL);

// })


// app.get("/test",async (req, res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home',{
//         urls: allUrls,
//     });
// })


app.listen(PORT, console.log(`Server started at Port: ${PORT}`));

