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
        <a href="/actualizar/${element.id}" class="btn btn-sm btn-warning fa-regular fa-pen-to-square"></a>
        <button class="btn btn-sm btn-danger fa-solid fa-trash" data-id="${element.id}" onClick=eliminar(event)></button>
        </div>
    </div>
    `
    container.innerHTML=card;
    });
};
const eliminar= async (e) => {

    console.log(e)
    const id = e.target.dataset.id;

    const result = await Swal.fire({
        title: '¿Está seguro de eliminar la imagen?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    })

    if (!result.isConfirmed) {
        return;
    }

    const response = await fetch(`/delete/${id}`, {
        method: 'DELETE',
    })

    const data = await response.json();

    if (response.status !== 200) {
        Swal.fire({
            title: 'Error',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    Swal.fire({
        title: 'Imagen eliminada',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    setTimeout(() => {
        window.location.href = "/galeria"
    }, 2000);

}


document.addEventListener('DOMContentLoaded',async()=>{
    const imgContainer=document.querySelector('#imgContainer');
    const datos= await obtenerDatos();
    mostrarImg(datos,imgContainer);
});