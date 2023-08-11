const path = require('path');
const Imagenes = require('../model/img.model');
const ctrl={};

//vistas
ctrl.vistaPrincipal=(req,res)=>{
    res.render('index');  
  };
ctrl.vistaGaleria=(req,res)=>{
    res.render('galeria');  
  };
    
//crud
// ctrl.guardarImg=(req,res)=>{

//   let file=req.files.archivo;
//   let filePath = path.join(__dirname,`../public/upload/${file.name}`)

//   console.log(req.files);
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No hay archivo');
//   } 
//   file.mv(filePath, function(err) {
//     if (err)
//       return res.status(500).send(err);

//     res.send('Archivo cargado!');}); 
// };
ctrl.traerImagenes=async (req, res) => {
  try {
    const imagenes = await Imagenes.findAll();
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

    res.send('Imagen cargada y guardada en la base de datos y en el sistema de archivos local.');
  } catch (error) {
    console.error('Error al cargar y guardar la imagen:', error);
    res.status(500).send('Error al cargar y guardar la imagen.');
  }
};
ctrl.eliminarImg=(req,res)=>{
    
};



module.exports=ctrl;