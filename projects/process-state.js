export function processState(){
    console.log("===  Estado de procesos  ===");

    // Obteniendo informacion del proceso actual
    console.log(`📢 ID del proceso: ${process.pid}`);
    console.log(`📢 Memory Usage: ${JSON.stringify(process.memoryUsage(),null, '\t') }`);
    console.log(`📢 CPU Time: ${JSON.stringify(process.cpuUsage(), null,'\t')}`);

    // Eventos del proceso
    // Evento close
    process.on('exit', (code) => {
        console.log(`➡️ Proceso finaliza con el código: ${code}`)
    });
}