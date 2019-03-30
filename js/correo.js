jQuery(document).ready(function($) {
	toastr.options = {	 
	  "positionClass": "toast-top-right",
	  "preventDuplicates": true,	  
	}


	$( "#formulario_wds").validate( {
		submitHandler: function () {

			var $this = $('#formulario_wds');

	        toastr.info("Enviando...");

	        // obtener datos del formulario
	        var inputs = $this.serializeArray();
	        var objData = {};

	        for (var i = 0; i < inputs.length; i++) {
	            objData[inputs[i].name] = inputs[i].value;
	        };

	        $.ajax({
	            type : "POST",
	            url : "sendmail.php",
	            data : objData
	        })
	        .done(function(data){
	        	toastr.success("Enviado");

	            $this.find('input[type="text"]').val('');
	            $this.find('input[type="email"]').val('');
	            $this.find('textarea').val('');
	        })
	        .fail(function(data){
	            $this.find('.text-warning').text(data);     

	            // toastr.warning("Error de envío");       
	        });
		
			return false;
		},
		rules: {
			nombre: "required",
			tel: "required",
			mensaje: "required",
			correo: {
				required: true,
				email: true
			},	
		},
		messages: {
			nombre:	"Todos los campos son obligatorios",
			tel: "Todos los campos son obligatorios",
			mensaje: "Todos los campos son obligatorios",
			correo: {
			  required: "Todos los campos son obligatorios",
			  email: "Introduzca una dirección de correo electrónica válida"
			}
		},
		errorPlacement: function ( error, element ) {
			error.addClass( "help-block" );
		},
		showErrors: function(errorMap, errorList) {	
			this.defaultShowErrors();					

			if (errorList.length > 0) {
				var errorArray = [];

				// recorrer arreglo para concatenar mensaje
				for (var i = 0; i < errorList.length; i++) {
					// busco el mensaje en el arreglo errorList y lo agrego si no existe
					if(errorArray.lastIndexOf(errorList[i].message) == -1){
						errorArray.push(errorList[i].message);
					}
				}
				// convierto el arreglo en una cadena y le agrego un salto de linea
				errorMessage = errorArray.join('<br/>')
				// mostrar mensaje
				toastr.warning(errorMessage);
			}
		}, 
	  	onkeyup: false,
	  	onclick: false,
	  	onfocusout : false
	});	
});