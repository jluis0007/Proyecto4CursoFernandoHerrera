interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };

export const getTaskInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("task-state");
  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }
  return JSON.parse(localStorageState);
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      // ! todos.push(newTodo); NO HACER ESTO PORQUE ESTARÍAMOS MUTANDO EL OBJETO
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );
      // const completedTodos = currentTodos.filter((todo) => todo.completed).length;
      // const pendingTodos = currentTodos.length - completedTodos;
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed)
          .length /* completedTodos */,
        pending: currentTodos.filter((todo) => !todo.completed)
          .length /* pendingTodos */,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }
    default:
      return state;
  }
};
