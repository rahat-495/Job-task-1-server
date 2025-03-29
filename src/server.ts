
import mongoose from "mongoose";
import app from "./app"
import {Server} from "http";
import config from "./app/config";

let server : Server ;
const main = async () => {

    try {

        await mongoose.connect(config.databaseUrl as string) ;
        server = app.listen(config.port , () => {
            console.log(`server are running at port ${config.port} !`) ;
        })
        
    } catch (error) {
        console.log(error)   
    }

}

main() ;

process.on("unhandledRejection" , () => {
    if(server){
        server.close(() => {
            process.exit(1) ;
        })
    }
    process.exit(1) ;   
})

process.on("uncaughtException" , () => {
    process.exit(1) ;   
})
