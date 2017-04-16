<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
	pageEncoding="ISO-8859-1"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
<title>Market</title> 
<!-- This will include the whole javascript file including ajax handling --> 
<script lang="javascript" src="../rest-api.js"></script> 
<link rel="stylesheet" 
href="http://code.jquery.com/ui/1.11.4/themes/ui-lightness/jquery-ui.css"> 
<script type="text/javascript" 
src="https://code.jquery.com/jquery-1.12.0.min.js"></script> 
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script> 
<script type="text/javascript" 
src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script> 
<link rel="stylesheet" 
href="https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css"> 
<link rel="stylesheet" 
href="../css/estilo.css"> 
<script type="text/javascript" src="../js/usupo.js"></script>


   <link href="../css/navbar/bootstrap.min.css" rel="stylesheet">
<link href="../css/navbar.css" rel="stylesheet">
 
</head> 


    <div class="container">
      <nav class="navbar navbar-dark bg-inverse" style="background-color: #373a3c;">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-toggleable-xs" id="navbar-header">
          <a class="navbar-brand" href="../index.jsp">MARKET</a>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="usuario.jsp">Ver Usuarios</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="usu_gru.jsp">Ver Productos</a>
            </li>
          </ul>
          <form class="form-inline float-xs-right" >
          <a class="btn btn-outline-success" href="../salir.jsp">Cerrar Sesión</a>
          </form>
        </div>
      </nav>
<script src="../js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/ie10-viewport-bug-workaround.js"></script>
    <div class="container">




<body> 
	<h1>GESTION DE GRUPOS</h1> 
	<div style="float: right;"> 
		<input type="button" value="Adicionar" id="adicionar" /> 
		<input type="button" value="Modificar" id="modificar" /> 
		<input type="button" value="Eliminar" id="eliminar" /> 
	</div> 
	
	<table id="example" class="display" cellspacing="0" width="100%"> 
	<thead> 
		<tr> 
		<th>Codigo</th> 
		<th>Usuario</th> 
		<th>Grupo</th> 
		</tr> 
	</thead> 
	<tfoot> 
		<tr> 
		<th>Codigo</th> 
		<th>Usuario</th> 
		<th>Grupo</th> 
		</tr> 
	</tfoot> 
	</table>
	 
	<div id="dialogo-mensaje" title="Gestión de Productos"> 
	</div> 
	
	<div id="dialog-form" title="Forma Producto"> 
		<p class="validateTips">Todos los campos son requeridos.</p> 
		<form> 
			<fieldset> 
			<input type="hidden" name="accion" id="accion" value="" /> 
			<input type="hidden" name="codigo" id="codigo" value="" /> 
			<label for="usuario">Usuario</label> <input type="text" name="usuario" id="usuario" value="" class="text ui-widget-content ui-corner-all" /> 
			<label for="grupo">Grupo</label> <input type="text" name="grupo" id="grupo" value="jane@smith.com" class="text ui-widget-content ui-corner-all" />
			<input type="submit" tabindex="-1" style="position: absolute; top: -1000px"> 
			</fieldset> 
		</form> 
	</div> 
</body> 
</html> 
