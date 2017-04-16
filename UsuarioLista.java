package org.web201.usuario; 
 
import java.util.List; 
 
import javax.xml.bind.annotation.XmlElement; 
import javax.xml.bind.annotation.XmlRootElement; 
 
@XmlRootElement(name="listing") 
public class UsuarioLista {    
	private List<Usuario> items;      
	public UsuarioLista(){   
		
	}     
	public UsuarioLista(List<Usuario> items){     
		this.items = items;  
		}       @XmlElement(name="data")   
		public List<Usuario> getItems(){      
			return items;    
			} 
		}