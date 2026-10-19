import TaskForm from "../components/TaskForm";

const NewTaskView = ({ onAgregarTarea }) => {
  return (
    <TaskForm onAgregar={onAgregarTarea} />
  );
};

export default NewTaskView;