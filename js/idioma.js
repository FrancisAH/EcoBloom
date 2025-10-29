// ESPAÑOL

function cambiarIdioma(idioma) {
    if (idioma === 'es') {
        //Titulo y menu de la pagina de galeria 
        document.getElementById("titulo").textContent = "EcoBloom: Belleza Natural";
        document.querySelectorAll("nav ul li")[0].children[0].textContent = "Página Principal";
        document.querySelectorAll("nav ul li")[1].children[0].textContent = "Productos";
        document.querySelectorAll("nav ul li")[2].children[0].textContent = "Galería";
        document.querySelectorAll("nav ul li")[3].children[0].textContent = "Contacto";

        //menu
        document.getElementById("menuLabel").textContent = "Menú";
        document.getElementById("inicio").textContent = "Página Principal";
        document.getElementById("productosLink").textContent = "Productos";
        document.getElementById("galeria").textContent = "Galería";
        document.getElementById("contacto").textContent = "Contacto";
        document.getElementById("informacion").textContent = "Información";

        //Cuadros de index
        document.getElementById("titulo").textContent = "EcoBloom: Belleza Natural";
        document.getElementById("descripcion").textContent = "Un producto 100% orgánico para el cuidado de tu piel y bienestar.";

        document.getElementById("benef1").textContent = "Hidratación Profunda";
        document.getElementById("benef1desc").textContent = "Penetra en las capas de la piel para una nutrición completa.";

        document.getElementById("benef2").textContent = "Aroma Natural";
        document.getElementById("benef2desc").textContent = "Delicada fragancia sin químicos artificiales.";
    
//INGLES
  
  
    } else if (idioma === 'en') {
        document.getElementById("titulo").textContent = "EcoBloom Natural Beauty";
        document.querySelectorAll("nav ul li")[0].children[0].textContent = "Home";
        document.querySelectorAll("nav ul li")[1].children[0].textContent = "Products";
        document.querySelectorAll("nav ul li")[2].children[0].textContent = "Gallery";
        document.querySelectorAll("nav ul li")[3].children[0].textContent = "Contact";

        // Menú de la pagina Index
        document.getElementById("menuLabel").textContent = "Menu";
        document.getElementById("inicio").textContent = "Home";
        document.getElementById("productosLink").textContent = "Products";
        document.getElementById("galeria").textContent = "Gallery";
        document.getElementById("contacto").textContent = "Contact";
        document.getElementById("informacion").textContent = "Information";

        
        // Cuadros de index
        document.getElementById("titulo").textContent = "EcoBloom: Natural Beauty";
        document.getElementById("descripcion").textContent = "A 100% organic product for your skin care and well-being.";

        document.getElementById("benef1").textContent = "Deep Hydration";
        document.getElementById("benef1desc").textContent = "Penetrates the skin layers for complete nourishment.";

        document.getElementById("benef2").textContent = "Natural Scent";
        document.getElementById("benef2desc").textContent = "Delicate fragrance without artificial chemicals.";
  }
}




        

