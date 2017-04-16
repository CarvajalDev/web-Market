/**
 * 
 */
$(function() { 
	var dialog, form; 
	var table = $('#example').DataTable({ 
		"ajax" : "../servicios/usuario/listar", 
		"columns" : [ { 
		"data" : "codigo" 
		}, { 
		"data" : "nombre" 
		}, { 
		"data" : "login" 
		}, { 
		"data" : "password" 
		} ] 
	}); 
	$('#example tbody').on('click', 'tr', function() { 
		if ($(this).hasClass('selected')) { 
			$(this).removeClass('selected'); 
		} else { 
			table.$('tr.selected').removeClass('selected'); 
			$(this).addClass('selected');
		} 
	});
	
	function editar(accion) { 
		var codigo = ""; 
		var nombre = ""; 
		var login = ""; 
		var password = ""; 
		
		if (accion != "Adicionar") { 
			codigo = table.row('.selected').data().codigo; 
			nombre = table.row('.selected').data().nombre; 
			login = table.row('.selected').data().login; 
			password = table.row('.selected').data().password; 
		} 
		document.getElementById("accion").value = accion; 
		document.getElementById("codigo").value = codigo; 
		document.getElementById("nombre").value = nombre; 
		document.getElementById("login").value = login; 
		document.getElementById("password").value = password; 
		dialog.dialog("open"); 
	}
	
	function ejecutar() { 
		var accion = document.getElementById("accion").value; 
		
		$("#boton").html('<span class="ui-button-text">' + accion + '</span>'); 
		
		if (accion == "Adicionar") { 
			adicionarUsuario(); 
		} 
		
		if (accion == "Modificar") { 
			modificarUsuario(); 
		} 
		
		if (accion == "Eliminar") { 
			eliminarUsuario(); 
		} 
	} 
	
	function adicionarUsuario() { 
		// Collect input from html page 
		var nombre = document.getElementById("nombre").value; 
		var login = document.getElementById("login").value; 
		var password = document.getElementById("password").value; 
		
		var r = new REST.Request(); 
		r.setURI(REST.apiURL + "/usuario/adicionar"); 
		r.setMethod("POST"); 
		r.setContentType("application/json"); 
		r.setEntity({ 
			nombre : nombre, 
			login : login, 
			password : password 
		}); 
		r.execute(function(status, request, entity) { 
		mostrarRespuesta(entity); 
		}); 
	}
	
	function modificarUsuario() { 
	// Collect input from html page 
	var codigo = document.getElementById("codigo").value; 
	var nombre = document.getElementById("nombre").value; 
	var login = document.getElementById("login").value; 
	var password = document.getElementById("password").value; 
	var r = new REST.Request(); 
	r.setURI(REST.apiURL + "/usuario/modificar/" + codigo); 
	r.setMethod("PUT"); 
	r.setContentType("application/json"); 
	r.setEntity({ 
		nombre : nombre, 
		login : login, 
		password : password  
	}); 
	r.execute(function(status, request, entity) { 
		mostrarRespuesta(entity); 
	}); 
	} 
	
	function eliminarUsuario() { 
		// Collect input from html page 
		var codigo = document.getElementById("codigo").value; 
		
		var r = new REST.Request(); 
		r.setURI(REST.apiURL + "/usuario/eliminar/" + codigo); 
		r.setMethod("DELETE"); 
		r.execute(function(status, request, entity) { 
			mostrarRespuesta(entity); 
		}); 
	} 
	
	function mostrarRespuesta(entity){ 
		table.ajax.reload(); 
		dialog.dialog("close"); 
		document.getElementById("dialogo-mensaje").innerHTML = "<p>" + entity.mensaje + "</p>"; 
		$("#dialogo-mensaje").dialog({ 
			modal : true, 
			buttons : { 
				Ok : function() { 
						$(this).dialog("close"); 
				} 
			} 
		}); 
	} 
	
	dialog = $("#dialog-form").dialog({ 
	autoOpen : false, 
	height : 360, 
	width : 640, 
	modal : true, 
	buttons : { 
	"Ejecutar": { 
	id: 'boton', 
	text: 'Ejecutar', 
	click: function () { 
	ejecutar(); 
	} 
	}, 
	Cancel : function() { 
	dialog.dialog("close"); 
	} 
	}, 
	close : function() { 
	form[0].reset(); 
	} 
	}); 
	
	form = dialog.find("form").on("submit", function(event) { 
		event.preventDefault(); 
		ejecutar(); 
		}); 
		$("#adicionar").button().on("click", function() { 
		editar('Adicionar'); 
		}); 
		$("#modificar").button().on("click", function() { 
		editar('Modificar'); 
		}); 
		$("#eliminar").button().on("click", function() { 
		editar('Eliminar'); 
	}); 
}); 


	