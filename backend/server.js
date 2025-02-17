const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app =require("./app") 

dotenv.config({
    path:"./.env"
})

    
        mongoose.connect(process.env.MONGO_URI).then(() =>{
            console.log('Mongodb connected successfully.');
        }).catch((error) => {
            console.log(error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`SERVER LISTEN AT ${process.env.PORT}`);
        })
