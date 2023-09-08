let readLineSync=require("readline-sync");
const {imprimirLista,añadirTarea,eliminarTarea,completarTarea} = require("./funciones");

let listaTareas=[];
let indicador=0;

let menu=null;

console.log('\n'+"******************** BIENBENIDO A LA LISTA DE TAREAS ********************");

do{

    menu=parseInt(readLineSync.question('\n'+"Opciones: "+'\n'+'\n'+"1 --> Imprimir la lista de tareas."+'\n'+"2 --> Ingresar una tarea nueva."+'\n'+"3 --> Eliminar una tarea."+"\n"+"4 --> Completar una tarea."+'\n'+"5 --> Finalizar."+'\n'+'\n'+"Ingrese la opcion que desea realizar: "));
    
    switch(menu)
    {
        case 1:
            imprimirLista(listaTareas);
        break;
        case 2:
            indicador++;
            añadirTarea(listaTareas,indicador);
        break;
        case 3:
            eliminarTarea(listaTareas);
        break;
        case 4:
            completarTarea(listaTareas);
        break;
        case 5:
            menu=5;
            console.log('\n'+"******************** FUE UN PLACER SERVIRLE ********************"+'\n');
        break;
        default:
            console.log('\n'+"No ingreso una opcion valida, digite un numero del 1 al 5 segun la opcion que desea realizar.");
        break;
    }

}while(menu!=5);