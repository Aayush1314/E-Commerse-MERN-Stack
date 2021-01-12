import users from '../models/userModel.js'
import expressAsyncHandler from 'express-async-handler'
import generateToken from '../util/generateToken.js'
import bcrypt from 'bcryptjs'

const authUser = expressAsyncHandler(async (req,res)=>{
    const { email, password } = req.body
    
    const user =  await users.findOne({email: email})
    
    if (user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid Email or Password" ) 
    }
})

const userProfile = expressAsyncHandler(async (req,res)=>{
    const verifiedUser = await users.findById(req.user._id)
    if (verifiedUser){
        res.json({
            name: verifiedUser.name,
            email: verifiedUser.email,
            isAdmin: verifiedUser.isAdmin
        })
    }
    else{
        res.status(400)
        throw new Error("User Not Found")
    }
})

const registerUser = expressAsyncHandler(async (req,res)=>{
    const {name,email,password} = req.body 
    const checkUser = await users.findOne({email})
    
    if (checkUser){
        res.status(400)
        res.json({message: "User already exist"})
    }
    else{
        const newUser= await users.create({
            name: name,
            email:email,
            password:password
        })
        if (newUser){
            res.json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: generateToken(newUser._id)
            })
        }
        
    }
    
})

export {authUser, registerUser ,userProfile}