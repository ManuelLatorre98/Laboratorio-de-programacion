package TPO1;

public class Pedco {
	private ProcesadorArchivos strategy;
	
	public void procesarArchivos(Object listaArchivos) {
		
		strategy.procesar();
	}
	
	public void setStrategy(ProcesadorArchivos strategy) {
		this.strategy=strategy;
	}
	
	public ProcesadorArchivos getStrategy() {
		return this.strategy;
	}
	
}
