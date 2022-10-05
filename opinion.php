
<?php
if($_POST){
    if($_POST){
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $correo = $_POST["correo"];
        $correo2 = $_POST["correo2"];
        $telefono = $_POST["telefono"];
        $mensaje = $_POST["cosnulta"];
    
        // Varios destinatarios
        $para = "encontratufarmacia@gmail.com";
        $titulo = 'Recibiste un mensaje desde tu Web';
    
        // mensaje
        $cuerpo = "
        Nombre: $nombre <br>
        Nombre: $apellido <br>
        Correo: $correo <br>
        Correo2: $correo2 <br>
        Telefono: $telefono <br>
        Consulta: $mensaje
        ";
    
        // Para enviar un correo HTML, debe establecerse la cabecera Content-type
        $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
        $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    
        // Cabeceras adicionales
        $cabeceras .= 'To: info@encontratufarmacia.site' . "\r\n";
        $cabeceras .= 'From: info@encontratufarmacia.site' . "\r\n";
    
        // Enviarlo
        mail($para, $titulo, $cuerpo, $cabeceras);
    }
}




?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comentarios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a9448b5173.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/opinion.css">
    <link rel="stylesheet" href="css/modooscuro.css">
</head>
<body id="comentarios">
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <a href="index.html"><img src="img/logo-v.4.3.png"  alt="logo" class="logo-celular"></a> 
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item  py-sm-3 py-1">
                            <a href="index.html" class="logo">
                                <h3>Encontrá tu farmacia</h3>
                            </a> 
                        </li>
                        <li class="nav-item px-sm-4 ps-2 py-sm-4 py-1">
                            <a class="nav-link> " href="index.html">Home</a>
                         </li>
                          <li class="nav-item px-sm-4  ps-2 py-sm-4 py-1">
                            <a class="nav-link> " href="buscatufarmacia.html">Buscá tu farmacia</a>
                         </li>
                          <li class="nav-item px-sm-4  ps-2 py-sm-4 py-1">
                            <a class="nav-link>  " href="preguntas-frecuentes.html">Preguntas frecuentes</a>
                         </li>
                         <li class="nav-item px-sm-4  ps-2  py-sm-4 py-1">
                             <a class="nav-link>" href="nosotros.html">Sobre nosotros</a>
                         </li>
                         <li class="nav-item px-sm-4  ps-2  py-sm-4 py-1">
                             <a class="nav-link>" href="centros-vacunacion.html">Servicios</a>
                         </li>
                         <li class="nav-item px-sm-4  ps-2 py-sm-4 py-1">
                             <a class="nav-link> active" href="#">Consultas & sugerencias</a>
                         </li>
                         <li class="nav-item px-sm-4  ps-2 py-sm-4 py-1">
                            <a class="nav-link> " href="login.html" title="Inicie Sesión"><i class="fa-solid fa-user"></i></a>
                        </li>
                         <li>
                            <buttons class="switch mt-4 col-lg-12 col-sm-1 col-2" id="switch">
                                <span><i class="fas fa-sun"></i></span>
                                <span><i class="fas fa-moon"></i></span>
                            </buttons> 
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </nav>
    </header>  
   <main>
    <div class="row grid">
        <div class=" m-5  col-lg-5 d-lg-block d-none d-sm-none ">
            <a href="#"><img src="img/logo-v.4.3.png"  alt="logo" class="logo-celular-form"></a> 
        </div>
        <div class="col-sm-12 col-lg-4 col-12 my-5">
            <form action="" class="row" method="POST" id="formulario" >
            <form action="" class="formulario row" id="formulario">
                <!-- Grupo: Nombre -->
                    <div class="formulario__grupo col-6 pb-3" id="grupo__nombre">
                        <label for="usuario" class="formulario__label">Nombre</label>
                        <div class="formulario__grupo-input">
                            <input type="text" class="formulario__input form-control" name="nombre" id="nombre" placeholder="Ingresa tu nombre">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El nombre solo puede contener letras, espacios y pueden llevar acentos.</p>
                    </div>
        
                    <!-- Grupo: Apellido -->
                    <div class="formulario__grupo col-6 pb-3" id="grupo__apellido">
                        <label for="apellido" class="formulario__label">Apellido</label>
                        <div class="formulario__grupo-input">
                            <input type="text" class="formulario__input form-control" name="apellido" id="apellido" placeholder="Ingresa tu apellido">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El apellido solo puede contener letras, espacios y pueden llevar acentos.</p>
                    </div>
            
    
                <!-- Grupo: Correo Electronico -->
                <div class="formulario__grupo pb-3" id="grupo__correo">
                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input form-control" name="correo" id="correo" placeholder="correo@correo.com">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                </div>
                <div class="formulario__grupo pb-3" id="grupo__correo2">
                    <label for="correo2" class="formulario__label">Repetir correo Electrónico</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input form-control" name="correo2" id="correo2" placeholder="correo@correo.com">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">Ambos correos deben ser iguales.</p>
                </div>
    
                <!-- Grupo: Teléfono -->
                <div class="formulario__grupo pb-3" id="grupo__telefono">
                    <label for="telefono" class="formulario__label">Teléfono</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input form-control" name="telefono" id="telefono" placeholder="ingrese su numero de telefono/whatsapp">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
                </div>
                <!-- grupo: consulta -->
                <div class="pb-3 formulario__grupo" id="grupo__consulta">
                    <label for="consulta" class="formulario__label"> Comentario</label>
                    <div class="formulario__grupo-input">
                        <textarea class="form-control formulario__input " name="consulta" id="consulta" placeholder="Ingrese su consulta" ></textarea>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">La consulta debe contener minimo 10 caracteres de longitud y maximo de 150 caracteres,solo puede contener letras,espacios,comas, numeros, guion y guion_bajo.</p>
                    </div>
               <!-- Grupo terminos y condiciones -->
                <div class="form-check form-switch formulario__grupo pb-3 ms-2" id="grupo__novedades">
                    <input class="form-check-input formulario__checkbox" type="checkbox" role="switch" id="novedades" name="novedades">
                    <label class="form-check-label formulario__label" for="flexSwitchCheckDefault">Deseo recibir novedades sobre la página</label>
                </div>

                  <!-- Grupo errores y exitos -->
                <div class="formulario__mensaje" id="formulario__mensaje">
                    <p class="alert alert-danger" role="alert"><i class="fas fa-exclamation-triangle" ></i> <b>ERROR:</b> OCURRIÓ UN ERROR DE VALIDACIÓN. POR FAVOR, CONFIRME LOS CAMPOS Y ENVÍE EL FORMULARIO DE NUEVO. </p>
                </div>
                <!-- Grupo boton de enviar -->
                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <p class="formulario__mensaje-exito alert alert-info p-2 my-3" id="formulario__mensaje-exito" role="alert"> SU MENSAJE SE HA ENVIADO CON ÉXITO. MUCHAS GRACIAS.</p>
                </div>
<<<<<<< HEAD:opinion.php
=======
                <div class="g-recaptcha" data-sitekey="6Lfvk1YiAAAAANJWqANbCG9jc4gWpLo3oKKQg6vj"></div>
>>>>>>> a2b287aa9ba234015a15d2dd9fd53109c103b308:opinion.html
                <div class="formulario__grupo formulario__grupo-btn-enviar mt-3 text-center">
                    <button type="submit" class="formulario__btn">Enviar</button>
                </div>
            </form>
        </div>

    </div>
</main>
<footer class="mt-auto">
    <div class="container-fluid grid">
        <div class="row p-5  ">
            <div class="col-xs-12 col-md-6 col-lg-3 "> 
                <p class="h4 p-footer">¡Gracias por la oportunidad de poder formarnos y acompañarnos durante el proceso!</p>
                <div class="mb-2 sponsors">
                    <a href="http://www.pescar.org.ar/wp/" target="_blank" class="fundacion-pescar"><img src="img/pescar-sin-fondo.png" alt="Fundación Pescar"  title="Fundación Pescar"></a>
                    <a href="https://www.linkedin.com/in/ailen-siccardi/" target="_blank" class="ailu"><img src="img/AilenSiccardi (1).png" alt="Ailén Siccardi"  title="Fundación Pescar- Ailén Siccardi"></a>
                    <a href="https://www.jpmorgan.com/AR/es/about-us" target="_blank" class="jp-morgan"><img src="img/jpMorgan.png" alt="Jp Morgan chase & co." title="Jp Morgan chase & co."></a>
                    <a href="https://www.educacionit.com/?gclid=CjwKCAjwi8iXBhBeEiwAKbUofe89kd4iSQYf7Td0jlH6my15Pjqcr6iAuW7K6FibNSzu8KhTBZa24BoC14IQAvD_BwE#categorias" target="_blank" class="educacionit-tamaño"><img src="img/educacionIT-sin-fondo.png" alt="educacion it logo" title="educación IT"></a>
                </div> 
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 p-footer mm">GrupDev</p>  
                <div class="mb-2">
                    <a href="https://www.linkedin.com/in/juan-yovera/" target="_blank" class="h6 text-decoration-none footer-a">Juan Yovera</a>                    
                </div>
                <div class="mb-2">
                    <a href="https://www.linkedin.com/in/marcos-mi%C3%B1o/" target="_blank" class="h6 text-decoration-none footer-a">Marcos Miño</a>                
                </div> 
                <div class="mb-2">
                    <a href="https://www.linkedin.com/in/nicolasquispe/" target="_blank" class="h6 text-decoration-none footer-a">Nicolas Quispe</a>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 p-footer">Teléfonos útiles</p>  
                <div class="mb-2">
                    <a href="tel:100" class="h6 text-decoration-none footer-a ">100 | Bomberos</a>                    
                </div>
                <div class="mb-2">
                    <a href="tel:103" class="h6 text-decoration-none footer-a">103 | Defensa Civil</a>                
                </div>
                <div class="mb-2">
                    <a href="tel:107" class="h6 text-decoration-none footer-a">107 ó 4691729 | SAME</a>
                </div>
                <div class="mb-2">
                    <a href="tel:144" class="h6 text-decoration-none footer-a">144 | Violencia de Género</a>
                </div>
                <div class="mb-2">
                    <a href="tel:148" class="h6 text-decoration-none footer-a">148 | Atención Ciudadana</a>
                </div>
                <div class="mb-2">
                    <a href="tel:911" class="h6 text-decoration-none footer-a">911 | Emergencias</a>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3 ">
                <p class="h5 p-footer">Mapa del sitio</p>
                <div class="mb-2">
                    <a href="index.html" class=" text-decoration-none h6 footer-a">Home</a>
                </div>
                <div class="mb-2">
                    <a href="buscatufarmacia.html" class=" text-decoration-none h6 footer-a">Busca tu farmacia</a>
                </div>
                <div class="mb-2">
                    <a href="preguntas-frecuentes.html" class=" text-decoration-none h6 footer-a">Preguntas frecuentes</a>
                </div>
                <div class="mb-2">
                    <a href="nosotros.html" class=" text-decoration-none h6 footer-a ">Sobre nosotros</a>
                </div>
                <div class="mb-2">
                    <a href="centros-vacunacion.html" class=" footer-a text-decoration-none h6 ">Servicios</a>
                </div>
                <div class="mb-2">
                    <i class="fa-solid fa-arrow-right"></i> <a href="#" class=" text-decoration-none footer-a h6 ft">Consultas u sugerencias</a>
                </div>
            </div>
        </div>
    </div>  
</footer>
<script src="js/formulario.js"></script>
<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
<script src="js/modo-oscuro.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
