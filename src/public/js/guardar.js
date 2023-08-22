

const imgServidor=() => {
  const form = document.querySelector("#form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch("/img", {
        method: "POST",
        body: formData,
      });
      
      if (response.status !== 201) {
        return Swal.fire({
          title: 'Error',
          text: 'Hubo un error al cargar la imagen',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
      const data = await response.json();
      
    Swal.fire({
      title: 'Imagen Cargada',
      text: data.message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
  });

  setTimeout(() => {
      window.location.href = "/galeria"
  }, 2000);
  
     
});
  
};

const imgCloud= () => {
  const formCloud = document.querySelector("#formCloud");

  formCloud.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formCloud);
    const response = await fetch("/imgCloud", {
        method: "POST",
        body: formData,
      });
      
      if (response.status !== 201) {
        return Swal.fire({
          title: 'Error',
          text: 'Hubo un error al cargar la imagen',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
      const data = await response.json();
      
    Swal.fire({
      title: 'Imagen Cargada',
      text: data.message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
  });

  setTimeout(() => {
      window.location.href = "/galeria"
  }, 2000);
  
     
})
};


document.addEventListener('DOMContentLoaded',()=>{
   imgServidor();
   imgCloud();
});