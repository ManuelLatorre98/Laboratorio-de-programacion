package TPO1ForkJoin;

import java.io.File;
import java.util.List;
import java.util.concurrent.ForkJoinPool;

public class Pedco {
	public void procesar(List <File>archivos) {
		ProcesadorTexto procesadorTexto= new ProcesadorTexto(archivos, 0, archivos.size(), 0); //Simulamos que utilizamos la estrategia procesadorTexto
		ForkJoinPool pool = new ForkJoinPool();
		pool.execute(procesadorTexto);
		procesadorTexto.join();//Espero a que termine, si no el main termina antes y no llega a mostrar nada por consola
		
		if(procesadorTexto.isCompletedNormally()) {
			System.out.println("TERMINO CON EXITO");
		} //Todo lo comentado la idea seria ponerlo en pedco pero no lo ubicamos por el problema de la herencia multiple
		
		procesadorTexto.join();
	}

	
	
	
}
