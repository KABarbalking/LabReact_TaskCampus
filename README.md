# TaskCampus - Aplicación de Gestión de Tareas Académicas

## Descripción del Proyecto
TaskCampus es una aplicación web desarrollada en **React (con Vite y JavaScript)** para la gestión de tareas académicas. Este repositorio contiene la primera etapa de desarrollo, enfocada en la construcción de componentes modulares, manejo de estado local (`useState`), formularios controlados con validación, renderizado dinámico con filtros, persistencia local (`localStorage`). (Tutoriales 04 a 09).

---

## Tecnologías y Entorno
* **Node.js** (versión `v18+` o superior)
* **npm** 
* **React 19** / **Vite**
* **CSS Externo** para el diseño de componentes y tarjetas.

---

## Instalación y Ejecución

Sigue estos pasos para clonar, instalar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

   git clone https://github.com/KABarbalking/LabReact_TaskCampus
   cd taskcampus

2. **Instalar las dependencias: (en la cmd)**
    npm install 

3. **Ejecutar en modo desarrollo:**
    npm run dev

4. **Compilar para producción:**
    npm run build

---

## Componentes Desarrollados
* App.jsx: Coordinador del estado global, localStorage y useEffect.

* Header.jsx: Cabecera informativa.

* TaskSummary.jsx: Resumen dinámico de totales, completadas y pendientes.

* TaskList.jsx: Listado con .map(), filtros ("Todas", "Pendientes", "Completadas") y claves únicas.

* TaskForm.jsx: Formulario controlado con validación de campos vacíos.

---

## Funcionalidades Clave
1. Filtros dinámicos (.filter() y .map()).

2. Formularios controlados con prevención de recarga y validación en vivo.

3. Persistencia local (localStorage) y consumo inicial de API con fetch (JSONPlaceholder).

4. Sincronización del título de la pestaña con las tareas pendientes mediante useEffect.
