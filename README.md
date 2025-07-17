# 📅 Recordatorio de Tareas (Node.js CLI)

Una aplicación de consola sencilla para **agendar recordatorios de tareas** usando `Node.js`, que te notifica visualmente cuando es hora de cumplir una actividad pendiente.

---

## ❓ Descripción del problema

Muchas personas olvidan tareas importantes en su día a día. Esta aplicación busca **resolver ese problema** permitiendo al usuario **agendar tareas** y recibir un **recordatorio visual en consola** a la hora indicada.

---

## 🧰 Librerías utilizadas
### 1. [chalk](https://www.npmjs.com/package/chalk)
Permite estilizar la consola (colores, negritas, etc.), lo que hace más visible y clara la interacción del usuario.
### 2. [node-schedule](https://www.npmjs.com/package/node-schedule)
Librería que permite **programar la ejecución de funciones** en momentos específicos, como alarmas o recordatorios.

---

## ⚙️ ¿Cómo se implementó?

- Se utiliza `readline` para crear un **menú interactivo en consola**.
- Cada tarea agendada incluye una **fecha y hora**.
- `node-schedule` se encarga de ejecutar un **recordatorio visual** con `chalk` en el momento programado.
- Las tareas se almacenan en un archivo local `tareas.json` usando `fs`, para garantizar persistencia si se desea expandir la app más adelante.
- Se valida que las horas estén entre 1 y 24, y los minutos entre 1 y 60 (ajustados internamente).

---

## 📦 Requisitos

- Node.js (v14 o superior)
- npm (instalador de paquetes de Node.js)

---

## 🔧 Instalación

1. Clona este repositorio:

git clone https://github.com/Zawent/TallerNPM-nodeSchedule.git
cd TallerNPM-nodeSchedule

2. Instala las dependencias:
npm install

## ▶️ Uso: Ejecuta la aplicación:

node index.js

Menú interactivo:
1: Agendar una nueva tarea (requiere año, mes, día, hora y minuto).
2: Ver tareas agendadas.
3: Salir del programa.

⚠️ La hora debe estar entre 1 y 24, y el minuto entre 1 y 60. Internamente se ajustan para que funcionen correctamente con el objeto Date.


## 🛠 Dependencias
chalk: Para resaltar textos en la consola.
node-schedule: Para programar tareas en segundo plano.


## 👨‍💻 Autor
Desarrollado por Uriel Vargas
