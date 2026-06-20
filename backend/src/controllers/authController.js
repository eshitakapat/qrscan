const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res)=> {

    try{
        const { username, password, role} = req.body;

        const existingUser = await User.findOne({ username });

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username, password: hashedPassword, role
        });
        await newUser.save();
        res.status(201).json({message: `User registered with username ${username}`});
    }catch(err){
        res.status(500)
            .json({message: "something went wrong in register"});
    }
};


const login = async (req, res)=> {
    try{
        const { username, password} = req.body;
        const user= await User.findOne({username});
        if(!user){
            return res.status(404).json({message: `User with ${username} not found`});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: `Invalid Credentials`});
        }

        const token = jwt.sign(
            {id: user._id, username:user.username, role:user.role},//_id is automatically generated whenever we create a record in mongodb
            process.env.JWT_SECRET ,
            {expiresIn: "1h"}
        );
        res.status(200).json({
            token,
            role: user.role,
            username: user.username,
            });

    }catch(err){
        res.status(500).json({message: "Something went wrong in login"});
    }
};

module.exports = {
    register,
    login,
};