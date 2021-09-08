/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Ordenamiento;

import static Ordenamiento.Binario.binario;
import static Ordenamiento.BucketSort.sortMayorMenor;
import static Ordenamiento.BucketSort.sortMenorMayor;
import static Ordenamiento.Burbuja.burbuja;

/**
 *
 * @author Selena
 */
public class prueba {

    public static void main(String[] args) {
        //Valores que tiene el arreglo desordenado.
        int arreglo[] = {8, 6, 7, 2, 1, 9, 5, 3, 4, 0, 11, 13, 12, 10};
        
        //imprimimos el arreglo.
        System.out.println("Arreglo: \n " + escribirArray(arreglo));

        //bucket mayor a menor
        int arregloOrdenado[] = sortMayorMenor(arreglo);
        
        //bucjet menor a mayor
        //int arregloOrdenado[] = sortMenorMayor(arreglo);
        
        /* BURBUJA
        int arregloOrdenado[] = burbuja(arreglo);
         */
        
        //imprimimos el arreglo ordenado
        System.out.println("Arreglo Ordenado: \n " + escribirArray(arregloOrdenado));
        
    /*BINARIO: comentar el sout de arriba para probar este
        String arregloOrdenado = binario(arreglo);
        System.out.println(arregloOrdenado);
        */
    }

    
    //esto es pa que se vea lindo el array
    public static String escribirArray(int[] a) {
        String cadena = "";
        for (int i = 0; i < a.length; i++) {
            if (i == 0) {
                cadena += "[ " + a[i] + " - ";
            } else {
                if (i == a.length - 1) {
                    cadena += a[i] + " ]";
                } else {
                    cadena += a[i] + " - ";
                }
            }
        }
        return cadena;
    }
}
