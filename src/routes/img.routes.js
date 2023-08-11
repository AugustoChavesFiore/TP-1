
const { vistaPrincipal, vistaGaleria, guardarImgBd, traerImagenes, eliminarImg, actualizarImg, vistaActualizar } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);
router.get ("/actualizar/:id",vistaActualizar);
router.get ("/galeria",vistaGaleria);

//crud
// router.post('/img',guardarImg);
router.get('/obtenerImg',traerImagenes);
router.post('/img',guardarImgBd);
router.put('/actualizar/:id',actualizarImg);
router.delete('/delete/:id',eliminarImg);



module.exports=router;