var preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta')
preguntas.forEach((pregunta) =>{
    pregunta.addEventListener('click' , (e)=>{
       
        e.currentTarget.classList.toggle('activa'); 

       var respuesta = pregunta.querySelector('.respuesta')
       var alturaReal = respuesta.scrollHeight;
       if(!respuesta.style.maxHeight){
          respuesta.style.maxHeight = alturaReal + 'px';
       }else{
        respuesta.style.maxHeight = null
       }
    })
}); 