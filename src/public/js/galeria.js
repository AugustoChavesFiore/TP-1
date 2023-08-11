const obtenerDatos = async () => {

    const data = await fetch('/obtenerImg', {
        method: 'GET'
    });
    const img = await data.json();
    return img;
};

const mostrarImg=(datos,container)=>{
    let card='';
    datos.forEach(element => {
        card+=`
    <div class="card" style="width: 18rem;">
        <img src="upload/${element.imgName}" class="card-img-top" alt="${element.imgName}">
        <div class="card-body">
        </div>
    </div>
    `
    container.innerHTML=card;
    });
};


document.addEventListener('DOMContentLoaded',async()=>{
    const imgContainer=document.querySelector('#imgContainer');
    const datos= await obtenerDatos();
    mostrarImg(datos,imgContainer);
});