
import express from "express" ;
import cors from "cors" ;
import cookieParser from "cookie-parser";

const app = express() ;

app.use(express.json()) ;
app.use(cookieParser()) ;
app.use(cors({origin : ['http://localhost:5173'] , credentials : true})) ;

// app.use('/api/v1' , router) ;

app.get('/' , async (req , res) => {
    res.json({message : "The second project server are running !" , success : true}) ;
})

export default app ;
