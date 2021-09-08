package TPO1ForkJoin;

import java.awt.Component;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Window;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JPanel;

import org.apache.commons.io.FileUtils;

public class Main extends JFrame implements ActionListener{
	public Main() { //Constructor de la clase main
		setTitle("Fork Join Recursive Action");
		setSize(450,135);
		
		//Declaro los botones
		JButton borrar= new JButton("Borrar textos almacenados");
		JButton forkJoin= new JButton("Iniciar ForkJoin"); 
		JPanel panel= new JPanel();
		
		
		//Seteo cosas de los botones
		borrar.setPreferredSize(new Dimension(this.getWidth(),40));
		borrar.setFont(new Font("Arial", Font.BOLD, 20));
		forkJoin.setPreferredSize(new Dimension(this.getWidth(),40));
		forkJoin.setFont(new Font("Arial", Font.BOLD, 20));
		
		//Agrego los botones al panel
		panel.add(borrar);
		panel.add(forkJoin);
		
		
		this.getContentPane().add(panel);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		//Eventos boton Borrar
		borrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				vaciarDir();
			}
		});
		
		//Eventos boton ForkJoin
		forkJoin.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar();
			}
		});
		
		//Termina ejecucion cuando cierro panel
		Component p = panel;
		  while ( p != null && ! (p instanceof Window))
		    p = p.getParent();

		   
		   ((Window) p ).addWindowListener(new java.awt.event.WindowAdapter() {
			    @Override
			    public void windowClosing(java.awt.event.WindowEvent windowEvent) {
			    	System.exit(1);
			    }
			});
		   
		   
	}
	
	
	public static void main(String[] args) {
		new Main();
	}
	
	public static void ejecutar() {
		Scanner sc= new Scanner(System.in);
		List <File>archivos;
		
		ingresoCarpeta(sc);
		archivos=listarArchivos();

		Pedco pedco= new Pedco();
		pedco.procesar(archivos);
		
		//vaciarDir();
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
		File almTxt= new File("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos");
		File [] listaArchivos=almTxt.listFiles();//Esto me devuelve un arreglo y trabajamos con arrayList
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
	 
	public void actionPerformed(ActionEvent e) {
		System.out.println("fdsfds");
	}
}
