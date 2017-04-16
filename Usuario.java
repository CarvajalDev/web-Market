package org.web201.usuario; 
 
public class Usuario {   
	int codigo;  
	String nombre;  
	String login; 
	String password;
	
	
	
	
	public Usuario(int codigo, String nombre, String login, String password) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		this.login = login;
		this.password = password;
	}
	public Usuario() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

 
}