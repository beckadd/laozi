import { Component, Context, createContext } from "solid-js"
import { createStore } from 'solid-js/store';
import { TodoList } from "../models"

const example: TodoList = {}

export const ListContext: Context<TodoList> = createContext(example);

export const _ListContextProvider: Component<{todo_list: TodoList, children?: Element}> = (props) => {
    const [todoList, setTodoList] = createStore(props.todo_list)
    // TODO: here, I need to define how I want the program to access the todolist.

    return <>
        <ListContext.Provider value = {[todoList, setTodoList]}>
            {props.children}
        </ListContext.Provider>
    </>
}




