const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")

let carrito = [];

merch.forEach((merch)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${merch.img}">
        <h3>${merch.nombre}</h3>
        <p class="precio">${merch.precio}$</p>
    `;

    shopContent.append(content);


    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: merch.id,
            img: merch.img,
            nombre: merch.nombre,
            precio: merch.precio,
        })
    console.log(carrito);
    })
});

verCarrito.addEventListener("click", () => {

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title"> Carrito </h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((merch) =>{

    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${merch.img}">
    <h3> ${merch.nombre} </h3>
    <p> ${merch.precio} $ </p>
    `;
    
    modalContainer.append(carritoContent)
    }); 
});