import React from "react";
import { useForm } from "react-hook-form";

interface formData {
  taskInput: string;
}

interface TodoItemProps {
  onTaskSubmit: (task: string) => void;
}

function TodoItem({ onTaskSubmit }: TodoItemProps) {
  const { register, handleSubmit, reset } = useForm<formData>();

  const submittingForm = (data: formData) => {
    const trimmedTaskInput = data.taskInput.trim();
    if (trimmedTaskInput === "") {
      return;
    }
    onTaskSubmit(trimmedTaskInput);
    reset(); // Clear the input field after submitting
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submittingForm)}>
        <input
          placeholder="What do you have planned?"
          className="outline-none w-full"
          type="text"
          id="taskInput"
          {...register("taskInput", { required: false })}
          style={{ background: "#202938", color: "#C5C9CE", height: "50px", borderRadius: "20px", padding: "20px" }}
        />
        <button type="submit" className="addTaskButton w-full mt-1" style={{ height: "50px", borderRadius: "20px" }}>
          Add Task
        </button>
      </form>
    </div>
  );
}
export default TodoItem;
