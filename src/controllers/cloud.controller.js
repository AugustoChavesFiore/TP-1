const imgCloud = require("../model/cloud.model");
const ctrlCloud={};
const cloudinary=require('../util/cloudinary');

ctrlCloud.actualizarCloud=(req,res)=>{
    const { id } = req.params;
    res.render('actualizarCloud',{ id });  
  };

ctrlCloud.guardarImg=async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No hay archivo');
    }
  
    const file = req.files.archivo;
    console.log(file.tempFilePath);
    try {
      const respon = await cloudinary.uploader.upload(file.tempFilePath);
  
      const nuevaImg = await imgCloud.create({
        imgUrl: respon.secure_url,
      });
  
      res.send('Imagen guardada en Cloudinary.');
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      res.status(500).send('Error al subir la imagen');
    }
  };

ctrlCloud.motrarImg= async (req, res) => {
    try {
      const imagenes = await imgCloud.findAll();
      res.json(imagenes);
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
      res.status(500).send('Error al obtener las imágenes.');
    }
  };

ctrlCloud.editarImg= async (req, res) => {
    const imagenId = req.params.id;
  
    try {
      const imagen = await imgCloud.findByPk(imagenId);
  
      if (!imagen) {
        return res.status(404).json({message:'Imagen no encontrada'});
      }
  
      const file = req.files.archivo;
  
     
      const respon = await cloudinary.uploader.upload(file.tempFilePath);
  
  
      await imagen.update({
        imgUrl: respon.secure_url,
      });
  
      res.status(201).json({message:'Imagen actualizada exitosamente en Cloudinary y en la base de datos'});
    } catch (error) {
      console.error('Error al actualizar la imagen en Cloudinary:', error);
      res.status(500).json({message:'Error al actualizar la imagen en Cloudinary'});
    }
  };

ctrlCloud.borrarImg= async (req, res) => {
    const imagenId = req.params.id;
  
    try {
      const imagen = await imgCloud.findByPk(imagenId);
  
      if (!imagen) {
        return res.status(404).json({message:'Imagen no encontrada'});
      }
  
      // Eliminar la imagen de Cloudinary
      await cloudinary.uploader.destroy(imagen.public_id);
  
      // Eliminar la imagen de la base de datos
      await imagen.destroy();
  
      res.jason({message:'Imagen eliminada de Cloudinary y de la base de datos.'});
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
      res.status(500).json({message:'Error al eliminar la imagen.'});
    }
  };

module.exports= ctrlCloud;