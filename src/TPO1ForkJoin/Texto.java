package TPO1ForkJoin;

public class Texto {
	private String nombre;
	private int tamañoMb;
	
	public Texto(String nombre, int tamañoMb) {
		this.nombre=nombre;
		this.tamañoMb=tamañoMb;
	}
	
	public String getNombre() {
		return nombre;
	}
	public int getTamañoMb() {
		return tamañoMb;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setTamañoMb(int tamañoMb) {
		this.tamañoMb = tamañoMb;
	}
	
	
}
