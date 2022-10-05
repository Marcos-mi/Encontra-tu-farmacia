const req = new XMLHttpRequest();
req.open('get', './datos/datos.json');
req.addEventListener('load', e => {
    let datos = document.querySelector('.swiper-wrapper');
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
            
            datos.innerHTML += `
            <div class="swiper-slide text-center">
                    <img src="img/hospitales/HOSPI.jpg" alt="">
                    <h3>${post[i].efector}</h3>
                    <h4>${post[i].clasif_int}</h4>
                    <p>Direccion:${post[i].direccion}</p>
                    <button type="button" class="btn btn-outline-secundary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                    <a href="https://www.google.com/maps/dir//${post[i].direccion}/@${longitud},${latitud},17z" target="_blank" class="colhov">Ubicación</a>
                    </button>
            </div>`;   
                    
          
        } 

        } catch (error) {
            console.error('Error en la conversión. Información del error:');
            console.error(error.message);
        }
        
    }
});
req.send();

