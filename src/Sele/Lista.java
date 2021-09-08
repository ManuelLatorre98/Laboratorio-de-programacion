package Ordenamiento;

public class Lista {

    private Nodo cabecera;
    private int longitud;

    public Lista() {
        this.cabecera = null;
        this.longitud = 0;
    }

    public boolean insertar(Object elem, int pos) {
        boolean exito = true;
        //verifica si la posicion es valida.
        if (pos < 1 || pos > this.longitud + 1) {
            exito = false;
        } else {
            if (pos == 1) { //si pos es 1, se inserta en cabecera
                this.cabecera = new Nodo(elem, this.cabecera);
            } else {
                Nodo aux = this.cabecera; //nodo aux que apunte a cabecera para recorrer la lista
                int i = 1;
                while (i < pos - 1) { //paso de nodo en nodo hasta llegar a la posicion anterior a la que quiero insertar
                    aux = aux.getEnlace();
                    i++;
                }
                Nodo nuevo = new Nodo(elem, aux.getEnlace()); // creo el nodo enlazandolo a aux.getEnlace
                aux.setEnlace(nuevo); // lo inserto 
            }
            this.longitud++; //aumento la longitud a 1 unidad
        }
        return exito;
    }

    public boolean eliminar(int pos) {
        boolean exito = true;
        //verifica si la posicion es valida.
        if (pos < 1 || pos > this.longitud) {
            exito = false;
        } else {
            Nodo aux = this.cabecera; //nodo aux que apunte a cabecera para recorrer la lista
            if (pos == 1) { //si quiero eliminar la cabecera
                aux = aux.getEnlace();
                if (aux == null) { //si aux es null significa que la lista tenía un solo elemento
                    this.cabecera = null; //la lista queda vacia
                } else {
                    this.cabecera = new Nodo(aux.getElemento(), aux.getEnlace()); //cabecera apunta al de al lado
                }
            } else { //caso general:
                int i = 1;
                while (i < pos - 1) { //recorro la lista hasta la pos anterior
                    aux = aux.getEnlace();
                    i++;
                }
                aux.setEnlace(aux.getEnlace().getEnlace()); // que se encargue el Garbage Collector
            }
            this.longitud--; // longitud - 1, porque saque un elemento
        }
        return exito;
    }

    public Object recuperar(int pos) {
        // Devuelve el elemento de la posición pos.
        Object elem = null;
        if (pos >= 1 && pos <= this.longitud) { // si pos es valida
            if (pos == 1) { //pos 1, es cabecera
                elem = this.cabecera.getElemento();
            } else {
                Nodo aux = this.cabecera; // nodo auxiliar que recorre la lista
                int i = 1;
                while (i < pos) {
                    aux = aux.getEnlace();
                    i++;
                }
                elem = aux.getElemento();
            }
        }
        return elem;
    }

    public int localizar(Object elem) {
        // Devuelve la posición en la que se encuentra la primera ocurrencia de elem dentro de la lista.
        int pos = 0;
        boolean igual = false;
        Nodo aux = this.cabecera; // nodo auxiliar que recorre la lista
        while (aux != null && !igual) {
            igual = aux.getElemento().equals(elem);
            aux = aux.getEnlace();
            pos++;
        }
        if (!igual) { //En caso de no encontrarlo devuelve -1.    
            pos = -1;
        }
        return pos;
    }

    public int longitud() {
        return this.longitud;
    }

    public void vaciar() {
        this.cabecera = null;
        this.longitud = 0;
    }

    public boolean esVacia() {
        return (this.cabecera == null);
    }

    @Override
    public Lista clone() {
        Lista clon = new Lista(); //creo una lista vacia
        Nodo aux1, aux2; // nodos auxiliares
        if (this.cabecera != null) { // si la lista original no esta vacia
            clon.longitud = this.longitud;
            aux1 = this.cabecera; //aux1 recorre la lista original
            clon.cabecera = new Nodo(aux1.getElemento(), null); // creo un nodo con el elemento apuntado por aux1
            aux1 = aux1.getEnlace();
            aux2 = clon.cabecera; //aux 2, recorre la lista clon
            while (aux1 != null) {
                aux2.setEnlace(new Nodo(aux1.getElemento(), null)); // creo el nodo con el elem de aux1 y lo enlazo a aux2
                aux2 = aux2.getEnlace();
                aux1 = aux1.getEnlace();
            }
        }
        return clon;
    }

    @Override
    public String toString() {
        String cadena;
        if (this.cabecera == null) {
            cadena = "Lista vacía";
        } else {
            Nodo aux = this.cabecera; // nodo auxiliar que recorre la lista
            cadena = "[";
            while (aux != null) {
                cadena = cadena + aux.getElemento().toString();
                aux = aux.getEnlace();
                if (aux != null) {
                    cadena += " , ";
                }
            }
            cadena += "]";
        }
        return cadena;
    }

    // OTROS
    public Lista listarMultiplos(int num) {
        Lista res;
        int pos = 1;
        res = new Lista();
        Nodo aux1, aux2;
        if (this.cabecera != null) {
            res.longitud = this.longitud / num;
            aux1 = this.cabecera;
            aux2 = res.cabecera;
            while (pos < this.longitud) {
                if (pos % num == 0) {
                    if (res.cabecera == null) {
                        res.cabecera = new Nodo(aux1.getElemento(), null);
                        aux2 = res.cabecera;
                    } else {
                        aux2.setEnlace(new Nodo(aux1.getElemento(), null));
                        aux2 = aux2.getEnlace();
                    }
                }
                aux1 = aux1.getEnlace();
                pos++;
            }
        }
        return res;
    }

    public Lista intercalar(Lista L2) {
        int pos = 2, i = 1;
        Nodo aux = this.cabecera, aux2 = L2.cabecera;
        while (aux2 != null) {
            while (i < pos - 1) {
                aux = aux.getEnlace();
                i++;
            }
            aux.setEnlace(new Nodo(aux2.getElemento(), aux.getEnlace()));
            aux2 = aux2.getEnlace();
            this.longitud++;
            if (pos + 2 <= this.longitud + 1) {
                pos = pos + 2;
            } else {
                pos++;
            }
        }
        return this;
    }

    public void agregarElem(Object nuevo, int x) {
        int pos = 1 + x, i = 1;
        if (x > 0) {
            this.cabecera = new Nodo(nuevo, this.cabecera);
            this.longitud++;
            Nodo aux = this.cabecera;
            while (pos < this.longitud + 1) {
                while (i < pos) {
                    aux = aux.getEnlace();
                    i++;
                }
                Nodo nodoNuevo = new Nodo(nuevo, aux.getEnlace());
                aux.setEnlace(nodoNuevo);
                this.longitud++;
                pos = pos + 1 + x;
            }
        }
    }

}
