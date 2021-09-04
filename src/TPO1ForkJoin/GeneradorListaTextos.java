package TPO1ForkJoin;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
public class GeneradorListaTextos {//Genera listas de imagenes que seran procesadas (divididas en subtareas con forkjoin)
	public List <Texto> generar(int cant){
		Random generadorTam=new Random();
		List<Texto> listaImagenes= new ArrayList<Texto>();
		
		for (int i = 0; i < cant; i++) {
			Texto imagen= new Texto(("Imagen"+i),generadorTam.nextInt(50));
			listaImagenes.add(imagen);
		}
		
		return listaImagenes;
	}
}
