const express = require("express");
const jwtAuth=require("../middleware/jwtAuth.js")
const router = express.Router();

const { home , signup , login ,logout, getuser,addCompetition,delCompetition,editCompetition,addPhoto,getCompetitions,getCompDescription,deleteImage} = require("../userControllers/controllers.js");

router.get("/",home);
router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",jwtAuth,logout);

router.get("/getuser",jwtAuth,getuser);
router.post("/addComp",jwtAuth,addCompetition)
router.delete("/deleteComp/:id", jwtAuth, delCompetition);
router.post("/editComp",jwtAuth,editCompetition)
router.post("/addPhoto",jwtAuth,addPhoto)
router.delete("/deleteImage/:id", jwtAuth, deleteImage);
router.get("/getCompDescription/:id",getCompDescription)
router.get("/getCompetitions",getCompetitions)


module.exports = router