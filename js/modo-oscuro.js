const btnSwitch = document.querySelector('#switch', 'a');
const textdark = document.querySelectorAll('.mm');
btnSwitch.addEventListener('click', () => {
    
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localStorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
    for (i = 0; i <= textdark.length ; i++) {
        if(localStorage.getItem('dark-mode') === 'true'){
            textdark[i].classList.remove('text-dark')
    
             }else{
               textdark[i].classList.toggle('text-dark') 
             }
            }
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
    textdark[i].classList.toggle('text-dark')
} else {
    document.body.classList.remove('dark');
    document.body.classList.remove('active');
}

   


