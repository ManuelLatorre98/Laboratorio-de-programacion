/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Sele;

/**
 *
 * @author Selena
 */
public class Binario {
public static String binario(int[] arreglo){
    ArbolBB arbol = new ArbolBB();
    for(int i = 0; i < arreglo.length;i++){
        arbol.insertar(arreglo[i]);
    }
    String ordenado = arbol.listarInorden().toString();
    return ordenado;
  }    
}
