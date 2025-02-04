const {Router} = require('express');
const { Productcard } = require('../Model/Productmodel');
const { productupload } = require('../../multer');

const productrouter = Router();

productrouter.get('/',(req,res)=>{
    res.send('Productcard')
})

productrouter.post('/',productupload.array('files'),async(req,res)=>{
    const {name,description,price,ratings,email,category,stock,numOfReviews,reviews}=req.body;
    const images = req.files.map(file=>file.path);
    try{
        const seller = await Productmodel.findOne({email:email});
        if(!seller){
            return res.status(400).json({message:"Seller not found"});
        }

        if(images.length==0){
            return res.status(400).json({message:"Please upload atleast one image"});
        }
        await Productmodel.create({ 
            name:name,
            description:description,
            price:price,
            ratings:ratings,
            email:email,
            images:images,
            category:category,
            stock:stock,
            numOfReviews:numOfReviews,
            reviews:reviews,
        });
         
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
    

})


module.exports = productrouter;