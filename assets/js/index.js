import { getPersonajes } from "./peticiones/getPersonajes.js";

const crearCard = (results = []) => {
    let personajesRow = document.getElementById("personajesRow");

    results.forEach((result) => {
        const { id, name, image, species, status, location } = result;
        const { name: nameLocation } = location;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add("col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-sm-12");
        divCol.classList.add("col-xs-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = image; // Corrected typo from 'iamge' to 'image'
        img.alt = `Nombre de imagen ${name}`;

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-text");
        title.textContent = `Nombre: ${name}`;

        const subTitle = document.createElement("p")
        subTitle.classList.add("card-text");
        subTitle.textContent = `Especie : ${species}`;

        const subTitle2 = document.createElement("p")
        subTitle2.classList.add("card-text");
        subTitle2.textContent = `Estatus : ${status}`;

        const subTitle3 = document.createElement("p")
        subTitle3.classList.add("card-text");
        subTitle3.textContent = `Ubicación : ${nameLocation}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn", "btn-success");
        btnVer.textContent = "Ver detalles";
        btnVer.addEventListener("click", () => {
            console.log(`El id es: ${id}`);
            console.log(`El Nombre es: ${name}`);
            console.log(`La imagen es: ${image}`);
            console.log(`La especie es: ${species}`);
            console.log(`El Status es: ${status}`);
            console.log(`La ubicacion es: ${nameLocation}`);
        });

        divBody.appendChild(title);
        divBody.appendChild(subTitle);
        divBody.appendChild(subTitle2);
        divBody.appendChild(subTitle3);
        divBody.appendChild(btnVer);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);
        personajesRow.appendChild(divCol);
    });
}

getPersonajes()
    .then(data => crearCard(data))
    .catch(error => console.log(`El error es: ${error}`));
