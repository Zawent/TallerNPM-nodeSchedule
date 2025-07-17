const chalk = require('chalk');
const schedule = require('node-schedule');
const readline = require('readline');
const fs = require('fs');

const tareas = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.clear();
  console.log(chalk.bold.blue('=== Recordatorio de Tareas ==='));
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
    rl.question("Año (YYYY): ", (anio) => {
      rl.question("Mes (1-12): ", (mes) => {
        rl.question("Día (1-31): ", (dia) => {
          rl.question("Hora (1-24): ", (horaInput) => {
            const hora = parseInt(horaInput);
            if (isNaN(hora) || hora < 1 || hora > 24) {
              console.log(chalk.red("⚠️  Hora inválida. Usa un número entre 1 y 24."));
              return setTimeout(agendarTarea, 1500);
            }

            rl.question("Minuto (1-60): ", (minutoInput) => {
              const minuto = parseInt(minutoInput);
              if (isNaN(minuto) || minuto < 1 || minuto > 60) {
                console.log(chalk.red("⚠️  Minuto inválido. Usa un número entre 1 y 60."));
                return setTimeout(agendarTarea, 1500);
              }

              const fecha = new Date(
                parseInt(anio),
                parseInt(mes) - 1,
                parseInt(dia),
                hora === 24 ? 0 : hora,
                minuto === 60 ? 0 : minuto,
                0
              );

              const tarea = {
                descripcion,
                anio,
                mes,
                dia,
                hora: horaInput,
                minuto: minutoInput
              };

              tareas.push(tarea);
              guardarTareas();

              schedule.scheduleJob(fecha, () => {
                console.log(chalk.bgRed.white.bold('\n🚨🚨🚨 RECORDATORIO 🚨🚨🚨'));
                console.log(chalk.yellowBright.bold(`📌 Tarea: ${descripcion}`));
                console.log(chalk.bgRed.white.bold('=========================\n'));
              });

              console.log(chalk.green("✅ Tarea agendada con éxito."));
              setTimeout(mostrarMenu, 2000);
            });
          });
        });
      });
    });
  });
}

function verTareas() {
  console.clear();
  console.log(chalk.cyan.bold("📋 Tareas agendadas:"));
  if (tareas.length === 0) {
    console.log("No hay tareas programadas.");
  } else {
    tareas.forEach((t, i) => {
      console.log(
        `${i + 1}. ${t.descripcion} - ${t.anio}/${t.mes.padStart(2, '0')}/${t.dia.padStart(2, '0')} ${t.hora.padStart(2, '0')}:${t.minuto.padStart(2, '0')}`
      );
    });
  }
  rl.question("Presiona Enter para volver al menú...", () => mostrarMenu());
}

function guardarTareas() {
  fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
}

mostrarMenu();
