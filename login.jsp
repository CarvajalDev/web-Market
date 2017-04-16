<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html> 
<head> 
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Almacen</title>

    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,500" rel="stylesheet">
    <link rel="stylesheet" href="../css/custom.css">
</head> 
<body> 
    <div class="my-content" >
        <div class="container" >

            <div class="row">
              <div class="col-sm-12" >
                  <h1><strong>MARKET</strong>  Login</h1>
                  <div class="mydescription">
                    <p>Los Mejores Productos a El Mejor precio </p>
                  </div>
              </div>
            </div>

            <div class="row">
                  <div class="col-sm-12 myform-cont" >
                      <div class="myform-top">
                          <div class="myform-top-left">
                            <h3>Ingresa a nuestro sitio.</h3>
                              <p>Digita tu usuario y contraseña:</p>
                          </div>
                          <div class="myform-top-right">
                            <i class="fa fa-key"></i>
                          </div>
                      </div>
					</div>
					</div>
					<div class="myform-bottom">
                       <form action="j_security_check" method="post">
                          <div class="form-group">
                              <input type="text" name="j_username" placeholder="Usuario..." class="form-control" id="form-username"> 
                          </div>
                          <div class="form-group">
                              <input type="password" name="j_password" placeholder="Contraseña..." class="form-control" id="form-password"> 
                          </div>
                          <button type="submit" value="Ingresar al Sistema" class="mybtn">Entrar</button>

                        </form>
                      </div>
                  </div>
            </div>

	<script type="text/javascript" src="/resources/cyberfend/cf.js"></script>
    <script src="../js/bootstrap.min.js"></script> 
</body> 
</html>