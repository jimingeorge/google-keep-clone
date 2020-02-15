const mongoose = require('mongoose')

const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/google-keep-clone',{useNewUrlParser:true,useUnifiedTopology:true}) 
        .then(()=>console.log('connected to DB'))
        .catch(err=>console.log(err))
}

module.exports = setupDB