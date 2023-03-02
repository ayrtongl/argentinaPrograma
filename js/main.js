let datos = '' 
 const descargarDatos = async () => { 
    try { 
        
    const respuesta =  await fetch('https://randomuser.me/api/') 
    const datos = await respuesta.json() ; 
    let dataPersona = ""
    const data =  datos.results.forEach( persona => {
        dataPersona = persona;
        console.log(persona)
    } ) 
    
    document.getElementById("nombre").innerHTML = `${dataPersona.name.first + " " + dataPersona.name.last}`
    
    if (dataPersona.gender === `female` ) {
        document.getElementById("generoDesarrollador").innerHTML = `Desarrolladora Web`
    } if (dataPersona.gender === `male`) { 
        document.getElementById("generoDesarrollador").innerHTML = `Desarrollador Web`
    } 
    if(dataPersona.id.name){
        document.getElementById("tipoDoc").innerHTML = `${dataPersona.id.name}`
    }else {
        document.getElementById("tipoDoc").innerHTML = `Identificacion`
    }

    if(dataPersona.id.value){
        document.getElementById("numeroDni").innerHTML = `${dataPersona.id.value}`
    }else {
        document.getElementById("numeroDni").innerHTML = `No posee`
    }
    
    document.getElementById("pais").innerHTML = `${dataPersona.location.country}`
    
    if(dataPersona.gender === 'female'){
        document.getElementById("genero").innerHTML = `Femenino`
    }else if(dataPersona.gender === 'male'){
        document.getElementById("genero").innerHTML = `Masculino`
    }

    document.getElementById("ciudad").innerHTML = `${dataPersona.location.city}`

    document.getElementById("direccion").innerHTML = `${dataPersona.location.street.name + " " + dataPersona.location.street.number}`

    document.getElementById("codigoPostal").innerHTML = `${dataPersona.location.postcode}`

    document.getElementById("email").innerHTML = `${dataPersona.email}`

    document.getElementById("telefono").innerHTML = `${dataPersona.phone}`

    
    // La idea principal, era que la imagen venga de la API, pero la resolucion de estas era muy baja, por lo cual no quedaban bien esteticamente imagenes con baja resolucion

    /*document.getElementById("imgBack").src = `${dataPersona.picture.large}`

    document.getElementById("imgFront").src = `${dataPersona.picture.large}`*/

    // document.getElementById("experiencia").innerHTML = `funciona`
    // document.getElementById("sobreMiDatos").innerHTML = `funciona`

    

}
catch{ alert('Hay un error al obtener datos de la API') } 

} 

descargarDatos() 
 
document.getElementById('boton').addEventListener('click', () => {
      document.getElementById('infoSection').scrollIntoView({behavior:'smooth'});
  });





// const respuesta =  fetch('https://randomuser.me/api/') //   .then(response => response.json()) //   .then(data => datos = data.results ); //   console.log(respuesta) //   const datos = respuesta.json() //const resultados = datos.results.forEach( persona => console.log(persona) )