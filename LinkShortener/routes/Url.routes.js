const express = require("express")
const {urlModel} = require("../models/UrlSchema")

const urlRouter = express.Router()

urlRouter.get("/",async (req,res)=>{

    const shorturls = await urlModel.find()
    res.render("index",{shorturls:shorturls})

    // res.send("index")
})

urlRouter.post("/shortUrls",async (req,res)=>{
    // console.log(req.body.full)

    const url = req.body.full
    const newshortURL = new urlModel({
        full: url
    })
    await newshortURL.save()
    res.redirect("/")
})

urlRouter.get('/:shortUrl' , async(req,res)=>{
    const shortUrl = await urlModel.findOne({short: req.params.shortUrl})
    if(shortUrl == null){
        return  res.sendStatus(404)
    }
   await  shortUrl.clicks ++;
      shortUrl.save()
   res.redirect(shortUrl.full)
    
})


urlRouter.get('/delete/:id',async(req,res)=>{
   const id = req.params.id
    
   try{
    await urlModel.deleteOne({ _id : id})
    // console.log('delete');
    res.redirect('/')



   } catch(err){
        console.log(err);
   }


})

module.exports = {
    urlRouter
}