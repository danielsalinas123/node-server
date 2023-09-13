• ¿Qué sucedio al usar async y await?

Fue necesario crear una función asíncrona mediante el comando async en la cual se obtiene la respuesta de la promesa indicada. Dicha función necesita una estructura try – catch para obtener el valor de la promesa en caso de que se haya cumplido o para obtener el error en caso de que no haya sido así y no generar un error en la ejecución.
Debe realizarse un llamado a la función asíncrona para obtener el resultado de la promesa.

• ¿Qué sucedio al usar el método then()?

Se realiza directamente el llamado a la función que retornara la promesa, mediante el método then se obtiene el resultado de la promesa si esta se cumplió, y mediante el método catch se captura el error en caso de que la promesa no se haya cumplido. Ambos métodos reciben como parámetro una función callback cuyo parámetro es la respuesta que se obtuvo, por obvias razones solo se ejecuta uno de los 2 métodos porque la promesa se cumple o no se cumple.

• ¿Qué diferencias encontraste entre async, await y el método then()?

Respecto a la ejecución del código en la consola, el comportamiento es idéntico, ambos métodos permiten lograr los mismos resultados (obtener la respuesta de una promesa, bien sea que se haya cumplido o que no). Las diferencias radican en la forma en como debe estructurarse el código para usar cada método.

El método async-await permite un código más claro y legible y por lo tanto más fácil de entender y escribir, no obstante es mas largo ya que requiere la creación de una función adicional y el llamado de la misma para usarse; en cambio el método then – catch obtiene la respuesta de manera mas directa y por lo tanto, en menos líneas de código, no obstante requiere enlazar los métodos then y catch lo cual resulta mas confuso, en especial porque estos métodos funcionan con callbacks que de por si son difíciles de entender, así pues, este método requiere de mayor esfuerzo para redactarlo y entenderlo.
