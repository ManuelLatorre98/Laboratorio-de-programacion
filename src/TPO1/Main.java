package TPO1;

import java.util.List;
import java.util.Random;
import java.util.concurrent.ForkJoinPool;

public class Main {
	public static void main(String[] args) {
		GeneradorListaImagenes generador= new GeneradorListaImagenes();
		List <Imagen>archivos= generador.generar(50);//Generara 20 imagenes de como maximo 50mb
		
		ProcesadorArchivos estrategiaArchivo= new ProcesadorImagenes(archivos, 0, archivos.size()); //El cliente elije cual estrategia se usa cambiando esto
		
		Pedco pedco= new Pedco();
		pedco.execute(estrategiaArchivo);
		
		/*ProcesadorImagenes procesadorImagen= new ProcesadorImagenes(imagenes,0,imagenes.size()); //La pool la manejaria pedco asi que de aca para abajo en pedco
		ForkJoinPool pool = new ForkJoinPool();
		pool.execute(procesadorImagen);
		
		procesadorImagen.join();//Espero a que termine, si no el main termina antes y no llega a mostrar nada por consola
		
		if(procesadorImagen.isCompletedNormally()) {
			System.out.println("TERMINO CON EXITO");
		}*/ //Todo lo comentado la idea seria ponerlo en pedco pero no lo ubicamos por el problema de la herencia multiple
	}
}
