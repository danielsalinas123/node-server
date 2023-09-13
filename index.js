let readLineSync=require("readline-sync");

const {imprimirLista,añadirTarea,eliminarTarea,completarTarea} = require("./funciones");

let listaTareas=[
    {"id":1,"descripcion":"Tarea 1","estado":"pendiente"},
    {"id":2,"descripcion":"Tarea 2","estado":"pendiente"},
    {"id":3,"descripcion":"Tarea 3","estado":"pendiente"}
];

let indicador=3;

let menu=null;

console.log('\n'+"******************** BIENBENIDO A LA LISTA DE TAREAS ********************");

imprimirLista(listaTareas);

    menu=parseInt(readLineSync.question('\n'+"Opciones: "+'\n'+'\n'+"1 --> Imprimir la lista de tareas."+'\n'+"2 --> Ingresar una tarea nueva."+'\n'+"3 --> Eliminar una tarea."+"\n"+"4 --> Completar una tarea."+'\n'+"5 --> Finalizar."+'\n'+'\n'+"Ingrese la opcion que desea realizar: "));

        switch(menu)
        {
            case 1:
                imprimirLista(listaTareas);
            break;
    
            case 2:
                indicador++;
    
                async function ejecutarAñadirTarea(){
                    listaTareas = await añadirTarea(listaTareas,indicador);
                    imprimirLista(listaTareas);
                }
                ejecutarAñadirTarea();
            break;
    
            case 3:

                async function ejecutarEliminarTarea()
                {
                    try
                    {
                        listaTareas = await eliminarTarea(listaTareas);
                        imprimirLista(listaTareas);
                    }
                    catch(error){
                        console.log(error);
                    }
                }
                ejecutarEliminarTarea();
            break;
    
            case 4:

                async function ejecutarCompletarTarea()
                {
                    try
                    {
                        listaTareas = await completarTarea(listaTareas);
                        imprimirLista(listaTareas);
                    }
                    catch(error)
                    {
                        console.log(error);
                    }
                }
                ejecutarCompletarTarea();
            break;
    
            case 5:
                menu=5;
                console.log('\n'+"******************** FUE UN PLACER SERVIRLE ********************"+'\n');
            break;

            default:
                console.log('\n'+"No ingreso una opcion valida, digite un numero del 1 al 5 segun la opcion que desea realizar.");
            break;
        }
    