package TPO1ForkJoin;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

import javax.swing.JFileChooser;

import org.apache.commons.io.FileUtils;

public class Main {
	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		GeneradorListaTextos generador= new GeneradorListaTextos(); //CAMBIAR A TEXTO
		List <File>archivos;
		
		ingresoCarpeta(sc);
		archivos=listarArchivos();
		
		ProcesadorTexto procesadorTexto= new ProcesadorTexto(archivos, 1, archivos.size(), 0); //Simulamos que utilizamos la estrategia procesadorTexto
		Pedco pedco= new Pedco();
		pedco.procesar(procesadorTexto);
		procesadorTexto.join();
		vaciarDir();
		
	}
	
	public static void ingresoCarpeta(Scanner sc) {
		System.out.println("Ingrese direccion de la carpeta con archivos");
		
		JFileChooser chooser = new JFileChooser();
		chooser.setCurrentDirectory(new java.io.File("C:\\Users\\manul\\Desktop"));
		chooser.setDialogTitle("Seleccione la carpeta con textos");
		chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		chooser.setAcceptAllFileFilterUsed(false);
		chooser.showSaveDialog(null);
		try {
			//System.out.println(chooser.getSelectedFile());
			File srcDir=chooser.getSelectedFile();
			File destDir= new File("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos");
		
			FileUtils.copyDirectory(srcDir, destDir);
			/*System.out.println("Borrar");
			sc.nextLine();
			FileUtils.cleanDirectory(destDir);//Con esto limpio la carpeta*/
		}catch(IOException e) {}
		catch(NullPointerException e) {}
	}

	public static List<File> listarArchivos() {
		File destDir= new File("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos");
		File [] listaArchivos=destDir.listFiles();//Esto me devuelve un arreglo y trabajamos con arrayList
		
	
		List <File> archivos= new ArrayList<File>();//Pasamos los archivos al arrayList que necesitamos
		for (int i = 0; i < listaArchivos.length; i++) {
			archivos.add(listaArchivos[i]);
			
		}
		return archivos;
	}
	
	public static void vaciarDir() {
		File destDir= new File("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos");
		try {	
			System.out.println("vaciar!");
			FileUtils.cleanDirectory(destDir);
		}catch(IOException e) {}
	}
}
