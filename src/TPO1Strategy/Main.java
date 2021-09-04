package TPO1Strategy;

import java.util.Scanner;
import java.util.concurrent.ForkJoinPool;

import TPO1.ProcesadorImagenes;

public class Main{
	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		ContextOrdenador ordenador= new ContextOrdenador(null);
		Comparable []estructura= new Comparable[] {3,4,5,2,9,10,6,7,8,1};
		Comparable []resultado;
		
		while(true) {
			switch(menu(sc)){
			case 1://Algoritmo burbuja: O(n^2)
				System.out.print("Orden de ejecucion elegido: O(n^2). Resultado: ");
				ordenador.setStrategy(new Burbuja());
				break;
			case 2://Algoritmo bucket: O(n)
				System.out.print("Orden de ejecucion elegido: O(n). Resultado: ");
				ordenador.setStrategy(new BucketSort());
				break;
			case 3://Algoritmo AB: O(n log n)
				System.out.print("Orden de ejecucion elegido: O(n log n). Resultado: ");
				ordenador.setStrategy(new ArbolBinario());
			}
			resultado= ordenador.ejecutarEstrategia(estructura);
			System.out.print("Resultado: [");
			for (int i = 0; i < resultado.length; i++) {
				System.out.print(resultado[i]+", ");
			}
			System.out.println("]");
			
		}
			
		
	}
	
	public static int menu(Scanner sc) {
		System.out.println("Seleccione una opcion: ");
		System.out.println("1. Procesar O(n^2)");
		System.out.println("2. Procesar O(n)");
		System.out.println("3. Procesar O(n log n)");
		return sc.nextInt();
	}
}
