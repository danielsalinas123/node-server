let readLineSync=require("readline-sync");

function imprimirLista(lista)
{
    console.log('\n'+"LISTA DE TAREAS:"+'\n');
    console.log(lista);
}

function añadirTarea(lista,indicador)
{
    const descripcion=readLineSync.question('\n'+"Ingrese la tarea que desea adjuntar a la lista: ");
    const tarea={"id":indicador,"descripcion":descripcion,"estado":"pendiente"};
    lista.push(tarea);
    imprimirLista(lista);
}

function eliminarTarea(lista)
{
    const id=parseInt(readLineSync.question('\n'+"Ingrese el indicador de la tarea que desea eliminar: "));

    let verificacionTareaEnLista=false;
    lista.filter(item=>{
        if(item.id==id)
            verificacionTareaEnLista=true;
    });

    if(verificacionTareaEnLista)
    {
        const posicion=lista.findIndex(item=>item.id==id);
        lista.splice(posicion,1);
        console.log('\n'+`Se elimino la tarea indicada por el numero ${id}.`);
        imprimirLista(lista);
    }
    else
        console.log('\n'+`El indicador "${id}" no corresponde a ninguna tarea de la lista.`);
}

function completarTarea(lista)
{
    const id=parseInt(readLineSync.question('\n'+"Ingrese el indicador de la tarea que desea completar: "));

    let verificacionTareaEnLista=false;
    lista.filter(item=>{
        if(item.id==id)
            verificacionTareaEnLista=true;
    });

    if(verificacionTareaEnLista)
    {
        console.log('\n'+`Se completo la tarea indicada por el numero ${id}.`);
        lista.filter(item=>{
            if(item.id==id)
                item.estado="completada";
        });
        imprimirLista(lista);
    }
    else
        console.log('\n'+`El indicador "${id}" no corresponde a ninguna tarea de la lista.`);
}

module.exports={imprimirLista,añadirTarea,eliminarTarea,completarTarea};