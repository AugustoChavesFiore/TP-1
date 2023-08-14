
const { guardarImg, editarImg, borrarImg,motrarImg, actualizarCloud } = require('../controllers/cloud.controller');
const { vistaPrincipal, vistaGaleria, guardarImgBd, traerImagenes, eliminarImg, actualizarImg, vistaActualizar } = require('../controllers/img.controllers');

const router=require('express').Router();


router.get ("/",vistaPrincipal);
router.get ("/actualizar/:id",vistaActualizar);
router.get ("/galeria",vistaGaleria);

//crud
router.get('/obtenerImg',traerImagenes);
router.post('/img',guardarImgBd);
router.put('/actualizar/:id',actualizarImg);
router.delete('/delete/:id',eliminarImg);

//cloud
router.get ("/actualizarCloud/:id",actualizarCloud);

//crud
router.get('/obtenerImgCloud',motrarImg);
router.post('/imgCloud',guardarImg);
router.put('/actualizarCloud/:id',editarImg);
router.delete('/deleteCloud/:id',borrarImg);




module.exports=router;