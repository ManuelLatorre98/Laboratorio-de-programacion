package TPO1Strategy;

public class BurbujaMenorMayor implements EstrategiaOrdenamiento {

	public int[] ordenar(int[] arreglo) {
		int auxiliar;
	     
	      for(int i = 1; i < arreglo.length; i++)
	      {
	        for(int j = 0;j < arreglo.length-i;j++)
	        {
	          if(arreglo[j] > arreglo[j+1])
	          {
	            auxiliar = arreglo[j];
	            arreglo[j] = arreglo[j+1];
	            arreglo[j+1] = auxiliar;
	          }   
	        }
	      }
	      return arreglo;
	}
	
	
}
