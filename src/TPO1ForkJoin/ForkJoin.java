package TPO1ForkJoin;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JFrame;
import org.apache.commons.io.FileUtils;
public class ForkJoin extends JFrame implements ActionListener{	
	public void ejecutar() {
		List <File>archivos;
		archivos=listarArchivos();
		Pedco pedco= new Pedco();
		pedco.procesar(archivos);
	}


	public List<File> listarArchivos() {
		File almTxt= new File("src\\TPO1ForkJoin\\AlmacenamientoTextos");
		File [] listaArchivos=almTxt.listFiles();//Esto me devuelve un arreglo y trabajamos con arrayList
		List <File> archivos= new ArrayList<File>();//Pasamos los archivos al arrayList que necesitamos
		for (int i = 0; i < listaArchivos.length; i++) {
			archivos.add(listaArchivos[i]);
		}
		return archivos;
	}
	
	public void vaciarDir() {
		File destDir= new File("src\\TPO1ForkJoin\\AlmacenamientoTextos");
		try {	
			System.out.println("vaciar!");
			FileUtils.cleanDirectory(destDir);
		}catch(IOException e) {}
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
	}

}
