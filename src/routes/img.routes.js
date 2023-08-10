
const { vistaPrincipal, guardarImg } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);

router.post('/img',guardarImg);



module.exports=router;