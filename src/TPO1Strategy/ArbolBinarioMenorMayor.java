package TPO1Strategy;


public class ArbolBinarioMenorMayor implements EstrategiaOrdenamiento{
	public int[] ordenar(int[] arreglo){
	    ArbolBB arbol = new ArbolBB();
	    for(int i = 0; i < arreglo.length;i++){
	        arbol.insertar(arreglo[i]);
	    }
	   
	    Lista listaArbol=arbol.listarInorden();
	    int []ordenado=new int[arreglo.length];
	    for (int i = 0; i < listaArbol.longitud(); i++) {
			ordenado[i]=(int)listaArbol.recuperar((i+1));
		}
	    return ordenado;
	  } 
}
