import { Component } from "solid-js"

export const NewTask: Component = () => {
    return <form>
        <input type = "text" id = "todo-name" name = "todolist"/>
        <input type = "submit" value = "Submit"/>
    </form>
}