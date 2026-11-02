
let contenedor = document.querySelector("#personajes");
let cantidad = document.querySelector("#cantidad");

// Pedir los personajes a la API
fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {
        contenedor.innerHTML = "";
        cantidad.textContent = datos.results.length + " personajes";

        // Recorrer los personajes recibidos
        for (let i = 0; i < datos.results.length; i++) {
            let personaje = datos.results[i];

            contenedor.innerHTML += `
                <div class="col">
                    <div class="card tarjeta">
                        <img src="${personaje.image}" alt="${personaje.name}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                            <p class="mb-1">Especie: ${personaje.species}</p>
                            <p class="mb-1">Estado: <span class="estado">${personaje.status}</span></p>
                            <p class="mb-0">Origen: ${personaje.origin.name}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    })
    .catch(error => {
        contenedor.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    No se pudieron cargar los personajes.
                    Revisá tu conexión a internet e intentá nuevamente.
                </div>
            </div>
        `;
        cantidad.textContent = "Error";
        console.log("Error al consultar la API:", error);
    });
