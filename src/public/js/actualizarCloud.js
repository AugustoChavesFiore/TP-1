document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const id = form.dataset.id;
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const response = await fetch(`/actualizarCloud/${id}`, {
          method: "PUT",
          body: formData,
        });

        
        if (response.status !== 201) {
          return Swal.fire({
            title: 'Error',
            text: 'Hubo un error al actualizar la imagen',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
        const data = await response.json();
        
      Swal.fire({
        title: 'Imagen actualizada',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
  
    setTimeout(() => {
        window.location.href = "/galeria"
    }, 2000);
    
       
  });
  });