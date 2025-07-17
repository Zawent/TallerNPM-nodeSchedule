// index.js
const schedule = require('node-schedule');
const chalk = require('chalk');
const readline = require('readline');
const fs = require('fs');

const tareas = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.clear();
  console.log(chalk.blue.bold("=== Recordatorio de Tareas ==="));
  console.log("1. Agendar una nueva tarea");
  console.log("2. Ver tareas agendadas");
  console.log("3. Salir");

  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion) {
      case '1':
        agendarTarea();
        break;
      case '2':
        verTareas();
        break;
      case '3':
        rl.close();
        break;
      default:
        mostrarMenu();
        break;
    }
  });
}

function agendarTarea() {
  rl.question("Describe la tarea: ", (descripcion) => {
    rl.question("Hora (0-23): ", (hora) => {
      rl.question("Minuto (0-59): ", (minuto) => {
        const fecha = new Date();
        fecha.setHours(parseInt(hora));
        fecha.setMinutes(parseInt(minuto));
        fecha.setSeconds(0);

        const tarea = {
          descripcion,
          hora,
          minuto
        };

        tareas.push(tarea);
        guardarTareas();

        schedule.scheduleJob(fecha, () => {
          console.log(chalk.greenBright(`⏰ ¡Recordatorio!: ${descripcion}`));
        });

        console.log(chalk.yellow("Tarea agendada con éxito."));
        setTimeout(mostrarMenu, 2000);
      });
    });
  });
}

function verTareas() {
  console.clear();
  console.log(chalk.cyan.bold("Tareas agendadas:"));
  if (tareas.length === 0) {
    console.log("No hay tareas programadas.");
  } else {
    tareas.forEach((t, i) => {
      console.log(`${i + 1}. ${t.descripcion} a las ${t.hora}:${t.minuto}`);
    });
  }
  rl.question("Presiona Enter para volver al menú...", () => mostrarMenu());
}

function guardarTareas() {
  fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
}

mostrarMenu();
