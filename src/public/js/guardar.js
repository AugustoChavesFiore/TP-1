const form= document.querySelector("#form");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const file=document.querySelector("#file").value
    console.log(file.files);
});