document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch('/img', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.text();
          alert(data);
        } else {
          throw new Error('Error ');
        }
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
        alert('Error al cargar la imagen.');
      }
    });
  });