package TPO1Strategy;

public class ArbolBinarioMayorMenor implements EstrategiaOrdenamiento{
	public int[] ordenar(int[] arreglo) {
        ArbolBB arbol = new ArbolBB();
        for (int i = 0; i < arreglo.length; i++) {
            arbol.insertar(arreglo[i]);
        }
        Lista listaArbol=arbol.listarInverso();
	    int []ordenado=new int[arreglo.length];
	    for (int i = 0; i < listaArbol.longitud(); i++) {
			ordenado[i]=(int)listaArbol.recuperar((i+1));
		}
        return ordenado;
    }
}
