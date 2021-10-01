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

public class Strategy{
	public String[] ejecutar(int select) {
		ContextOrdenador ordenador= new ContextOrdenador(null);
		int cantElem=10;
		int []estructura= new int[cantElem];
		int []resultado;
		String[] arrayEstr=new String[2];
		String estructuraDesordenada=generarEst(estructura,cantElem);//Cargo un arreglo desordenado, el metodo me devuelve el string del array cargado
		arrayEstr[0]=estructuraDesordenada;//Lo meto en el array de estructuras para retornarlo a la interfaz y que lo imprima ella
		//Los SysOut los dejo para debugear en caso que falle algo de la interfaz o si se prefiere ver por consola
		System.out.println("ESTRUCTURA: "+estructuraDesordenada);
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
			String txt= getStringArray(resultado);	
			arrayEstr[1]=txt;
			System.out.println(txt);
			return arrayEstr;//Retorno la estructura desordenada con la que trabaje junto con el resultado ordenado
	}
	

	
	public int menu(Scanner sc) {
		System.out.println("Seleccione una opcion: ");
		System.out.println("1. Ordenar de menor a mayor con orden: O(n^2) (Burbuja)");
		System.out.println("2. Ordenar de menor a mayor con orden: O(n) (BucketSort)");
		System.out.println("3. Ordenar de menor a mayor con orden: O(n log n) (Arbol Binario)");
		System.out.println("4. Ordenar de mayor a menor con orden: O(n^2) (Burbuja)");
		System.out.println("5. Ordenar de mayor a menor con orden: O(n) (BucketSort)");
		System.out.println("6. Ordenar de mayor a menor con orden: O(n log n) (Arbol Binario)");
		return sc.nextInt();
	}
	
	public String getStringArray(int []resultado) {
		String txt= "[";	
		for (int i = 0; i < resultado.length; i++) {
			txt+=resultado[i];
			if(i+1<resultado.length) {
				txt+=",";
			}
		}
		txt+="]\n";
		return txt;
	}
	public String generarEst(int[]estructura, int cantElem) {
		Random generador = new Random();//Genero una lista con 5 numeros random que no se repiten
        int max=50;
        int min=1;
        int contNum=0;
        int num;
  
        Hashtable<Integer, Integer> hash= new Hashtable<Integer, Integer>();
        
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
