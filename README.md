#  Task Manager API - Backend (Node.js + Firestore)

Este proyecto es una API RESTful que permite gestionar tareas (CRUD completo), desarrollada con **Node.js**, **Express**, y siguiendo una arquitectura basada en **Clean Architecture**. La persistencia se realiza en **Cloud Firestore (Firebase)**.

---

## Funcionalidades

- Crear una nueva tarea
- Listar todas las tareas
- Consultar tarea por ID
- Actualizar el estado de una tarea (`pendiente` / `completada`)
- Eliminar una tarea

---

## Estructura del proyecto (Clean Architecture)

├── application/
│ └── services/tasks/ # Casos de uso (use cases)
├── domain/
│ └── models/ # Modelos
│ └── repositories/ # Interfaces contractuales
├── infrastructure/
│ ├── config/ # Conexión a Firebase
│ └── repositories/ # Implementación de los repositorios
│ └── utils/ # Recursos de terceros
├── interfaces/
│ ├── controllers/ # Controladores HTTP
│ └── routes/ # Rutas Express
├── main/ # Punto de entrada de la app


## Endpoints

POST /tasks 
{
  "title": "Estudiar Clean Architecture",
  "description": "Aplicar patrones en un backend real",
  "status": "pendiente" // opcional, por defecto es "pendiente"
}



GET /

GET /tasks/:id

PUT /tasks/:id
{
  "status": "completada"
}

DELETE /tasks/:



COMO CORRER LOCALMENTE:
Clona el repositorio:
    git clone https://github.com/duwerney99/task-manager.git
    cd task-manager

Instala dependencias:
    npm install


Ejecuta en desarrollo:
    npm run dev



Tecnologías utilizadas:
    Node.js + Express
    Firebase Admin SDK (Firestore)
    Clean Architecture
    Dotenv
