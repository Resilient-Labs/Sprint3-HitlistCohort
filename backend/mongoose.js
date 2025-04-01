const mongoose = require('mongoose')
const main = async () => {
    if(process.env.NODE_ENV == "test"){
        await mongoose.connect(process.env.TEST_MONGO_URI)
    }
    else{
        await mongoose.connect(process.env.MONGO_URI)
    }
    
}

main().catch((err) => console.log(err))

module.exports = main
