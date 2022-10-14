const router = require("express").Router();
router.get("/", (req,res)=>{
    res.end("Home Page")
});
router.get("/about", (req,res)=>{
    res.end("About Page")
});
router.get("/contact", (req,res)=>{
    res.end("Contact Page")
});
 module.exports = router;