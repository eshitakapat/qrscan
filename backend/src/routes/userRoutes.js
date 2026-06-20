const express= require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles= require("../middleware/roleMiddleware");
const router = express.Router();

//only admin can access
router.get("/admin",verifyToken,authorizeRoles("admin"), (req,res)=>{
    res.json({message: "Welcome Admin"});
});

// Both admin and employee can access
router.get("/employee",verifyToken,authorizeRoles("admin", "employee"), (req,res)=>{
    res.json({message: "Welcome Employee"});
});

// Both admin and employee can access
router.get("/customer",verifyToken,authorizeRoles("admin", "employee", "customer"), (req,res)=>{
    res.json({message: "Welcome Customer"});
});

module.exports = router;