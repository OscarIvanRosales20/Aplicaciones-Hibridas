class Egreso extends Dato{
    static contEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contEgresos;
    }

    get id(){
        return this._id;
    }
}