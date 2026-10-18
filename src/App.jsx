import { useState, useEffect } from "react"
import Header from "./components/Header"
import modal from "./components/Modal"
import TaskList from "./components/TaskList"
import TaskSummary from "./components/TaskSummary"
import TaskForm from "./components/TaskForm"
import "./App.css"
import Card from "./components/Card"

const App = () => {
  // implementacion del localStorage
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("taskcampus-tareas")
    return guardadas ? JSON.parse(guardadas) : []
  })

  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  // Si el localStorage está vacío, carga las primeras 10 tareas
  useEffect(() => {
    const hayDatosLocales = localStorage.getItem("taskcampus-tareas")
    if (hayDatosLocales) return

    const cargarDesdeAPI = async () => {
      setCargando(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        const data = await response.json()

        const tareasAdaptadas = data.map((item) => ({
          id: item.id,
          titulo: item.title,
          completada: item.completed,
        }))

        setTareas(tareasAdaptadas)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarDesdeAPI()
  }, [])

  // Guarda en localStorage cada vez que las tareas cambian
  useEffect(() => {
    localStorage.setItem("taskcampus-tareas", JSON.stringify(tareas))
  }, [tareas])

  // Actualizacion del título del navegador con las tareas pendientes
  useEffect(() => {
    const pendientes = tareas.filter((t) => !t.completada).length
    document.title = `TaskCampus (${pendientes} pendientes)`
  }, [tareas])

  // Agregar tarea nueva
  const agregarTarea = async (titulo) => {
    const nuevaTarea = { id: Date.now(), titulo, completada: false }
    setTareas([...tareas, nuevaTarea])

    try {
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: titulo, completed: false, userId: 1 }),
      })
    } catch (err) {
      console.error("Error al crear tarea en servidor:", err)
    }
  }

  // Marcar tarea como completada
  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: true } : tarea
      )
    )
  }

  return (
    <div className="app-container">
      <Header title="TaskCampus" description="Gestiona tus tareas académicas" />
      <Card titulo="Resumen de Tareas"> 
        <TaskSumary total={tareas.length} />
      </Card>
      <TaskForm onAgregar={agregarTarea} />
      <Card titulo='Mis Tareas'>
      <TaskList tareas={tareas} onCompletar={completarTarea} cargando={cargando} error={error} />
      </Card>
    </div>
  )
}

export default App