let boton = document.getElementById("boton");
let artista = document.getElementById("artist");
let cancion = document.getElementById("song"); 
let url = "https://lyrist.vercel.app/api/:" + cancion.value + "/:" + artista.value;

let mostrar = () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            block_content.innerText = data.lyrics;
        }).catch((error) => {
            console.log("Se ha producido un error con la API", error.message)
        })
};

boton.addEventListener("click", mostrar)