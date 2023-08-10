
const { vistaPrincipal, guardarImg, vistaGaleria } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);
router.get ("/galeria",vistaGaleria);

router.post('/img',guardarImg);



module.exports=router;