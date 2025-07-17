# 📅 Recordatorio de Tareas (Node.js CLI)

Una aplicación de consola sencilla para **agendar recordatorios de tareas** con notificaciones programadas en tiempo real, utilizando `node-schedule` y `chalk`.

---

## 🚀 Características

- Agendar tareas con fecha y hora específicas.
- Recordatorios visuales en la consola.
- Visualización de tareas agendadas.
- Persistencia local usando `tareas.json`.

---

## 📦 Requisitos

- Node.js (v14 o superior)
- npm (gestor de paquetes de Node)

---

## 🔧 Instalación

1. Clona este repositorio:
git clone https://github.com/Zawent/TallerNPM-nodeSchedule.git

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