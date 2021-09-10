package TPO1ForkJoin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.RecursiveAction;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.apache.commons.io.FileUtils;


public class ProcesadorTexto extends RecursiveAction {
	private List<File>textos;
	private int primera;
	private int ultima;
	private int tamMaxArch=3000;//Tamaño maximo de cada archivo de texto en bytes
	
	int padre;
	public ProcesadorTexto(List<File>textos, int primera, int ultima, int padre) { //Parametro padre esta para debugear y dibujar el arbol de tareas que se genera
		this.textos=textos;
		this.primera=primera;
		this.ultima=ultima;
		this.padre=padre;
	}
	
	@Override
	protected void compute() {
		//System.out.println("Lista de tamaño "+this.calcularTamLista()+" con elementos: "+textos.subList(primera, ultima).toString());
		
		if(this.calcularTamLista()<tamMaxArch) {//Si la lista de textos a procesar tiene un peso menor a tamMaxArch bytes
			this.procesar();
		}else {
			int medio=(ultima+primera)/2;
			System.out.println("LA LISTA ES MUY PESADA ("+this.calcularTamLista()+") LA DIVIDO EN 2. Listas de texto pendientes por procesar: "+getQueuedTaskCount()+" padre: "+padre+" Division hecha por: "+ForkJoinTask.getPool()); //Me indica cuantas tareas pendientes hay en la cola
			ProcesadorTexto p1= new ProcesadorTexto(textos, primera, medio , this.calcularTamLista());//Agarro la mitad de las imagenes y se la asigno a una nueva tarea
			ProcesadorTexto p2= new ProcesadorTexto(textos, medio, ultima, this.calcularTamLista());//Agarro la otra mitad y se la asigno a otra tarea
			ForkJoinTask.invokeAll(p1,p2);//Meto las 2 nuevas tareas en la pool
			
			
		}
	}
	private int calcularTamLista() {
		int tamTot=0;
		for (int i = primera; i < ultima; i++) {
			tamTot+= FileUtils.sizeOf(textos.get(i));
		}
		
		
		return tamTot;
	}
	
	public void procesar() {
		try {
			String dir= "C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos"+"\\Texto"+primera+".zip ";
			FileOutputStream dirSalida = new FileOutputStream(dir);
			ZipOutputStream zipOut=new ZipOutputStream(dirSalida);
			
			for (int i = primera; i < ultima; i++) {
				
				FileInputStream fis= new FileInputStream(textos.get(i));
				ZipEntry zipEntry= new ZipEntry(textos.get(i).getName());
				zipOut.putNextEntry(zipEntry);
				byte[] bytes= new byte[2048];
				int length;
				while((length=fis.read(bytes))>=0) {
					zipOut.write(bytes, 0,length);
				}
				fis.close();
				
			}
			zipOut.close();
			dirSalida.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		System.out.println("Procesando lista de textos de "+this.calcularTamLista()+"bytes."+" padre: "+padre+" Tareas pendientes del hilo:"+ForkJoinTask.getQueuedTaskCount()+"\n");
		
		try {
			Thread.sleep(2000);
		}catch(InterruptedException e) {}
		System.out.println("Termino con exito lista de "+this.calcularTamLista()+"bytes. Con "+(ultima-primera)+" archivos dentro"+ "\nHecho por: "+Thread.currentThread().getName() +"\nInfo de la pool del hilo: "+ForkJoinTask.getPool()+"\n____________________");
		//Agarro la pool de la tarea actual, steals muestra la cantidad de tareas que fueron "robadas" por otros hilos
		
	}
}
