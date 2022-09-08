
const req = new XMLHttpRequest();
req.open('get', './datos/datos.json');
req.addEventListener('load', e => {
    let slider = document.querySelector('.carousel-indicators')
    let datos = document.querySelector('.carousel-inner');
    if (e.target.status === 200) {
        let response = e.target.responseText;
        datos.innerHTML += '';
        try {
            const post = JSON.parse(response);
           
            for (let i = 0 ; i <post.length; i++) {
               
                console.log('post:', post[i]);
            
            let reslonlat = post[i].WKT;
            let arrayreslonlat = reslonlat.split(' ');
            console.log(arrayreslonlat)
            let nuevoarrayreslonlat = arrayreslonlat[1].split('(');
            let nuevoarrayreslonlat1 = arrayreslonlat[2].split(')');
            console.log(nuevoarrayreslonlat1)
            let longitud = nuevoarrayreslonlat1[0]
            let latitud = nuevoarrayreslonlat[1]
            console.log(longitud)
            console.log(latitud)
            let on_off = 'active';
            let boleano = true;
            
            if(i > 0){
                on_off = 'none'
                boleano = false;
            }
            slider.innerHTML +=`<button id="btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class=${on_off} aria-current="${boleano}" aria-label="Slide ${i}"></button>`
            datos.innerHTML += `
                    <div class="card carousel-item ${on_off} col-4">
                    <div class="face front">
                    <img src="img/hospitales/hospital-argerich.jpg" alt="">
                    <h3>${post[i].efector}</h3>
                    </div>
                    <div class="face back">
                    <h3>${post[i].clasif_int}</h3>
                    <p>Direccion:${post[i].direccion}</p>
                    <div class="link">
                        <a href="https://www.google.com/maps/dir/${post[i].direccion}/@${longitud},${latitud},17z" target="_blank">Ubicación</a>
                    </div>
                    </div>`;   
                    
          
        } 

        } catch (error) {
            console.error('Error en la conversión. Información del error:');
            console.error(error.message);
        }
        
    }
});
req.send();
