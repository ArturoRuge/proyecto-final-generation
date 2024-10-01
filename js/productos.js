class Producto {
    constructor(nombre, imagen, descripcion, precio, link) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.descripcion = descripcion;
      this.precio = precio;
      this.link = link;
    }
  
    // Creaciónd de tarjetas HTML
    crearCard() {
      const col = document.createElement("div");
      col.classList.add("col", "col-product");

      const card = document.createElement("div");
      card.classList.add("card", "h-100");
  
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = this.imagen;
      img.alt = this.nombre;
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const titulo = document.createElement("h5");
      titulo.classList.add("card-title");
      titulo.textContent = this.nombre;
  
      const descripcion = document.createElement("p");
      descripcion.classList.add("card-text");
      descripcion.textContent = this.descripcion;
  
      const precio = document.createElement("p");
      precio.classList.add("price");
      precio.id = "price";
      precio.textContent = `$${this.precio.toLocaleString("es-CO")}`;

      const linkProduct = document.createElement("a");
      linkProduct.classList.add("linkProduct");
      linkProduct.href = this.link;
      linkProduct.textContent = "Ver Más"
  
      // Insertar todos los elementos en la tarjeta

      cardBody.appendChild(titulo);
      cardBody.appendChild(descripcion);
      cardBody.appendChild(precio);
      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(linkProduct);
  
      return card;
    }
  }
  
  // Cargar productos desde el JSON
  async function cargarProductos() {
    const response = await fetch("../json/products.json"); 
    const productosData = await response.json();
  
    const contenedor = document.getElementById("product-container"); 
  
    productosData.forEach((productoData) => {
      const producto = new Producto(
        productoData.nombre,
        productoData.imagen,
        productoData.descripcion,
        productoData.precio,
        productoData.link
      );
      const card = producto.crearCard();
      contenedor.appendChild(card); 
    });
  }
  
  // esto pasa cuando página cargue
  window.onload = cargarProductos;