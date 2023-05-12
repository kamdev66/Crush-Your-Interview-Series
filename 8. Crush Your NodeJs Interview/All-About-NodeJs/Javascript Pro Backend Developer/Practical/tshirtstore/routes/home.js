const express=require('express')
const router=express.Router()  //router ka instance liya aur sabse pahle ab isko export kr dena h

const {home,homeDummy}=require('../controllers/homeController')
router.route('/').get(home)
router.route('/dummy').get(homeDummy)

module.exports=router;