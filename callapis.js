const fetch = require('node-fetch');

//fetch('https://rickandmortyapi.com/api/character')
//  .then(r => r.json())
//// .then(console.log)
//  .catch(console.error)

const timer = (n1, n2, cb) => {
    const n3 = n1 + n2
    setTimeout(() => {
        cb(n3);
    }, 8000)
}
const llamarApi = (numeroCaracter) => {
    fetch(`https://rickandmortyapi.com/api/character/${numeroCaracter}`)
        .then(r => r.json())
        .then(res => console.log(res.name))
        .catch(console.error)

}
//timer(1,2,llamarApi);
//llamarApi(3);

const llamarApiAsync = async (numeroCaracter) => {
    const personajeResp = await fetch(
        `https://rickandmortyapi.com/api/character/${numeroCaracter}`)
        

        //aqui estoy recibiendo un volumen de datos, luego guardamos en nueva variable pasando a json 
    const personaje = await personajeResp.json(); // Esto es una promesa 
    console.log('Resultado Api 1:',personaje);

    const personajeNombre = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${personaje.name}&status=alive`); 
    
    const nombrePersonaje = await personajeNombre.json(); //pasando a json lo anterior
    console.log('Resultado Api 2:',nombrePersonaje);
   
    

}

llamarApiAsync(3);