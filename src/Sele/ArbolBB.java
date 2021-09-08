package Sele;

import static java.lang.Integer.max;
public class ArbolBB {

    private NodoArbol raiz;

    public ArbolBB() {
        this.raiz = null;
    }

    public boolean insertar(Comparable elem) {
        boolean exito = true;
        if (this.raiz == null) {
            // si la raiz es nula, inserto el elemento en la raiz.
            this.raiz = new NodoArbol(elem, null, null);
        } else {
            //si la raiz no es nula, acudo al metodo auxiliar. 
            exito = insertarAux(this.raiz, elem);
        }
        return exito;
    }

    private boolean insertarAux(NodoArbol nodo, Comparable elem) {
        boolean exito = true;
        if ((elem.compareTo(nodo.getElemento()) == 0)) {
            exito = false; //elemento repetido.
        } else {
            if (elem.compareTo(nodo.getElemento()) < 0) { //elem es menor que nodo.getElemento()
                if (nodo.getIzquierdo() != null) { // si tiene HI baja al subarbol izq.
                    exito = insertarAux(nodo.getIzquierdo(), elem);
                } else { //sino, inserta.
                    nodo.setIzquierdo(new NodoArbol(elem, null, null));
                }
            } else {
                //elem es mayor que nodo.getElemento()
                if (nodo.getDerecho() != null) { //si tiene HD baja al subarbol derecho.
                    exito = insertarAux(nodo.getDerecho(), elem);
                } else { // sino, inserta.
                    nodo.setDerecho(new NodoArbol(elem, null, null));
                }
            }
        }
        return exito;
    }

    public boolean eliminar(Comparable elem) {
        boolean exito = false;
        if (this.raiz != null) { //si el arbol no está vacio, analizo la raiz.
            if (elem.compareTo(this.raiz.getElemento()) == 0) { //si el elemento a eliminar es la raíz
                //analizo los hijos
                if (this.raiz.getIzquierdo() != null) {
                    if (this.raiz.getDerecho() == null) { //solo tiene HI
                        this.raiz = this.raiz.getIzquierdo(); // seteo raiz por HI
                    } else { // tiene ambos hijos, acudimos al caso 3
                        eliminarCaso3(this.raiz);
                    }
                } else {
                    if (this.raiz.getDerecho() != null) { // solo tiene HD
                        this.raiz = this.raiz.getDerecho(); // seteo raiz por HD
                    } else { // es hoja.
                        this.raiz = null; // seteo raiz a null
                    }
                }
                exito = true;
            } else { //si no es la raiz, acudo al metodo auxiliar.
                exito = eliminarAux(this.raiz, null, elem);
            }
        }
        return exito;
    }

    private boolean eliminarAux(NodoArbol nodo, NodoArbol padre, Comparable elem) {
        boolean exito = false;
        if (elem.compareTo(nodo.getElemento()) == 0) { // si encuentro el elemento, analizo los hijos.
            if (nodo.getIzquierdo() != null) {
                if (nodo.getDerecho() != null) { // tiene ambos hijos
                    eliminarCaso3(nodo); // acudo al caso 3
                } else { // solo tiene HI
                    eliminarNodo(padre, nodo.getElemento(), nodo.getIzquierdo()); //acudo al caso 2
                }
            } else {
                if (nodo.getDerecho() != null) { // solo tiene HD
                    eliminarNodo(padre, nodo.getElemento(), nodo.getDerecho()); //acudo al caso 2
                } else { // es hoja.
                    eliminarNodo(padre, nodo.getElemento(), null); //acudo al caso 1
                }
            }
            exito = true;
        } else { //llamada recursiva.
            if (elem.compareTo(nodo.getElemento()) < 0) { //elem es menor que nodo.getElemento()
                if (nodo.getIzquierdo() != null) { // si tiene HI baja al sbarbol izq.
                    exito = eliminarAux(nodo.getIzquierdo(), nodo, elem);
                }
            } else { //elem es mayor que nodo.getElemento()
                if (nodo.getDerecho() != null) { //si tiene HD baja al subarbol derecho.
                    exito = eliminarAux(nodo.getDerecho(), nodo, elem);
                }
            }
        }
        return exito;
    }

    private void eliminarCaso3(NodoArbol nodo) {
        //Este metodo es llamado para el caso 3 (si tiene dos hijos).
        NodoArbol candidato = nodo.getDerecho(), padreCand = nodo;
        while (candidato.getIzquierdo() != null) {
            padreCand = candidato;
            candidato = candidato.getIzquierdo();
        }
        nodo.setElemento(candidato.getElemento());
        if (padreCand.getElemento().compareTo(nodo.getElemento()) == 0) {
            //el candidato es hijo derecho del nodo a eliminar.
            nodo.setDerecho(candidato.getDerecho());
        } else { // enlazo a padre, con su nieto derecho.
            padreCand.setIzquierdo(candidato.getDerecho()); //seteo HI.
        }
    }

    private void eliminarNodo(NodoArbol padre, Comparable elem, NodoArbol nieto) {
        //Este metodo es llamado para el caso 1 (si es hoja) y caso 2(si tiene un hijo)
        if (padre != null) { // enlazo a padre, con su nieto.
            if (elem.compareTo(padre.getDerecho().getElemento()) == 0) {// si elem es el HD de padre
                padre.setDerecho(nieto); //seteo HD.
            } else { //elem es HI de padre
                padre.setIzquierdo(nieto); //seteo HI.
            }
        }
    }

    public boolean pertenece(Comparable elem) {
        return perteneceAux(this.raiz, elem);
    }

    private boolean perteneceAux(NodoArbol nodo, Comparable elem) {
        boolean exito = false;
        if (!exito) { //repite hasta encontrar.
            if ((elem.compareTo(nodo.getElemento()) == 0)) {
                exito = true; //elemento encontrado.
            } else {
                if (elem.compareTo(nodo.getElemento()) < 0) { //elem es menor que nodo.getElemento()
                    if (nodo.getIzquierdo() != null) { // si tiene HI baja al subarbol izq.
                        exito = perteneceAux(nodo.getIzquierdo(), elem);
                    }
                } else { //elem es mayor que nodo.getElemento()
                    if (nodo.getDerecho() != null) { //si tiene HD baja al subarbol derecho.
                        exito = perteneceAux(nodo.getDerecho(), elem);
                    }
                }
            }
        }
        return exito;
    }

    public int altura() {
        return alturaAux(this.raiz);
    }

    private int alturaAux(NodoArbol nodo) {
        int altura = -1;
        if (nodo != null) {
            if (nodo.getDerecho() == null & nodo.getIzquierdo() == null) {
                altura = 0;
            } else {
                altura = max(alturaAux(nodo.getIzquierdo()), alturaAux(nodo.getDerecho())) + 1;
            }
        }
        return altura;
    }

    public boolean eliminarMin() {
        NodoArbol nodo = this.raiz, padre = this.raiz;
        boolean exito = false;
        if (this.raiz != null) { //si el arbol no está vacio, analizo la raíz
            if (this.raiz.getIzquierdo() == null) { // el nodo a eliminar es la raìz
                if (this.raiz.getDerecho() != null) { // la raíz tiene HD
                    this.raiz = this.raiz.getDerecho(); // seteo raiz por HD
                } else { // la raiz es hoja.
                    this.raiz = null; // seteo raiz a null
                }
            } else { // no es la raiz, asi que busco nodo extremo izquierdo
                while (nodo.getIzquierdo() != null) {
                    padre = nodo;
                    nodo = nodo.getIzquierdo();
                } // una vez encontrado, lo analizo
                if (nodo.getDerecho() != null) { // tiene HD
                    padre.setIzquierdo(nodo.getDerecho());
                } else { // es hoja.
                    padre.setIzquierdo(null);
                }
            }
            exito = true;
        }
        return exito;
    }

    public boolean eliminarMax() {
        NodoArbol nodo = this.raiz, padre = this.raiz;
        boolean exito = false;
        if (this.raiz != null) { //si el arbol no está vacio, analizo la raíz
            if (this.raiz.getDerecho() == null) { // el nodo a eliminar es la raìz
                if (this.raiz.getIzquierdo() != null) { // la raíz tiene HI
                    this.raiz = this.raiz.getIzquierdo(); // seteo raiz por HI
                } else { // la raiz es hoja.
                    this.raiz = null; // seteo raiz a null
                }
            } else { // no es la raiz, asi que busco nodo extremo derecho
                while (nodo.getDerecho() != null) {
                    padre = nodo;
                    nodo = nodo.getDerecho();
                } // una vez encontrado, lo analizo
                if (nodo.getIzquierdo() != null) { // tiene HI
                    padre.setDerecho(nodo.getIzquierdo());
                } else { // es hoja.
                    padre.setDerecho(null);
                }
            }
            exito = true;
        }
        return exito;
    }

    public Comparable minimoElem() {
        NodoArbol nodo = this.raiz;
        while (nodo.getIzquierdo() != null) {
            // busco nodo extremo izquierdo
            nodo = nodo.getIzquierdo();
        }
        return nodo.getElemento();
    }

    public Comparable maximoElem() {
        NodoArbol nodo = this.raiz;
        while (nodo.getDerecho() != null) {
            // busco nodo extremo derecho
            nodo = nodo.getDerecho();
        }
        return nodo.getElemento();
    }

    public Lista listar() {
        Lista lista = new Lista();
        listarAux(this.raiz, lista);
        return lista;
    }

    private void listarAux(NodoArbol nodo, Lista lista) {
        if (nodo != null) {
            listarAux(nodo.getDerecho(), lista); //bajo a subarbol derecho
            lista.insertar(nodo.getElemento(), 1);
            listarAux(nodo.getIzquierdo(), lista); //bajo a subarbol izquierdo
        }
    }

    public Lista listarInverso() {
        Lista lista = new Lista();
        listarInversoAux(this.raiz, lista);
        return lista;
    }

    private void listarInversoAux(NodoArbol nodo, Lista lista) {
        if (nodo != null) {
            listarInversoAux(nodo.getIzquierdo(), lista); //bajo a subarbol izquierdo
            lista.insertar(nodo.getElemento(), 1);
            listarInversoAux(nodo.getDerecho(), lista); //bajo a subarbolderecho
        }
    }

    public Lista listarPreorden() {
        Lista lista = new Lista();
        preordenAux(this.raiz, lista);
        return lista;
    }

    private void preordenAux(NodoArbol nodo, Lista lista) {
        if (nodo != null) {
            lista.insertar(nodo.getElemento(), lista.longitud() + 1);
            preordenAux(nodo.getIzquierdo(), lista);
            preordenAux(nodo.getDerecho(), lista);
        }
    }

    public Lista listarInorden() {
        Lista lista = new Lista();
        inordenAux(this.raiz, lista);
        return lista;
    }

    private void inordenAux(NodoArbol nodo, Lista lista) {
        if (nodo != null) {
            inordenAux(nodo.getIzquierdo(), lista);
            lista.insertar(nodo.getElemento(), lista.longitud() + 1);
            inordenAux(nodo.getDerecho(), lista);
        }
    }

    public Lista listarPosorden() {
        Lista lista = new Lista();
        posordenAux(this.raiz, lista);
        return lista;
    }

    private void posordenAux(NodoArbol nodo, Lista lista) {
        if (nodo != null) {
            posordenAux(nodo.getIzquierdo(), lista);
            posordenAux(nodo.getDerecho(), lista);
            lista.insertar(nodo.getElemento(), lista.longitud() + 1);
        }
    }

    public Lista listarRango(Comparable min, Comparable max) {
        Lista lista = new Lista();
        if (max.compareTo(min) < 0) { //si max es menor a min, los intercambio
            Comparable temp = min;
            min = max;
            max = temp;
        }
        listarRangoAux(this.raiz, lista, min, max);
        return lista;
    }

    private void listarRangoAux(NodoArbol nodo, Lista lista, Comparable min, Comparable max) {
        if (nodo != null) {
            Comparable elem = nodo.getElemento();
            if (max.compareTo(elem) > 0) {
                //max es mayor que elem, bajo al subarbol derecho.
                listarRangoAux(nodo.getDerecho(), lista, min, max);
            }
            if ((min.compareTo(elem) <= 0) && (max.compareTo(elem) >= 0)) {
                //si el elemento se encuentra entre min y max (o es igual a min o max), lo inserto en la lista.
                lista.insertar(elem, 1);
            }
            if (min.compareTo(elem) < 0) {
                // min es menor que elem, bajo al subarbol izquierdo.
                listarRangoAux(nodo.getIzquierdo(), lista, min, max);
            }
        }
    }

    public int masNodosEnRango(Comparable min, Comparable max) {
        int res = 0;
        if (this.raiz != null) {
            NodoArbol hd = this.raiz.getDerecho(), hi = this.raiz.getIzquierdo();
            if (max.compareTo(min) < 0) { //si max es menor a min, los intercambio
                Comparable temp = min;
                min = max;
                max = temp;
            }
            if (min.compareTo(max) == 0) {
                res = 0;
            } else {
                res = max(masNodosEnRangoAux(hd, min, max), masNodosEnRangoAux(hi, min, max));
            }
        }
        return res;
    }

    private int masNodosEnRangoAux(NodoArbol nodo, Comparable min, Comparable max) {
        int res = 0;
        if (nodo != null) {
            Comparable elem = nodo.getElemento();
            if (max.compareTo(elem) > 0) {
                //max es mayor que elem, bajo al subarbol derecho.
                res += masNodosEnRangoAux(nodo.getDerecho(), min, max);
            }
            if ((min.compareTo(elem) <= 0) && (max.compareTo(elem) >= 0)) {
                //si el elemento se encuentra entre min y max (o es igual a min o max), lo inserto en la lista.
                res = res + 1;
            }
            if (min.compareTo(elem) < 0) {
                // min es menor que elem, bajo al subarbol izquierdo.
                res += masNodosEnRangoAux(nodo.getIzquierdo(), min, max);
            }
        }

        return res;
    }

    public Lista listarMayoresEnSubarbol(Comparable valor, Comparable elem) {
        Lista lista = new Lista();
        NodoArbol subraiz;
        subraiz = obtenerNodo(this.raiz, elem);
        listarMayoresAux(subraiz, lista, valor);
        return lista;
    }

    public Lista listarMayores(Comparable valor) {
        Lista lista = new Lista();
        listarMayoresAux(this.raiz, lista, valor);
        return lista;
    }

    private void listarMayoresAux(NodoArbol nodo, Lista lista, Comparable valor) {
        if (nodo != null) {
            Comparable elem = nodo.getElemento();
            if (elem.compareTo(valor) > 0) { //si elem es mayor a mi valor
                listarMayoresAux(nodo.getIzquierdo(), lista, valor); //bajo por el lado izquierdo
                lista.insertar(elem, 1); // inserto
            }
            listarMayoresAux(nodo.getDerecho(), lista, valor); //bajo por el lado derecho
        }
    }

    public Lista listarMenores(Comparable valor) {
        Lista lista = new Lista();
        listarMenoresAux(this.raiz, lista, valor);
        return lista;
    }

    private void listarMenoresAux(NodoArbol nodo, Lista lista, Comparable valor) {
        if (nodo != null) {
            Comparable elem = nodo.getElemento();
            if (elem.compareTo(valor) < 0) { //si elem es menor a mi valor
                listarMenoresAux(nodo.getDerecho(), lista, valor); // bajo por el lado derecho
                lista.insertar(elem, 1); // inserto
            }
            listarMenoresAux(nodo.getIzquierdo(), lista, valor); //bajo por el lado izquierdo
        }
    }

    public void vaciar() {
        this.raiz = null;
    }

    public boolean esVacio() {
        return (this.raiz == null);
    }

    public ArbolBB clone() {
        return this.cloneAux(this.raiz);
    }

    private ArbolBB cloneAux(NodoArbol nodo) {
        ArbolBB clon = new ArbolBB(), auxI, auxD;
        NodoArbol aux = nodo, nodoClon = null;
        if (aux != null) {
            //creo un nuevo nodo, y copio el elemento del nodo pasado por parametro.
            nodoClon = new NodoArbol(nodo.getElemento(), null, null);
            //clono el subarbol izquierdo
            auxI = cloneAux(aux.getIzquierdo());
            //y seteo el hijo izquierdo de mi nuevo nodo por la raiz del subarbol izquierdo.
            nodoClon.setIzquierdo(auxI.raiz);
            // clono el subarbol derecho
            auxD = cloneAux(aux.getDerecho());
            //y seteo el hijo derecho de mi nuevo nodo por la raiz del subarbol derecho.
            nodoClon.setDerecho(auxD.raiz);
        }
        clon.raiz = nodoClon;
        return clon;
    }

    public ArbolBB cloneInvertido() {
        return this.cloneInvertidoAux(this.raiz);
    }

    private ArbolBB cloneInvertidoAux(NodoArbol nodo) {
        ArbolBB clon = new ArbolBB(), auxI, auxD;
        NodoArbol aux = nodo, nodoClon = null;
        if (aux != null) {
            //creo un nuevo nodo, y copio el elemento del nodo pasado por parametro.
            nodoClon = new NodoArbol(nodo.getElemento(), null, null);
            //clono el subarbol izquierdo
            auxI = cloneInvertidoAux(aux.getIzquierdo());
            //y seteo el hijo derecho de mi nuevo nodo por la raiz del subarbol izquierdo.
            nodoClon.setDerecho(auxI.raiz);
            // clono el subarbol derecho
            auxD = cloneInvertidoAux(aux.getDerecho());
            //y seteo el hijo izquierdo de mi nuevo nodo por la raiz del subarbol derecho.
            nodoClon.setIzquierdo(auxD.raiz);
        }
        clon.raiz = nodoClon;
        return clon;
    }

    public ArbolBB cloneParteInvertida(Comparable elem) {
        NodoArbol subraiz;
        subraiz = obtenerNodo(this.raiz, elem);
        return cloneInvertidoAux(subraiz);
    }

    private NodoArbol obtenerNodo(NodoArbol nodo, Comparable elem) {
        NodoArbol subraiz = null;
        if (nodo != null) { //repite hasta encontrar.
            Comparable elem2 = nodo.getElemento();
            if ((elem.compareTo(elem2) == 0)) {
                subraiz = nodo; //elemento encontrado.
            } else {
                if (elem.compareTo(elem2) < 0) { //elem es menor que nodo.getElemento()
                    subraiz = obtenerNodo(nodo.getIzquierdo(), elem);
                } else { //elem es mayor que nodo.getElemento()
                    subraiz = obtenerNodo(nodo.getDerecho(), elem);
                }
            }
        }
        return subraiz;
    }

    public boolean estructuraSimetrica() {
        NodoArbol subIzq = null, subDer = null;
        if (this.raiz != null) {
            subIzq = this.raiz.getIzquierdo();
            subDer = this.raiz.getDerecho();
        }
        return verificarSimetria(subIzq, subDer);
    }

    private boolean verificarSimetria(NodoArbol subraizIzq, NodoArbol subraizDer) {
        boolean res = false;
        if (subraizIzq.getIzquierdo() == null && subraizDer.getDerecho() == null) { // tienen un hijo
            if (subraizIzq.getDerecho() == null && subraizDer.getIzquierdo() == null) { // son hojas
                res = true;
            } else {
                if (subraizIzq.getDerecho() != null && subraizDer.getIzquierdo() != null) {
                    res = verificarSimetria(subraizIzq.getDerecho(), subraizDer.getIzquierdo());
                }// verificamos simetria de sus hijos
            }
        } else {
            if (subraizIzq.getIzquierdo() != null && subraizDer.getDerecho() != null) {
                if (subraizIzq.getDerecho() == null && subraizDer.getIzquierdo() == null) {
                    res = verificarSimetria(subraizIzq.getIzquierdo(), subraizDer.getDerecho());
                } else {
                    if (subraizIzq.getDerecho() != null && subraizDer.getDerecho() != null) {
                        res = verificarSimetria(subraizIzq.getIzquierdo(), subraizDer.getDerecho()) && verificarSimetria(subraizIzq.getDerecho(), subraizDer.getIzquierdo());
                    }
                }
            }
        }
        return res;
    }

    public int diferenciaCandidatos(Comparable elem) {
        int res = -1;
        NodoArbol subraiz;
        subraiz = obtenerNodo(this.raiz, elem);
        if (subraiz != null) {
            res = diferenciaCandidatosAux(subraiz);
        }
        return res;
    }

    private int diferenciaCandidatosAux(NodoArbol raiz) {
        int res = -2;
        Comparable der, izq;
        if (raiz.getDerecho() != null && raiz.getIzquierdo() != null) {
            NodoArbol candidato = raiz.getDerecho();
            while (candidato.getIzquierdo() != null) {
                candidato = candidato.getIzquierdo();
            }
            der = candidato.getElemento();
            candidato = raiz.getIzquierdo();
            while (candidato.getDerecho() != null) {
                candidato = candidato.getDerecho();
            }
            izq = candidato.getElemento();
            res = (int) der - (int) izq;
        }
        return res;
    }

    public String toString() {
        String cadena;
        if (this.raiz == null) {
            cadena = "Arbol vacío.";
        } else {
            cadena = toStringAux(this.raiz);
        }
        return cadena;
    }

    private String toStringAux(NodoArbol nodo) {
        String cadena = "";
        if (nodo != null) {
            //visita:
            cadena = cadena + "Nodo: " + nodo.getElemento().toString() + "  ";
            if (nodo.getIzquierdo() != null) {
                cadena += "HI: " + nodo.getIzquierdo().getElemento().toString() + "  ";
            }
            if (nodo.getDerecho() != null) {
                cadena += "HD: " + nodo.getDerecho().getElemento().toString() + "  ";
            }
            cadena += "\n";
            //recorre los hijos:
            cadena += toStringAux(nodo.getIzquierdo());
            cadena += toStringAux(nodo.getDerecho());
        }
        return cadena;
    }
}
