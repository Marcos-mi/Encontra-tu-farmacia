
const req = new XMLHttpRequest();
req.open('get', './datos/datos.json');
req.addEventListener('load', e => {
    let datos = document.querySelector('#card');
    if (e.target.status === 200) {
        let response = e.target.responseText;
        datos.innerHTML += '';
        try {
            const post = JSON.parse(response);
           
            for (let i = 0 ; i < 3; i++) {
               
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
                    <div class="card">
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
