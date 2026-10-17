export default function TaskSummary({ total, completadas }) {
  return (
    <section className="card">
      <h2 className="section-title">Resumen</h2>
      <p>Total de tareas:<strong>{total}</strong></p>
      <p>Tareas completadas: <strong>{completadas}</strong></p>
    </section>
  )
}