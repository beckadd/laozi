import {
  Component,
  Context,
  createContext,
  createSignal,
  JSX,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
// import { TodoList, TodoItem } from "../models";
import { EXAMPLE_USER, EXAMPLE_TODOLIST } from '../testing/example_data';

type TodoItem = { name: string; description: string };
type TodoList = TodoItem[];
type User = {
  name: string;
  profileImg: string;
};

// Need to specify this as a TodoList once I get it together
export const ListContext: Context = createContext();

export const ListContextProvider: Component<{
  todo_list: TodoList;
  children?: JSX.Element | JSX.Element[];
}> = (props) => {
  const debug = useContext(DebugContext);

  const [todoList, setTodoList] = createStore<TodoList>(
    debug ? EXAMPLE_TODOLIST : props.todo_list
  );

  /**
   * When todoIdx == -1, no item is currently selected.
   */
  const [todoIdx, setTodoIdx] = createSignal(-1);
  // TODO: here, I need to define how I want the program to access the todolist.

  const currentTodo /*: *TodoItem?*/ = () => {
    /**
     * Convenience method to get the TodoItem instead of having to index the todolist.
     */
    return todoIdx() == -1 ? null : todoList[todoIdx()];
  };

  const addTask = (task: TodoItem): TodoList => {
    /**
     * Convenience method to add a task to the current TodoList.
     */

    setTodoList([...todoList, task]);
    return todoList;
  };

  // const editTask: TodoItem = ({name: string, description: string}: TodoItem) => {
  //     return {name, description};
  // }

  return (
    <>
      <ListContext.Provider
        value={[{ todoList, setTodoIdx, currentTodo }, addTask]}
      >
        {props.children}
      </ListContext.Provider>
    </>
  );
};

export const UserContext: Context<User | undefined> = createContext();

export const UserContextProvider: Component<{
  children?: JSX.Element | JSX.Element[];
}> = (props) => {
  const debug = useContext(DebugContext);

  return (
    <>
      <UserContext.Provider value={debug ? EXAMPLE_USER : null}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export const DebugContext: Context<boolean> = createContext(false);

export const DebugContextProvider: Component<{
  debug: boolean;
  children?: JSX.Element | JSX.Element[];
}> = (props) => {
  return (
    <>
      <DebugContext.Provider value={props.debug}>
        {props.children}
      </DebugContext.Provider>
    </>
  );
};
