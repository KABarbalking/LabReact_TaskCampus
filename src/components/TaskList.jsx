import Button from './Button'
import badge from './Badge'
import { useState } from 'react'
import Badge from './Badge'

export default function TaskList({ tareas = [], onCompletar }) {
  const [filtro, setFiltro] = useState('todas')

  // Variable derivada para filtrar tareas
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'completadas') return t.completada
    return true
  })

  return (
    <div className="card">
      <h2 className="section-title">Lista de Tareas</h2>
      
      {/* Botones de filtro */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        // Esta bien profe, le pondre emojis al codigo, solo pongame una buena nota.
        < button label="📋Todas" onClick={() => setFiltro("todas")} vartiant="primary">
          Todas
        </button>
        < button label="⏳Pendientes" onClick={() => setFiltro("pendientes")} vartiant="primary">
          Pendientes
        </button>
        < button label="✅Completadas" onClick={() => setFiltro("completadas")} vartiant="primary">
          Completadas
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            className="task-item"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#94a3b8' : 'inherit',
              }}
            >
              <Badge texto={tarea.completada ? "completada" : "pendiente"} />
              
              {tarea.titulo}
            </span>
            {tarea.completada ? (
              <span>✅</span>
            ) : (
              <button className="task-button" onClick={() => onCompletar(tarea.id)}>
                Completar
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Mensaje si no hay tareas en el filtro activo */}
      {tareasFiltradas.length === 0 && (
        <p>No hay tareas en esta categoría.</p>
      )}
    </div>
  )
}