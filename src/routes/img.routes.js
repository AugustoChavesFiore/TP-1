
const { vistaPrincipal } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);



module.exports=router;