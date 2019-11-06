export const initialState = {
  todos: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return {
            ...todo,
            completed: !todo.completed
          };
        })
      };
    default:
      return state;
  }
};
