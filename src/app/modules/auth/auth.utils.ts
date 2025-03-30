
import jwt from "jsonwebtoken" ;

export const createToken = async (jwtPayload : {email : string} , secret : string , expiresIn : string) => {
    return jwt.sign( jwtPayload , secret , { expiresIn } as jwt.SignOptions )
}
