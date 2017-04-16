/**
 * 
 */
$(function() { 
	var dialog, form; 
	var table = $('#example').DataTable({ 
		"ajax" : "../servicios/usupo/listar", 
		"columns" : [ { 
		"data" : "codigo" 
		}, { 
		"data" : "usuario" 
		}, { 
		"data" : "grupo" 
		}] 
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
		var usuario = ""; 
		var grupo = "";  
		
		if (accion != "Adicionar") { 
			codigo = table.row('.selected').data().codigo; 
			usuario = table.row('.selected').data().usuario; 
			grupo = table.row('.selected').data().grupo;  
		} 
		document.getElementById("accion").value = accion; 
		document.getElementById("codigo").value = codigo; 
		document.getElementById("usuario").value = usuario; 
		document.getElementById("grupo").value = grupo; 
		dialog.dialog("open"); 
	}
	
	function ejecutar() { 
		var accion = document.getElementById("accion").value; 
		
		$("#boton").html('<span class="ui-button-text">' + accion + '</span>'); 
		
		if (accion == "Adicionar") { 
			adicionarUsupo(); 
		} 
		
		if (accion == "Modificar") { 
			modificarUsupo(); 
		} 
		
		if (accion == "Eliminar") { 
			eliminarUsupo(); 
		} 
	} 
	
	function adicionarUsupo() { 
		// Collect input from html page 
		var usuario = document.getElementById("usuario").value; 
		var grupo = document.getElementById("grupo").value; 
		
		var r = new REST.Request(); 
		r.setURI(REST.apiURL + "/usupo/adicionar"); 
		r.setMethod("POST"); 
		r.setContentType("application/json"); 
		r.setEntity({ 
			usuario : usuario, 
			grupo : grupo 
		}); 
		r.execute(function(status, request, entity) { 
		mostrarRespuesta(entity); 
		}); 
	}
	
	function modificarUsupo() { 
	// Collect input from html page 
	var codigo = document.getElementById("codigo").value; 
	var usuario = document.getElementById("usuario").value; 
	var grupo = document.getElementById("grupo").value; 
	var r = new REST.Request(); 
	r.setURI(REST.apiURL + "/usupo/modificar/" + codigo); 
	r.setMethod("PUT"); 
	r.setContentType("application/json"); 
	r.setEntity({ 
		usuario : usuario, 
		grupo : grupo  
	}); 
	r.execute(function(status, request, entity) { 
		mostrarRespuesta(entity); 
	}); 
	} 
	
	function eliminarUsupo() { 
		// Collect input from html page 
		var codigo = document.getElementById("codigo").value; 
		
		var r = new REST.Request(); 
		r.setURI(REST.apiURL + "/usupo/eliminar/" + codigo); 
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


	