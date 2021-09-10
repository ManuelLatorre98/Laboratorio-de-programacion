package TPO1Strategy;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Image;
import java.awt.Window;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Hashtable;
import java.util.Random;
import java.util.Scanner;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

public class Main extends JFrame {
	public Main() { //Constructor de la clase main
		setTitle("Patron Strategy");
		setSize(900,380);
		
		
		//Declaro los botones
		JButton bot1= new JButton("Ordenar de menor a mayor con orden: O(n^2) (Burbuja)");
		JButton bot2= new JButton("Ordenar de menor a mayor con orden: O(n) (BucketSort)"); 
		JButton bot3= new JButton("Ordenar de menor a mayor con orden: O(n log n) (Arbol Binario)"); 
		JButton bot4= new JButton("Ordenar de mayor a menor con orden: O(n^2) (Burbuja)"); 
		JButton bot5= new JButton("Ordenar de mayor a menor con orden: O(n) (BucketSort)"); 
		JButton bot6= new JButton("Ordenar de mayor a menor con orden: O(n log n) (Arbol Binario)"); 

		JPanel panel= new JPanel();
		
		
		//Seteo cosas de los botones
		bot1.setPreferredSize(new Dimension(this.getWidth(),40));
		bot1.setFont(new Font("Arial", Font.BOLD, 20));
		bot1.setHorizontalAlignment(SwingConstants.CENTER);
		bot2.setPreferredSize(new Dimension(this.getWidth(),40));
		bot2.setFont(new Font("Arial", Font.BOLD, 20));
		bot2.setHorizontalAlignment(SwingConstants.CENTER);
		bot3.setPreferredSize(new Dimension(this.getWidth(),40));
		bot3.setFont(new Font("Arial", Font.BOLD, 20));
		bot3.setHorizontalAlignment(SwingConstants.CENTER);
		bot4.setPreferredSize(new Dimension(this.getWidth(),40));
		bot4.setFont(new Font("Arial", Font.BOLD, 20));
		bot4.setHorizontalAlignment(SwingConstants.CENTER);
		bot5.setPreferredSize(new Dimension(this.getWidth(),40));
		bot5.setFont(new Font("Arial", Font.BOLD, 20));
		bot5.setHorizontalAlignment(SwingConstants.CENTER);
		bot6.setPreferredSize(new Dimension(this.getWidth(),40));
		bot6.setFont(new Font("Arial", Font.BOLD, 20));
		bot6.setHorizontalAlignment(SwingConstants.CENTER);
		
		//JTextField
		JTextField estDes= new JTextField("Estructura inicial");
		estDes.setPreferredSize(new Dimension(320,40));
		estDes.setFont(new Font("Arial", Font.PLAIN, 20));
		estDes.setBackground(Color.white);
		estDes.setForeground(Color.gray.brighter());
		estDes.setHorizontalAlignment(SwingConstants.CENTER);
		estDes.setBounds(0,0,200,100);
		estDes.setEditable(false);
		
		
		JTextField resultado= new JTextField("Estructura ordenada");
		resultado.setPreferredSize(new Dimension(320,40));
		resultado.setFont(new Font("Arial", Font.PLAIN, 20));
		resultado.setBackground(Color.white);
		resultado.setForeground(Color.gray.brighter());
		resultado.setHorizontalAlignment(SwingConstants.CENTER);
		resultado.setEditable(false);
		
		//Imagen
		BufferedImage imagen=null;
		
		try {
			imagen= ImageIO.read(new File("src/TPO1Strategy/Flecha.png"));
		}catch(IOException e) {}
		Image dimImg= imagen.getScaledInstance(100, 57, Image.SCALE_SMOOTH);
		JLabel imgLabel= new JLabel(new ImageIcon(dimImg));
		
		//Agrego los elementos al panel
		panel.add(bot1);
		panel.add(bot2);
		panel.add(bot3);
		panel.add(bot4);
		panel.add(bot5);
		panel.add(bot6);
		panel.add(estDes);
		panel.add(imgLabel);
		panel.add(resultado);
		this.getContentPane().add(panel);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		
		//Eventos botones
		bot1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(1,estDes,resultado);
			}
		});
		
		bot2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(2,estDes,resultado);
			}
		});
		
		bot3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(3,estDes,resultado);
				
			}
		});
		
		bot4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(4,estDes,resultado);
			}
		});
		bot5.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(5,estDes,resultado);
			}
		});
		bot6.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ejecutar(6,estDes,resultado);
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
	
	public static void ejecutar(int select, JTextField estDes, JTextField txtFieldResult) {
		ContextOrdenador ordenador= new ContextOrdenador(null);
		int cantElem=10;
		int []estructura= new int[cantElem];
		int []resultado;
		
		estDes.setForeground(Color.black);
		estDes.setText(generarEst(estructura,cantElem));
		System.out.println("ESTRUCTURA: "+estDes.getText());
		
		
			switch(select){
			case 1://Algoritmo burbuja: O(n^2)
				System.out.print("ORDENAMIENTO MENOR A MAYOR: Orden de ejecucion elegido: O(n^2). Resultado: ");
				ordenador.setStrategy(new BurbujaMenorMayor());
				break;
			case 2://Algoritmo bucket: O(n)
				System.out.print("ORDENAMIENTO MENOR A MAYOR: Orden de ejecucion elegido: O(n). Resultado: ");
				ordenador.setStrategy(new BucketSortMenorMayor());
				break;
			case 3://Algoritmo AB: O(n log n)
				System.out.print("ORDENAMIENTO MENOR A MAYOR: Orden de ejecucion elegido: O(n log n). Resultado: ");
				ordenador.setStrategy(new ArbolBinarioMenorMayor());
				break;
			case 4://Algoritmo burbuja: O(n^2)
				System.out.print("ORDENAMIENTO MAYOR A MENOR: Orden de ejecucion elegido: O(n^2). Resultado: ");
				ordenador.setStrategy(new BurbujaMayorMenor());
				break;
			case 5://Algoritmo bucket: O(n)
				System.out.print("ORDENAMIENTO MAYOR A MENOR: Orden de ejecucion elegido: O(n). Resultado: ");
				ordenador.setStrategy(new BucketSortMayorMenor());
				break;
			case 6://Algoritmo AB: O(n log n)
				System.out.print("ORDENAMIENTO MAYOR A MENOR: Orden de ejecucion elegido: O(n log n). Resultado: ");
				ordenador.setStrategy(new ArbolBinarioMayorMenor());
				break;
			}
			
			
			resultado= ordenador.ejecutarEstrategia(estructura);
			
			
			
			String txt= "[";	
			for (int i = 0; i < resultado.length; i++) {
				txt+=resultado[i];
				if(i+1<resultado.length) {
					txt+=",";
				}
			}
			txt+="]\n";
			System.out.println(txt);
			txtFieldResult.setForeground(Color.black);
			txtFieldResult.setText(txt);
	}
	

	
	public static int menu(Scanner sc) {
		System.out.println("Seleccione una opcion: ");
		System.out.println("1. Ordenar de menor a mayor con orden: O(n^2) (Burbuja)");
		System.out.println("2. Ordenar de menor a mayor con orden: O(n) (BucketSort)");
		System.out.println("3. Ordenar de menor a mayor con orden: O(n log n) (Arbol Binario)");
		System.out.println("4. Ordenar de mayor a menor con orden: O(n^2) (Burbuja)");
		System.out.println("5. Ordenar de mayor a menor con orden: O(n) (BucketSort)");
		System.out.println("6. Ordenar de mayor a menor con orden: O(n log n) (Arbol Binario)");
		return sc.nextInt();
	}
	
	public static String generarEst(int[]estructura, int cantElem) {
		Random generador = new Random();//Genero una lista con 5 numeros random que no se repiten
        int max=50;
        int min=1;
        int contNum=0;
        int num;
  
        Hashtable hash= new Hashtable();
        
        int indEst=0;
        String stringEst="[";
        
        while(contNum<cantElem) {
            num=(generador.nextInt(max - min) + min);
            if(hash.get(num)==null) {
            	estructura[indEst++]=num;
            	stringEst+=num;
            	if(contNum+1<cantElem) {
					stringEst+=",";
				}
                hash.put(num, num);
                contNum++;
            }
        }
        stringEst+="]";
        
        return stringEst;
	}
}
