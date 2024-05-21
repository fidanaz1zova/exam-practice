const express = require('express')
const  cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const {Schema} = mongoose

const productSchema = new Schema({
      image:{
        type: String,
        require: true,
      },

      title: {
        type: String,
        require: true,
      },

      paragraph: {
        type: String,
        require: true
      }

})

const Product = mongoose.model("Product", productSchema)

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});

    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.post("/product", async(req, res)=>{
    try{
      const {image, title, paragraph} = req.body;
      const product = new Product({
        image,
        title,
        paragraph
      })
      await product.save()
      res.status(201).send(product)
    }catch(err){
      res.status(500).json({
        message: err
      })
    }
  })



const PORT = process.env.PORT
const DB = process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));


 
app.listen(PORT, console.log("PORT is active now!"))