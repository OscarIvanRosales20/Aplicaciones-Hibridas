const Ingresos = [
    new Ingreso('Salario', 2000.00),
    new Ingreso('Venta coche', 1400.00),
];

const Egresos =[
    new Egreso('Renta depa', 1000.00),
    new Egreso('ropa', 400.00)
];

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let TotalIngresos =()=>{
    let TotalIngreso =0
    for(let ingreso of Ingresos){
        TotalIngreso += ingreso.valor
    }
    return TotalIngreso
}

let totalEgresos =() =>{
    let totalEgreso = 0
    for(let egreso of Egresos){
        totalEgreso += egreso.valor
    }
    return totalEgreso
}

let cargarCabecero =() =>{
    let presupuesto = TotalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() /TotalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML= formatoMoneda(TotalIngresos());
    document.getElementById('egresos').innerHTML= formatoMoneda(totalEgresos());
}

const formatoMoneda =(valor) =>{
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimunFractionDigits:2});
}

const formatoPorcentaje =(valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimunFractionDigits:2});
}

const cargarIngresos =() =>{
    let IngresoHTML =''
    for(let ingreso of Ingresos){
        IngresoHTML += crearIngresoHMTL(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = IngresoHTML
}

const crearIngresoHMTL =(ingreso) =>{
    let IngresoHTML =  `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick='eliminaringreso(${ingreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `;
        return IngresoHTML;
}

const eliminaringreso = (id) =>{
    let indEliminar = Ingresos.findIndex(ingreso => ingreso.id === id);
    Ingresos.splice(indEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos =() =>{
    let egresoHTML =''
    for(let egreso of Egresos){
        egresoHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML
}

const crearEgresoHTML =(egreso) =>{
    let EgresoHTML =  `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `;
        return EgresoHTML;
}

const eliminarEgreso = (id) =>{
    let indEliminar = Egresos.findIndex(egreso => egreso.id === id);
    Egresos.splice(indEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = ()=>{
    let forma = document.forms['forma']
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            Ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        } else if(tipo.value === 'egreso'){
            Egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}