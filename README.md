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
│ └── middleware /# validadores de entrada
│ └── validators / # Schemas de validacion
│ └── routes/ # Rutas Express
├── main/ # Punto de entrada de la app
└── test/ # Tests con Jest


## Endpoints

###  Crear tarea
POST /tasks 
{
  "title": "Estudiar Clean Architecture",
  "description": "Aplicar patrones en un backend real",
  "status": "pendiente" // opcional, por defecto es "pendiente"
}


### Listar tareas
GET /

### Listar tarea por ID
GET /tasks/:id

### Actualizar estado
PUT /tasks/:id
{
  "status": "completada"
}

### Eliminar tarea por ID
DELETE /tasks/:

## Variables de Entorno (.env)

PORT=8080

FIREBASE_PROJECT_ID=task-manager-461813
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@task-manager-461813.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCs78pl6nUrOSXc\nPLOB/yloJt+0NzlIrOAVWsoSoIHyQdpCFXKlQ6+0h95ZxTtJur0Zt3ytQ32e/mF8\nbeIWy5ic9LYw4otxQvcNGR2zi0MvBCStFaXl7G55ObqtGQKbgbuJIdzAHAKQNKSC\nkzQWsdpy8l3Njl2MrBPUg2qDVxFU1mTCgM565ki9vSJnFmJbPrheHh31EaCRA1co\nXU/lypbGLdI3QjfF5Ek6dD73UmkRjCacTVg6w8uWSWsLdTcrWhx8PvrqeQZ1WCc/\nUyeCZ0jtHcYj8lTgpxkzWdKOqDqqe8Te51/2T5uE472PppdFaUndg3+w3z1ML7nz\nrnmY3VT/AgMBAAECggEABXsfurJzm3yLdqPS9V0+BCwf9pBsaRWdMxAQemO+0d1Q\nE19gdy3iXefZNa2zUG6JPk07LCtaVbWAEAL3LUHGpe0ETZP3y8flAPPQpeXswP9D\nh2dcmqzpdlbYPIFOax9OkkoR6WHim6PJqkKAGH3cAALRXv4Sp3/MrLs3tnHu5lLX\n08R49xhw4RnH9I1n1yGShcfVRzTs8fIRBeHHGZurLRDStawiAa/SyZOt0qBnP6hB\nXizWqRMtTzFb6icw9+zBrsHslmhCgnRcJ6DQdYlLp/IWfHXJ09zRafUuhjLFCXj8\nx98y54XYO3QdzrtczMJezBCzWzr/cWKxZ924i2dKAQKBgQDfResPnwAPfO7dzg0l\nyFe9xaEqG0R23Si3T3JeWzASazvrA6cpEzsTCQ+zR7ZT6nXX5RyQCB8QjQ9Cb1bi\n9oO7l8EpfDRYMAXkRuBpe9ALcC3Id8velEou+TUWnKaBxM5nq/xlJNwk2XTQGXrh\nvJk8cx1SZrdF0R8JLw+o25yBKwKBgQDGSQ1dKhFXcx9CHTc3WobGau6AsonIaFK6\np6Gig3M0ZjHAZTozW9jiY94Tg4xYMV3jy0+O/5fuu5Zelf+8psasYYmBtB/oHCN2\nvJYjP6begBV5AtbOvqLlznwR2RuWORpOwFIqwGrjgcElwqpJr/8IDQ97DqlXHqgC\nphKTBVdJfQKBgQCS2QmhXJJNnX39pGhBUWNkDXfSmdyN0SfWaQpvxMn5U041ZFGt\nUlioTG1nHONujeaz+JywnqbP2/cNWu1qmXhLCaSiBG7pEazOV0+CEUzkOQPjtecA\nnces3XttQ9q/vxGCXjvCyluAYQXTWO7ZSZH/kDbY23XvFXu0Lp++D7L/wQKBgCN9\nW8j7CJOQZV3eAM4Fg+3robijPAoEshn6evGteWc9i1YWSC59F/qdSVhQyUPXwihN\ncXX0xWrTZHyVeGp5p0GfS49NgBB5SNettWmlsOZOIonAOlZSxLFBHe/L3iYrHkxO\nG+bO/dKunLV3fCcoOwtj2wt5elG/iO7Abr6lzBO5AoGAUkB/RmVWN7pRTENYCge8\nvBCld3/PzxT6068mW+uIZHmrGa4V73L5+RomYjCQUhvdGPf2q5aXqcZzDtPUNEjO\nGaNCeFRUyEJ7xNg1m+FLKRa9D6iZspnMV34cjIPXKUBYle1s1tfne9Eo8ZQRjxAx\nBZoDUvO5gEB00+qd03SRKVQ=\n-----END PRIVATE KEY-----\n


COMO CORRER LOCALMENTE:
Clona el repositorio:
    git clone https://github.com/duwerney99/task-manager.git
    cd task-manager

Instala dependencias:
    npm install


Ejecuta en desarrollo:
    npm run dev


### Ejecutar con DOCKER

# Construir imagen
  docker build -t task-manager-backend .

# Ejecutar contenedor
  docker run -p 8080:8080 --env-file .env task-manager-backend



## Despliegue en Cloud Run (GCP)
Este backend está desplegado en Cloud Run. Se utilizó:

Google Artifact Registry para alojar la imagen Docker

Variables de entorno para manejar claves  

IAM configurado con permisos roles/datastore.user para la cuenta de servicio

URL del backend (producción):
https://task-manager-backend-74938929962.us-central1.run.app



## Validaciones
Se usan validaciones con Joi (middleware) para asegurar que los datos enviados a los endpoints cumplan con los requisitos mínimos:

POST /tasks: valida title, description y status

Otros endpoints también manejan validaciones básicas (por ejemplo, que exista id en los params)


##  Testing con Jest
# Ejecutar tests
npm test

Se implementaron tests unitarios para los casos de uso principales:

Crear tarea

Listar todas

Buscar por ID

Eliminar

Actualizar estado




Tecnologías utilizadas:
    Node.js + Express
    Firebase Admin SDK (Firestore)
    Joi (validaciones)
    Jest (testing)
    Clean Architecture
    Dotenv
    Docker
    Google Cloud Run


Duwerney Hernandez
Correo: santiagohernan99dez@gmail.com
GitHub: duwerney99