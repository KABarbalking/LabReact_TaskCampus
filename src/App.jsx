import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskSummary from './components/TaskSummary'
import TaskList from './components/TaskList'
import ActionButton from './components/ActionButton'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Aprender qué es React', completada: false },
    { id: 2, titulo: 'Crear proyecto con Vite', completada: true },
    { id: 3, titulo: 'Practicar JSX', completada: false },
  ])

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: true } : tarea
      )
    )
  }

  function reviewTasks() {
    alert(`Tienes ${tareas.filter(t => !t.completada).length} tareas pendientes por revisar`)
  }

  return (
    <main className="app-container">
      <Header
        title="TaskCampus"
        description="Gestor de tareas académicas"
      />
      {/* Pasamos el array de tareas completo */}
      <TaskSummary tareas={tareas} />
      <TaskList tareas={tareas} onCompletar={completarTarea} />
      <ActionButton onReview={reviewTasks} />
    </main>
  )
}

export default App