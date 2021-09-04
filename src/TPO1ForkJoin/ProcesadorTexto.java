package TPO1ForkJoin;

import java.io.File;
import java.util.List;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.RecursiveAction;

import org.apache.commons.io.FileUtils;


public class ProcesadorTexto extends RecursiveAction implements ProcesadorArchivos{
	private List<File>textos;
	private int primera;
	private int ultima;
	private int tamMaxArch=3000;//Tamaño maximo de cada archivo de texto en bytes
	
	int padre;
	public ProcesadorTexto(List<File>textos, int primera, int ultima, int padre) {
		this.textos=textos;
		this.primera=primera;
		this.ultima=ultima;
		this.padre=padre;
	}
	
	@Override
	protected void compute() {
		int limNuevo;
		if(this.calcularTamLista()<tamMaxArch) {//Si la lista de textos a procesar tiene un peso menor a tamMaxArch bytes
			this.procesar();
		}else {
			int medio=(ultima+primera)/2;
			if(ultima-primera==2) {
				
				limNuevo=medio;
			}else {
				limNuevo=medio+1;
			}
			
			System.out.println("LA LISTA ES MUY PESADA ("+this.calcularTamLista()+") LA DIVIDO EN 2. Listas de texto pendientes por procesar: "+getQueuedTaskCount()+" padre: "+padre); //Me indica cuantas tareas pendientes hay en la cola
			ProcesadorTexto p1= new ProcesadorTexto(textos, primera, limNuevo , this.calcularTamLista());//Agarro la mitad de las imagenes y se la asigno a una nueva tarea
			ProcesadorTexto p2= new ProcesadorTexto(textos, limNuevo, ultima, this.calcularTamLista());//Agarro la otra mitad y se la asigno a otra tarea
			ForkJoinTask.invokeAll(p1,p2);
			//invokeAll(p1,p2);//Meto las 2 nuevas tareas en la pool
			
			
		}
	}
	private int calcularTamLista() {
		int tamTot=0;
		System.out.println();
		for (int i = primera; i < ultima; i++) {
			
			tamTot+= FileUtils.sizeOf(textos.get(i));
		}
		
		
		return tamTot;
	}
	public void procesar() {
		System.out.println("Procesando lista de textos de "+this.calcularTamLista()+"bytes"+" cantTXT: "+(ultima-primera)+" padre: "+padre);
		try {
			Thread.sleep(2000);
		}catch(InterruptedException e) {}
		System.out.println("Termino con exito lista de "+this.calcularTamLista()+"bytes");
		//Aca irian las tareas propias del procesamiento de imagen
		//Seria la redifinicion del metodo de la clase abstracta
	}

}
