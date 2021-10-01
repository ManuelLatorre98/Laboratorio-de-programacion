package TPO1ForkJoin;

import java.awt.Component;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Window;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JPanel;
import org.apache.commons.io.FileUtils;

public class InterfazGrafica extends JFrame implements ActionListener{
	private static ForkJoin forkJoin;
	private InterfazGrafica() {
		setTitle("Fork Join Recursive Action");
		setSize(450,135);
		
		//Declaro los botones
		JButton borrar= new JButton("Borrar textos almacenados");
		JButton iniForkJoin= new JButton("Iniciar ForkJoin"); 
		JPanel panel= new JPanel();
		
		
		//Seteo cosas de los botones
		borrar.setPreferredSize(new Dimension(this.getWidth(),40));
		borrar.setFont(new Font("Arial", Font.BOLD, 20));
		forkJoin.setPreferredSize(new Dimension(this.getWidth(),40));
		forkJoin.setFont(new Font("Arial", Font.BOLD, 20));
		
		//Agrego los botones al panel
		panel.add(borrar);
		panel.add(forkJoin);
		
		
		this.getContentPane().add(panel);
		setVisible(true);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		//Eventos boton Borrar
		borrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				forkJoin.vaciarDir();
			}
		});
		
		//Eventos boton ForkJoin
		iniForkJoin.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				ingresoCarpeta();
				forkJoin.ejecutar();
			}
		});
		
		//Termina ejecucion cuando cierro panel
		Component p = panel;
		  while ( p != null && ! (p instanceof Window))
		    p = p.getParent();

		   ((Window) p ).addWindowListener(new java.awt.event.WindowAdapter() {
			    @Override
			    public void windowClosing(java.awt.event.WindowEvent windowEvent) {
			    	System.exit(1);
			    }
			});

	}
	
	public static void main(String[] args) {
		forkJoin= new ForkJoin();
		new InterfazGrafica();
	}

	private void ingresoCarpeta() {
		System.out.println("Ingrese direccion de la carpeta con archivos");//Texto para debugear
		JFileChooser chooser = new JFileChooser();
		chooser.setCurrentDirectory(new java.io.File("src\\TPO1ForkJoin"));
		chooser.setDialogTitle("Seleccione la carpeta con textos");
		chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		chooser.setAcceptAllFileFilterUsed(false);
		int aprove=chooser.showOpenDialog(this);
		if(aprove==chooser.APPROVE_OPTION) {
			try {
				File srcDir=chooser.getSelectedFile();
				File destDir= new File("src\\TPO1ForkJoin\\AlmacenamientoTextos");
				FileUtils.copyDirectory(srcDir, destDir);
			}catch(IOException e) {}
			catch(NullPointerException e) {}
		}else {//Si se cancelo o se cerro el chooser termina la ejecucion, no lo tratamos como evento (como en el jFrame) porque daba problemas cuando se cerraba el chooser
			System.exit(1);
		}
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}
}
