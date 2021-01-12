import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import users from '../models/userModel.js'

const routeAuth =  expressAsyncHandler (async (req,res,next)=>{
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        console.log("TOKEN FOUND NOW VERIFYING TOKEN")
        token = req.headers.authorization.split(" ")[1]
        try {
            const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
            console.log("TOKEN VERIFIED", decodedToken)
            req.user = await users.findById(decodedToken.id).select("-password")
            console.log(req.user)
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Unauthorized, Token Not VERIFIED")
        }
    }
    if (!token){
        res.status(401)
        throw new Error("Unauthorized, Token Not Found")
    }
    
})

export { routeAuth }