import { Component, Context, createContext, createSignal, JSX } from "solid-js";
import { createStore } from "solid-js/store";
import { TodoList, TodoItem } from "../models";

const example: TodoList = {};

export const ListContext: Context<TodoList> = createContext(example);

export const ListContextProvider: Component<{
  todo_list?: TodoList;
  children?: JSX.Element | JSX.Element[];
}> = (props) => {
  const [todoList, setTodoList] = createStore(props.todo_list);

  /**
   * When todoIdx == -1, no item is currently selected.
   */
  const [todoIdx, setTodoIdx] = createSignal(-1);
  // TODO: here, I need to define how I want the program to access the todolist.

  const currentTodo /*: *TodoItem?*/ = () => {
    /**
     * Convenience method to get the TodoItem instead of having to index the todolist.
     * TODO: This is just pseudocode at this point
     */
    return todoIdx() == -1 ? null : null; /*todoList[todoIdx()]*/
  };

  const addTask: TodoList = (task: TodoItem) => {
    /**
     * Convenience method to add a task to the current TodoList.
     * TODO: this is just pseudocode at this point
     */
    /*setTodoList(todoList.items.append(task))*/
  };

  return (
    <>
      <ListContext.Provider value={[todoList, setTodoIdx, currentTodo]}>
        {props.children}
      </ListContext.Provider>
    </>
  );
};