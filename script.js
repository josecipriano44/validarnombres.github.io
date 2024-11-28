function detectarNombres() {
    const textoInput = document.getElementById("textoInput").value;
    const message = document.getElementById("message");
    const nombresList = document.getElementById("nombresList");
    const resultados = document.getElementById("resultados");
  
    // Expresión regular para detectar nombres propios (palabras que empiezan con mayúscula)
    const regex = /\b[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*\b/g;
  
    // Buscar las coincidencias
    const nombres = textoInput.match(regex);
  
    // Mostrar resultados
    if (nombres && nombres.length > 0) {
      message.textContent = `Se encontraron ${nombres.length} nombres propios.`;
      message.className = 'success';
      nombresList.innerHTML = nombres.map(nombre => `<li>${nombre}</li>`).join('');
    } else {
      message.textContent = "No se encontraron nombres propios.";
      message.className = 'error';
      nombresList.innerHTML = '';
    }
  
    // Mostrar la sección de resultados
    resultados.style.display = 'block';
  }
  