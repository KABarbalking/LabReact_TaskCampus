export default function TaskList({ tareas, onCompletar }) {
  return (
    <section className="card">
      <h2 className="section-title">Listado de tareas</h2>
      <ul className="task-list" style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} className="task-item">
            <span
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#94a3b8' : 'inherit',
              }}
            >
              {tarea.titulo}
            </span>
            {tarea.completada ? (
              <span> Completada</span>
            ) : (
              <button
                className="task-button"
                onClick={() => onCompletar(tarea.id)}
              >
                Completar
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}