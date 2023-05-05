var presupuesto =0;
var porcentajeEgreso= 0;
let egresos = [ ];
//new Egreso('Renta',4000), new Egreso('Ropa',800)
let ingresos = [   ];
//new Ingreso ('Salario',20000), new Ingreso('Venta auto',50000)

//cargarIngresos();
//cargarEgresos();


const cargarCabecero= () =>{
    const presupuesto= totalIngresos() - totalEgresos();
    const porcentajeEgreso= totalEgresos() / totalIngresos();
 document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
 document.getElementById('porcentajeEgreso').innerHTML = formatoPorcentaje (porcentajeEgreso);
 document.getElementById('egresos').innerHTML = formatoMoneda(-totalEgresos());
 document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());

    //console.log(formatoMoneda(presupuesto));
    //console.log(formatoPorcentaje(porcentajeEgreso));
    //console.log(formatoMoneda(totalIngresos()));
    //console.log(formatoMoneda(totalEgresos()));
};

const totalIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
};

const totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
};
// formato moneda
const formatoMoneda = (pesos) => {
    return pesos.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });

  };
  
  const formatoPorcentaje = (porcentaje) => {
    return porcentaje.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };


  
 // ingresos 
  const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso);
      console.log(ingreso._descripcion, ingreso._valor);
      
    }
    document.getElementById('lista-ingresos').innerHTML= ingresosHTML;
      
  };

  const crearIngresoHTML = (ingreso) => {
    let ingresosHTML = `
     <div class="limpiarEstilos; elemento">
    <div class=elemento_descripcion">${ingreso._descripcion}
        <div class="limpiarEstilos; derecha"> 
            <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
</div>`;

return ingresosHTML;
  };

  const cargarEgresos = () => {
    let egresosHTML = '';
   
     for (let egreso of egresos) {
       egresosHTML += crearEgresoHTML(egreso);
       console.log(egreso._descripcion, egreso._valor);
     }
   
     const listaEgresos = document.getElementById('lista-egresos').innerHTML = egresosHTML;
     
   };
   
   // egresos
   const crearEgresoHTML = (egreso) => {
    let egresosHTML = 
    `<div class="limpiarEstilos; elemento">
    <div class=elemento_descripcion">${egreso._descripcion}
        <div class="limpiarEstilos; derecha"> 
            <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso._valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
</div>`;

return egresosHTML;
   };
  
  
   const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1)
    cargarCabecero();
    cargarIngresos();
};

  const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
  };
 
  agregarDato = () => {
    const forma = document.getElementById("forma");
    console.log(forma)
    const tipo = forma.tipo.value;
    const descripcion = forma.descripcion.value;
    const valor = parseFloat(forma.val.value);
    
  
    if (descripcion !== "" && valor !== "") {
      if (tipo === "ingreso") {
        ingresos.push(new Ingreso(descripcion, valor));
        cargarCabecero();
        cargarIngresos();

      } else if (tipo === "egreso") {
        egresos.push(new Egreso(descripcion, valor));
        cargarCabecero();
        cargarEgresos();
      }
    }
  
    forma.reset();
    return false;
  };
   

 const cargarApp =() =>{
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();

  
};
  