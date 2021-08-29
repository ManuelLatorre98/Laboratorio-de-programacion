package TPO1;

import java.util.List;
import java.util.Random;
import java.util.concurrent.ForkJoinPool;

public class Main {
	public static void main(String[] args) {
		GeneradorListaImagenes generador= new GeneradorListaImagenes();
		List <Imagen>imagenes= generador.generar(50);//Generara 20 imagenes de como maximo 50mb
		
		ProcesadorImagenes procesadorImagen= new ProcesadorImagenes(imagenes,0,imagenes.size()); //La pool la manejaria pedco asi que de aca para abajo en pedco
		ForkJoinPool pool = new ForkJoinPool();
		pool.execute(procesadorImagen);
		
		procesadorImagen.join();//Espero a que termine, si no el main termina antes y no llega a mostrar nada por consola
		
		if(procesadorImagen.isCompletedNormally()) {
			System.out.println("TERMINO CON EXITO");
		}
		
	}
}
