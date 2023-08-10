const ctrl={};

//vistas
ctrl.vistaPrincipal=(req,res)=>{
    res.render('index');
    
};

//crud
ctrl.guardarImg=(req,res)=>{
    console.log(req.files);
};



module.exports=ctrl;