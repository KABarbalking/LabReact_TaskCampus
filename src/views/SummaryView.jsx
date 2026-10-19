import Card from "../components/Card";
import TaskSummary from "../components/TaskSummary";

const SummaryView = ({ tareas, filtro, tareasFiltradas }) => {
  return (
    <Card titulo="Resumen General de Tareas">
      <TaskSummary
        total={tareas.length}
        completadas={tareas.filter((t) => t.completada).length}
        pendientes={tareas.filter((t) => !t.completada).length}
        mostrando={tareasFiltradas.length}
        filtroActual={filtro}
      />
    </Card>
  );
};

export default SummaryView;