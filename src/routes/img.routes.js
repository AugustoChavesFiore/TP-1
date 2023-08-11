
const { vistaPrincipal, guardarImg, vistaGaleria, guardarImgBd, traerImagenes } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);
router.get ("/galeria",vistaGaleria);


//crud
// router.post('/img',guardarImg);
router.post('/img',guardarImgBd);
router.get('/obtenerImg',traerImagenes)



module.exports=router;