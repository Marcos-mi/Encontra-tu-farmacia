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
            <div class="swiper-slide">
                    <img src="img/hospitales/hospital-argerich.jpg" alt="">
                    <h3>${post[i].efector}</h3>
                    <h4>${post[i].clasif_int}</h4>
                    <p>Direccion:${post[i].direccion}</p>
                    <a href="https://www.google.com/maps/dir//${post[i].direccion}/@${longitud},${latitud},17z" target="_blank">Ubicación</a>
            </div>`;   
                    
          
        } 

        } catch (error) {
            console.error('Error en la conversión. Información del error:');
            console.error(error.message);
        }
        
    }
});
req.send();

