package TPO1;

import java.util.List;
import java.util.concurrent.ForkJoinPool;

public class Pedco {
	private ProcesadorArchivos strategy;
	
	public void execute(ProcesadorArchivos estrategia) {
		this.strategy=estrategia;
		
		
		strategy.procesar();
	}
	
	public void setStrategy(ProcesadorArchivos strategy) {
		this.strategy=strategy;
	}
	
	public ProcesadorArchivos getStrategy() {
		return this.strategy;
	}
	
	
	
}
