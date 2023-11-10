
    function enviarFormulario() {
      // Obtener los valores de los campos
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
	  var numero = document.getElementById('numero').value;

      // Validar que los campos no estén vacíos
      if (nombre.trim() === '' || email.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }

      //Se muestra una alerta con los datos que se han ingresado
      alert('Datos enviados:\nNombre: ' + nombre + '\nEmail: ' + email + '\nNumero Telefonico: ' + numero);
    }

    function limpiarFormulario() {
      // Limpiar los valores de los campos
      document.getElementById('nombre').value = '';
      document.getElementById('email').value = '';
	  document.getElementById('numero').value = '';
    }

		
    function mostrarSeccion(idSeccion) {
      // Ocultar todas las secciones
      var secciones = document.getElementsByClassName('seccion');
      for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove('seccion-actual');
      }

      // Mostrar solo la sección actual
      document.getElementById(idSeccion).classList.add('seccion-actual');
    }
  
