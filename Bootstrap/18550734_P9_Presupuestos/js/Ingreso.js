class Ingreso extends Dato{
    static contIngresos = 0;
      constructor(descripcion, valor){
          super(descripcion, valor);
          this._id = ++Ingreso.contIngresos;
      }

      get id(){
          return this._id;
      }
}