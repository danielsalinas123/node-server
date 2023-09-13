let readLineSync=require("readline-sync");

function imprimirLista(lista)
{
    console.log('\n'+"LISTA DE TAREAS:"+'\n');
    console.log(lista);
}

function añadirTarea(lista,indicador)
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            const descripcion=readLineSync.question('\n'+"Ingrese la tarea que desea adjuntar a la lista: ");
            const tarea={"id":indicador,"descripcion":descripcion,"estado":"pendiente"};
            lista.push(tarea);
            resolve(lista);
        },2000);
    });
}

function eliminarTarea(lista)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const id=parseInt(readLineSync.question('\n'+"Ingrese el indicador de la tarea que desea eliminar: "));
  
            const posicion=lista.findIndex(item=>item.id==id);
            if(posicion!=-1)
            {
                lista.splice(posicion,1);
                console.log('\n'+`Se elimino la tarea indicada por el numero ${id}.`);
                resolve(lista);
            }
            else
                reject('\n'+`El indicador "${id}" no corresponde a ninguna tarea de la lista.`+'\n');
            
        },2000);
    });
}

function completarTarea(lista)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const id=parseInt(readLineSync.question('\n'+"Ingrese el indicador de la tarea que desea completar: "));
        
            let verificacionTareaEnLista=false;
            lista.filter(item=>{
                if(item.id==id)
                {
                    verificacionTareaEnLista=true;
                    console.log('\n'+`Se completo la tarea indicada por el numero ${id}.`);
                    item.estado="completada";
                }
            });
        
            if(!verificacionTareaEnLista)
                reject('\n'+`El indicador "${id}" no corresponde a ninguna tarea de la lista.`+'\n');
            else
                resolve(lista);

        },2000);
    });
}

module.exports={imprimirLista,añadirTarea,eliminarTarea,completarTarea};