const path = require('path');
const Imagenes = require('../model/img.model');
const fs = require('fs').promises;
const ctrl={};

//vistas
ctrl.vistaPrincipal=(req,res)=>{
    res.render('index');  
  };
ctrl.vistaGaleria=(req,res)=>{
    res.render('galeria');  
  };
  ctrl.vistaActualizar=(req,res)=>{
    const { id } = req.params;
    res.render('actualizar',{ id });  
  };

    //crud
ctrl.traerImagenes=async (req, res) => {
  try {
    const imagenes = await Imagenes.findAll({
      where:{
        estado:true
      }
    });
    res.json(imagenes);
  } catch (error) {
    console.error('Error al obtener las imagenes:', error);
    res.status(500).send('Error al obtener las imagenes.');
  }
};

ctrl.guardarImgBd= async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No hay archivo');
  }
  const file = req.files.archivo;
  const imgName = file.name;

  try {
    // Guardar la imagen en el sistema de archivos local
    const localPath = path.join(__dirname,`../public/upload/${file.name}`)
    await file.mv(localPath);

    // Guardar la información de la imagen en la base de datos
    const nuevaImg = await Imagenes.create({
      imgName: imgName,
      imgPath: localPath,
    });

    res.status(201).json({message:'Imagen cargada y guardada en la base de datos y en el sistema de archivos local.'});
  } catch (error) {
    console.error('Error al cargar y guardar la imagen:', error);
   return res.status(500).json({message:'Error al cargar y guardar la imagen.'});
  }
};

ctrl.actualizarImg= async (req, res) => {
  const imagenId = req.params.id;

  try {
    const imagen = await Imagenes.findByPk(imagenId);

    if (!imagen) {
      return res.status(404).send('Imagen no encontrada');
    }

    const file = req.files.archivo;
    const newImgName = file.name;
    const newImgPath = path.join(__dirname,`../public/upload/${newImgName}`)

    // Eliminar la imagen anterior del sistema de archivos local
    await fs.unlink(imagen.imgPath);

    // Guardar la nueva imagen en el sistema de archivos local
    await file.mv(newImgPath);

    // Actualizar los datos de la imagen en la base de datos
    await imagen.update({
      imgName: newImgName,
      imgPath: newImgPath,
    });

    res.status(201).json({message:'Imagen actualizada en el sistema de archivos y en la base de datos.'});
  } catch (error) {
    console.error('Error al actualizar la imagen:', error);
    res.status(500).json({message:'Error al actualizar la imagen.'});
  }
};

ctrl.eliminarImg=async (req, res) => {
  const imagenId = req.params.id;

  try {
    const imagen = await Imagenes.findByPk(imagenId);

    if (!imagen) {
      return res.status(404).json({message:'Imagen no encontrada'});
    }

    await fs.unlink(imagen.imgPath);

    await imagen.destroy();

    res.status(201).json({message:'Imagen eliminada del sistema de archivos y de la base de datos.'});
  } catch (error) {
    console.error('Error al eliminar la imagen:', error);
    res.status(500).json({message:'Error al eliminar la imagen.'});
  }
};



module.exports=ctrl;