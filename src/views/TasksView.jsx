import Card from "../components/Card";
import TaskList from "../components/TaskList";

const TasksView = ({
  tareasFiltradas,
  filtro,
  onCambiarFiltro,
  onToggle,
  onEliminar,
  cargando,
  error,
}) => {
  return (
    <Card titulo="Gestión de Tareas">
      {cargando && <p className="estado-carga">⏳ Cargando tareas...</p>}
      {error && <p className="estado-error">⚠️ Error: {error}</p>}

      {!cargando && !error && (
        <TaskList
          tareas={tareasFiltradas}
          filtro={filtro}
          onCambiarFiltro={onCambiarFiltro}
          onToggle={onToggle}
          onEliminar={onEliminar}
        />
      )}
    </Card>
  );
};

export default TasksView;