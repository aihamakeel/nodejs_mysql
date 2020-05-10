const router = require('express').Router();
const User = require('../models/User');

//Users routes -------------------------------
//get All 
router.get('/',async (req,res)=>{
    try {
        const user = await User.all();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    } 
});
//get one
router.get('/:userID',async (req,res)=>{
    try {
        const user = await User.one(req.params.userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error); 
    }
});

//get delete
router.delete('/:userID',async (req,res)=>{
    try {
        const user = await User.delete(req.params.userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error); 
    }
});
//export users route
module.exports = router;