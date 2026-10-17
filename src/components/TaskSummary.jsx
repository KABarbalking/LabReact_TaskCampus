export default function TaskSummary({ tareas = [] }) {
  const total = tareas.length
  const completadas = tareas.filter((t) => t.completada).length
  const pendientes = tareas.filter((t) => !t.completada).length

  return (
    <section className="card">
      <h2 className="section-title">Resumen de Tareas</h2>
      <p>Total de tareas: <strong>{total}</strong></p>
      <p>Tareas completadas: <strong>{completadas}</strong></p>
      <p>Tareas pendientes: <strong>{pendientes}</strong></p>
    </section>
  )
}