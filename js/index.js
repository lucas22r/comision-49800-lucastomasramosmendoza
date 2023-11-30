console.log(
    "inicializacion de la aplicación \n ============================================================"
  );
  
  // Variables 
  let nombre;
  let edad;
  let minimo;
  let maximo;
  let miembroClub;
  let valorIngresado;
  let valorMembresia;
  const descuentoMiembros = 20;
  
  // Funciones 
  
  const verificarRango = (minimo, maximo, consulta) => {
    valorIngresado = prompt(consulta);
    while (
      valorIngresado > maximo ||
      valorIngresado < minimo ||
      isNaN(valorIngresado) || valorIngresado === null
    ) {
      alert("Dato Inválido, vuelva a ingresarlo por favor.");
      valorIngresado = prompt(consulta);
    }
  };
  
  const consultarMembresia = (consulta) => {
    valorMembresia = prompt(consulta).toLowerCase();
  
    while (valorMembresia !== "no" && valorMembresia !== "si") {
      alert("Dato Inválido, vuelva a ingresarlo por favor.");
      valorMembresia = prompt(consulta).toLowerCase();
    }
    if (valorMembresia === "si") {
      miembroClub = true;
    } else {
      miembroClub = false;
    }
  };
  
  //datos iniciales cliente
  console.log(
    "Solicita datos al Cliente \n ============================================================"
  );
  
  for (let i = 0; i <= 3; i++) {
    let consulta;
  
    switch (i) {
      case 1:
        valorIngresado = prompt("Por favor ingresa tu nombre");
        while (!isNaN(valorIngresado)||valorIngresado === null) {
          alert("Dato Inválido, vuelva a ingresarlo por favor.");
          valorIngresado = prompt(consulta);
        }
        nombre = valorIngresado.toUpperCase();
        break;
      case 2:
        consulta = ` ${nombre} ingresa tu edad en años`;
        minimo = 1;
        maximo = 120;
        verificarRango(minimo, maximo, consulta);
        edad = parseInt(valorIngresado);
        break;
      case 3:
        consulta = `${nombre}, El descuento aplicado a nuestros afiliados es un ${descuentoMiembros}% sobre el valor total de la seccion del club \n ==== \n ¿Eres miembro del club deportivo nautico? Por favor ingresa "si" o "no" como respuesta`;
        consultarMembresia(consulta);
        console.log(`Miembro club: ${miembroClub}`);
        break;
      default:
        alert(
          "Bienvenido al menu interactivo del club deportivo nautico"
        );
        break;
    }
  }
  
  //Ficha del cliente
  console.log(
    ` Ficha de Cliente\n================================\n - Nombre: ${nombre} \n - Edad: ${edad} años.\n - Membresía: ${valorMembresia} está afiliado. \n================================`
  );
  
  alert(
    `Gracias por los datos proporcionados, ${nombre}.\n Ahora te redirigiremos a nuestro menu de secciones.\n El Valor de las mismas estará basado en tu ficha de socio o no socio.`
  );
  
  // menu interactivo
  console.log(
    "Inicia el menu interactivo \n ============================================================"
  );
  
  //Variables Menu
  let edadMinima;
  let PrecioSeccion;
  
  
  // Funciones
  const chequearEdad = (edadMinima) => { 
    if (edad < edadMinima)
      alert(
        `Recuerda que las personas de ${edad} años de edad deben estar acompañadas por un mayor`
      );
  
  
  const informarPrecio = (PrecioSeccion, miembroClub) => {
    if (miembroClub) {
      PrecioSeccion = PrecioSeccion - (PrecioSeccion * descuentoMiembros) / 100;
      alert(
        ` El Precio de la Seccion es $${PrecioSeccion} ¡ Solo para miembros del club deportivo nautico`
      );
      console.log("Se informa precio con descuento");
    } else {
      alert(` El Precio de la seccion $${PrecioSeccion}`);
      console.log("Se informa precio normal");
    }
  };
  
  let iniciado = true;
  while (iniciado) {
    let seleccion = parseInt(
      prompt(
        ` ${nombre}, Por favor selecciona una opción para conocer el precio de nuestra seccion y sus condiciones de uso:\n ================== \n1. Pileta\n2. Gimnasio\n3. canchas de basquet\n4. canchas de tennis\n5. canchas de futbol\n6. canchas de golf\n7. Terminar`
      )
    );
  
    switch (seleccion) {
      case 1:
        PrecioSeccion = 5000;
        alert(
          "Pileta\n ========= \n Veni a disfrutar este verano de la pileta mas grande de la ciudad, con trampolines, tobaganes, todo lo mejor para vos!\n ========= \n"
        );
        console.log("========= \nElegida opción 1, se brinda info sobre la seccion pileta");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 2:
        PrecioSeccion = 3500;
        alert(
          "Gimnasio\n ========= \n veni a entrenar al gimnasio mas completo, damos clases de: musculacion, funcional, crossfit, yoga, aerobox, aquagym y muchas clase mas! \n ========= \n"
        );
        console.log("========= \nElegida opción 2, se brinda info sobre nuestro gimnasio");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 3:
        PrecioSeccion = 1500;
        alert(
          "canchas de basquet\n ========= \n veni a disfrutar de tu deporte favorito en nuestras canchas de madera (arce duro) o nuestras canchas exteriores de cemento!\n ========= \n"
        );
        console.log("========= \nElegida opción 3, se brinda info sobre nuestras canchas de basquet");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 4:
        PrecioSeccion= 2500;
        alert(
          "canchas de tennis\n ========= \n veni a disfrutar de tu deporte favorito en nuestras canchas de cemento o polvo de ladrillo!\n ========= \n"
        );
        console.log("========= \nElegida opción 4, se brinda info sobre nuestras canchas de tennis");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 5:
        precioAtraccion = 1000;
        alert(
          "canchas de futbol\n ========= \nveni a disfrutar de tu deporte favorito en nuestras canchas de futsal, futbol 7, futbol 11!\n ========= \n"
        );
        console.log("========= \nElegida opción 5, se brinda info sobre nuestras canchas de futbol");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 6:
        precioAtraccion = 4500;
        alert(
          "cancha de golf\n ========= \n veni a disfrutar de tu deporte favorito en nuestros campos de golf de 18 hoyos o para los mas chicos nuestro minigolf \n ========= \n"
        );
        console.log("========= \nElegida opción 6, se brinda info canchas de golf");
        informarPrecio (PrecioSeccion, miembroClub);
        break;
      case 7:
        // Mensaje Despedida y cierre 
        alert(
          `Gracias por utilizar nuestro simulador interactivo ${nombre}, lo esperamos pronto en nuestro club!`
        );
        console.log("========= \nOpción de Terminar");
        iniciado = false;
        break;
      default:
        alert("Opción inválida. Por favor, selecciona una opción válida.");
        console.log("========= \nOpción invalida en menu");
        break;
    }
  }
  console.log(
    "Fin del menu interactivo \n ============================================================"); }    