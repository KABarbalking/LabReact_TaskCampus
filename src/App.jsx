import { useState, useEffect } from "react";
import useTareas from "./components/UseTareas";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import SummaryView from "./views/SummaryView";
import TasksView from "./views/TasksView";
import NewTaskView from "./views/NewTaskView";
import "./App.css";

const App = () => {
  const {
    tareas,
    cargando,
    error,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
  } = useTareas();

  // Estado de navegación entre vistas (RF13)
  const [vistaActiva, setVistaActiva] = useState("tareas");
  const [tareaAEliminar, setTareaAEliminar] = useState(null);

  // Estado de filtro levantado a App (lifting state up)
  const [filtro, setFiltro] = useState("todas");

  // Lista filtrada derivada en App
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  // Actualiza el título del navegador con las tareas pendientes
  useEffect(() => {
    const pendientes = tareas.filter((t) => !t.completada).length;
    document.title = `TaskCampus (${pendientes} pendientes)`;
  }, [tareas]);

  // Temporizador con cleanup para evitar memory leaks
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TaskCampus activo");
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAgregarTarea = (titulo) => {
    crearTarea(titulo);
    setVistaActiva("tareas"); // Te lleva automáticamente a la lista al crear
  };

  const handleToggleCompletada = (id, completadaActual) => {
    actualizarTarea(id, { completada: !completadaActual });
  };

  const handleEditarTarea = (id, nuevoTitulo) => {
    actualizarTarea(id, { titulo: nuevoTitulo });
  };

  const handleConfirmarEliminacion = () => {
    eliminarTarea(tareaAEliminar);
    setTareaAEliminar(null);
  };

  return (
    <div className="app-container">
      <Header title="TaskCampus" description="Gestiona tus tareas académicas" />

      {/* Barra de navegación obligatoria para las 3 vistas (RF13) */}
      <Navigation vistaActiva={vistaActiva} onCambiarVista={setVistaActiva} />

      {/* Renderizado condicional según la vista activa seleccionada */}
      {vistaActiva === "resumen" && (
        <SummaryView
          tareas={tareas}
          filtro={filtro}
          tareasFiltradas={tareasFiltradas}
        />
      )}

      {vistaActiva === "tareas" && (
        <TasksView
          tareasFiltradas={tareasFiltradas}
          filtro={filtro}
          onCambiarFiltro={setFiltro}
          onToggle={handleToggleCompletada}
          onEliminar={setTareaAEliminar}
          onEditar={handleEditarTarea}
          cargando={cargando}
          error={error}
        />
      )}

      {vistaActiva === "nueva" && (
        <NewTaskView onAgregarTarea={handleAgregarTarea} />
      )}

      {/* Modal global de eliminación */}
      <Modal
        visible={tareaAEliminar !== null}
        mensaje="¿Seguro que deseas eliminar esta tarea? Esta acción no se puede deshacer."
        onConfirmar={handleConfirmarEliminacion}
        onCancelar={() => setTareaAEliminar(null)}
      />
    </div>
  );
};

export default App;