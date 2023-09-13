const http=require("http");
const host="localhost";
const port=3000;

let listaTareas=[
    {"id":1,"descripcion":"Tarea 1","estado":"pendiente"},
    {"id":2,"descripcion":"Tarea 2","estado":"pendiente"},
    {"id":3,"descripcion":"Tarea 3","estado":"pendiente"}
];

const server=http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(listaTareas));
    res.end();
});

server.listen(port,host,()=>{
    console.log("Servidor corriendo en: "+host+":"+port);
});
