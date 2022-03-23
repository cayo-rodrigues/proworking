import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Adicionar serviços"
      />
      <button
        onClick={() => {
          todo.length !== 0 && addTodo(todo);
        }}
      >
        Cadastrar serviço
      </button>
    </div>
  );
};

export default Form;
