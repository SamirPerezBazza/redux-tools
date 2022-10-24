import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todos/todosApi'

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();

  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if (todoId == 1) return
    setTodoId(todoId - 1);
  }

  return (
    <div>
      <h1>TodoApp - RTK Query</h1>
      <hr />

      {isLoading && <h4>Loading...</h4>}

      <pre>{JSON.stringify(todo)}</pre>

      <button
        disabled={isLoading}
        onClick={prevTodo}
      >
        Previous
      </button>
      <button
        disabled={isLoading}
        onClick={nextTodo}
      >
        Next
      </button>

      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
              {todo.completed && <strong> - Completed</strong>}
            </li>
          ))
        }
      </ul> */}
    </div>
  )
}
