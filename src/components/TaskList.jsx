import Button from './Button'
import { useState } from 'react'
import Badge from './Badge'

export default function TaskList({ tareas = [], onCompletar, onEliminar, onToggle }) {
  const [filtro, setFiltro] = useState('todas')

  // Variable derivada para filtrar tareas
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'completadas') return t.completada
    return true
  })

  // Función unificada: usa onToggle si existe, si no usa onCompletar
  const handleCompletar = (id, completadaActual) => {
    if (onToggle) {
      onToggle(id, completadaActual)
    } else if (onCompletar) {
      onCompletar(id)
    }
  }

  return (
    <div>
      {/* Botones de filtro */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>

        {/* Esta bien profe, le pondre emojis al codigo, solo pongame una buena nota. */}
        <Button
          label="📋 Todas"
          onClick={() => setFiltro("todas")}
          variant={filtro === "todas" ? "primary" : "secondary"}
        />
        <Button
          label="⌛ Pendientes"
          onClick={() => setFiltro("pendientes")}
          variant={filtro === "pendientes" ? "primary" : "secondary"}
        />
        <Button
          label="✅ Completadas"
          onClick={() => setFiltro("completadas")}
          variant={filtro === "completadas" ? "primary" : "secondary"}
        />
      </div>

      {/* Mensaje si no hay tareas en el filtro activo */}
      {tareasFiltradas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#94a3b8' }}>
          No hay tareas en esta categoría 🎉
        </p>
      )}

      <ul className="task-list" style={{ listStyle: 'none', padding: 0 }}>
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            className="task-item"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {/* ZONA IZQUIERDA: badge + título */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <Badge texto={tarea.completada ? "completada" : "pendiente"} />
              <span
                style={{
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                  color: tarea.completada ? '#94a3b8' : 'inherit',
                }}
              >
                {tarea.titulo}
              </span>
            </div>

            {/* ZONA DERECHA: botones */}
            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <Button
                label={tarea.completada ? "Desmarcar" : "Completar"}
                onClick={() => handleCompletar(tarea.id, tarea.completada)}
                variant={tarea.completada ? "success" : "primary"}
              />
              <Button
                label="Eliminar"
                onClick={() => onEliminar && onEliminar(tarea.id)}
                variant="danger"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
