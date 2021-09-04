package TPO1Strategy;

public class ContextOrdenador { //Es una clase que se encarga de realizar busquedas con diferentes algoritmos 
	EstrategiaOrdenamiento strategy;
	
	public ContextOrdenador(EstrategiaOrdenamiento strategy) {//Creo el contexto
		this.strategy=strategy;
	}
	
	public void setStrategy(EstrategiaOrdenamiento strategy) { //Seteo la estrategia del contexto
		this.strategy=strategy;
	}
	
	public Comparable [] ejecutarEstrategia(Comparable []estructura) {//Ejecuto la tarea del contexto
		return this.strategy.ordenar(estructura);
	}
}
