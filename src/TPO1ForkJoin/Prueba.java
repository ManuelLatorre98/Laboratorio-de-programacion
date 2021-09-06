package TPO1ForkJoin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class Prueba {
	public static void main(String[] args) throws IOException {
		FileOutputStream dirSalida= new FileOutputStream("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos\\Texto10.zip");
		ZipOutputStream zipOut=new ZipOutputStream(dirSalida);
				
		File almTxt= new File("C:\\Users\\manul\\eclipse-workspace\\Laboratorio de programacion\\src\\TPO1ForkJoin\\AlmacenamientoTextos");
		File [] listaArchivos=almTxt.listFiles();//Esto me devuelve un arreglo y trabajamos con arrayList
		System.out.println(listaArchivos[1].getName());
		FileInputStream fis= new FileInputStream(listaArchivos[1]);
		ZipEntry zipEntry= new ZipEntry(listaArchivos[1].getName());
		zipOut.putNextEntry(zipEntry);
		byte[] bytes= new byte[2048];
		int length;
		while((length=fis.read(bytes))>=0) {
			zipOut.write(bytes, 0,length);
		}
		fis.close();
		zipOut.close();
		dirSalida.close();
	}
}
