import { useState } from "react"; // Hook useState

const VALIDATION = /^([a-záéíóúüñA-ZÁÉÍÓÚÜÑ0-9\s]*)$/;



export function TodoForm({ onSubmit }) {
    const [{ todo, todoError }, setTodoField] = useState({
      todo: "",
      todoError: "",
    });

  const todoChangeHandler = (e) => {
    let newError = "";
    const matchesRegex = VALIDATION.test(e.target.value);
    if (!matchesRegex) {
      newError = "Formato no válido";
    }

    setTodoField({ todo: e.target.value, todoError: newError });
  };
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(todoError.length > 0){
            return;
        }
        setTodoField(({todo,todoError})=>{
            return {todo,todoError:""};
        });

    if( todo.length === 0){
            setTodoField(({todo,todoError})=> {
                return {todo,todoError:"Campo vacio"};
            });
            return;
    }
    onSubmit(todo);
    setTodoField({todo:"", todoError:""});
};
return (
    <form onSubmit={handleSubmit}>
        <h3> Nuevo Pendiente </h3>
        <label htmlfor="input-todo"> Descripci&oacute;n </label>
        <input
            type="text"
            id="input-todo"
            name="input-todo"
            autoComplete="off"
            value={todo}
            onChange={ todoChangeHandler}
        />
        <span>  {todoError}</span> 
        <button type="submit"   disabled = {todoError.length !== 0}>
            Añadir pendiente
        </button>
    </form>
    );
}
     