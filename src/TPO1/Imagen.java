package TPO1;

public class Imagen {//Objetos imagenes que seran procesados
	private String nombre;
	private int tama�oMb;
	
	public Imagen(String nombre, int tama�oMb) {
		this.nombre=nombre;
		this.tama�oMb=tama�oMb;
	}
	
	public void setName(String nombre) {
		this.nombre=nombre;
	}
	
	public void setTama�oMb(int tama�oMb) {
		this.tama�oMb=tama�oMb;
	}
	
	public String getName() {
		return this.nombre;
	}
	
	public double getTama�oMb() {
		return this.tama�oMb;
	}
	
}
