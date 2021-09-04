package TPO1;

import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.ForkJoinPool;

public class Main {
	public static void main(String[] args) {
		GeneradorListaImagenes generador= new GeneradorListaImagenes();
		List <Imagen>archivos= generador.generar(50);//Generara 20 imagenes de como maximo 50mb
		
		ProcesadorArchivos estrategiaArchivo= new ProcesadorImagenes(archivos, 0, archivos.size()); //El cliente elije cual estrategia se usa cambiando esto
		System.out.println(estrategiaArchivo.getClass());
		Pedco pedco= new Pedco();
		
		Scanner sc= new Scanner(System.in);
		
	
		while(true) {
			ForkJoinPool pool = new ForkJoinPool();//Creo la pool de tareas del forkjoin
			switch(menu(sc)){
			case 1://Procesar Imagenes
				ProcesadorImagenes estrategia= new ProcesadorImagenes(archivos, 0, archivos.size());//Creo la estrategia a usar
				pedco.setStrategy(estrategia);//Le digo al contexto cual es la que quiero usar
				
				//Para forkjoin
				pool.execute(estrategia);//Arranco la pool de tareas para que pueda resivirlas
				estrategia.join();//Espero a que termine, si no el main termina antes y no llega a mostrar nada por consola
				if(estrategia.isCompletedNormally()) System.out.println("TERMINO CON EXITO");
				
			}
			
			
			
			
			
			
			
			
			pedco.procesarArchivos(3);
		}
		
		
		
	
		
		/*ProcesadorImagenes procesadorImagen= new ProcesadorImagenes(imagenes,0,imagenes.size()); //La pool la manejaria pedco asi que de aca para abajo en pedco
		ForkJoinPool pool = new ForkJoinPool();
		pool.execute(procesadorImagen);
		
		procesadorImagen.join();//Espero a que termine, si no el main termina antes y no llega a mostrar nada por consola
		
		if(procesadorImagen.isCompletedNormally()) {
			System.out.println("TERMINO CON EXITO");
		}*/ //Todo lo comentado la idea seria ponerlo en pedco pero no lo ubicamos por el problema de la herencia multiple
	}
	
	public static int menu(Scanner sc) {
		System.out.println("Seleccione una opcion: ");
		System.out.println("1. Procesar Imagen");
		System.out.println("2. Procesar Texto");
		System.out.println("3. Procesar Video");
		return sc.nextInt();
	}

}
