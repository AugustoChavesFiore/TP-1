const path = require('path');
const ctrl={};

//vistas
ctrl.vistaPrincipal=(req,res)=>{
    res.render('index');  
  };
ctrl.vistaGaleria=(req,res)=>{
    res.render('galeria');  
  };
    
//crud
ctrl.guardarImg=(req,res)=>{
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No hay archivo');
    }
    let file=req.files.archivo;
    let filePath = path.join(__dirname,`../public/upload/${file.name}`)

    file.mv(filePath, function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('Archivo cargado!');
    });    
};
ctrl.eliminarImg=(req,res)=>{
    
};



module.exports=ctrl;