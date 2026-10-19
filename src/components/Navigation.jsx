import Button from "./Button";

const Navigation = ({ vistaActiva, onCambiarVista }) => {
  return (
    <nav className="navigation-bar" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
      <Button
        label="📊 Resumen"
        onClick={() => onCambiarVista("resumen")}
        variant={vistaActiva === "resumen" ? "primary" : "secondary"}
      />
      <Button
        label="📋 Lista de Tareas"
        onClick={() => onCambiarVista("tareas")}
        variant={vistaActiva === "tareas" ? "primary" : "secondary"}
      />
      <Button
        label="➕ Nueva Tarea"
        onClick={() => onCambiarVista("nueva")}
        variant={vistaActiva === "nueva" ? "primary" : "secondary"}
      />
    </nav>
  );
};

export default Navigation;