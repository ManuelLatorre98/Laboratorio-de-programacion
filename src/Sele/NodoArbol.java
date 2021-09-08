package Ordenamiento;
public class NodoArbol {

    private Comparable elemento;
    private NodoArbol izquierdo;
    private NodoArbol derecho;
    
    public NodoArbol(Comparable elem, NodoArbol izq, NodoArbol der) {
        this.elemento = elem;
        this.izquierdo = izq;
        this.derecho = der;
    }

    public Comparable getElemento() {
        return elemento;
    }

    public void setElemento(Comparable elemento) {
        this.elemento = elemento;
    }

    public NodoArbol getIzquierdo() {
        return izquierdo;
    }

    public void setIzquierdo(NodoArbol izquierdo) {
        this.izquierdo = izquierdo;
    }

    public NodoArbol getDerecho() {
        return derecho;
    }

    public void setDerecho(NodoArbol derecho) {
        this.derecho = derecho;
    }

}
