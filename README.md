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

* Button.jsx & Modal.jsx: Componentes reutilizables de UI y confirmación.

* SummaryView.jsx: Vista dedicada al resumen y contadores generales.

* TasksView.jsx: Vista principal de listado, filtrado y búsqueda.

* NewTaskView.jsx: Vista del formulario de creación de tareas.

* services/tareasService.js: Servicio centralizado para las operaciones HTTP (GET, POST, PUT, DELETE).

---

## Funcionalidades Clave
1. Filtros dinámicos (.filter() y .map()).

2. Formularios controlados con prevención de recarga y validación en vivo.

3. Persistencia local (localStorage) y consumo inicial de API con fetch (JSONPlaceholder).

4. Sincronización del título de la pestaña con las tareas pendientes mediante useEffect.

## Investigación Aplicada

1. **Navegación entre Vistas**: Uso de `useState` en `App.jsx` y renderizado condicional para alternar entre Resumen, Tareas y Nueva tarea sin recargar la página.
2. **Estado Derivado**: Cálculo dinámico de contadores y listados filtrados mediante `.filter()` desde la colección principal, evitando redundancias.
3. **Actualización Funcional**: Uso de `setTareas(prev => ...)` para asegurar que las operaciones actualicen siempre la versión más reciente del estado.
4. **Identificadores y API Simulada**: Distinción entre IDs locales (`Date.now()`) y remotos de JSONPlaceholder mediante una salvaguarda en el servicio HTTP.

---

## Casos de Prueba Verificables

| Caso | Pasos | Resultado | Evidencia |
| :--- | :--- | :--- | :--- |
| **RF01: Carga Inicial** | Iniciar app (`npm run dev`) | Muestra 10 tareas de la API | `tareasService.js` |
| **RF03: Creación** | Enviar formulario con título válido | Añade la tarea sin recargar | `TaskForm.jsx` |
| **RF05: Estado** | Alternar estado de una tarea | Actualiza la tarea y el resumen | `App.jsx` |
| **RF06: Edición** | Editar título de tarea | Actualiza tras validar contenido | Componente edición |
| **RF07: Eliminación** | Confirmar eliminación en el modal | Retira la tarea de la lista | `Modal.jsx` |
| **RF08: Filtros** | Usar filtros de estado | Muestra solo tareas coincidentes | `TasksView.jsx` |
| **RF13: Navegación** | Cambiar de vista en la barra | Mantiene los datos de la sesión | `Navigation.jsx` |

## Limitaciones de la API
Las operaciones de escritura usan **JSONPlaceholder** como API simulada; los cambios son reactivos en la sesión pero no persisten permanentemente tras recargar la página.