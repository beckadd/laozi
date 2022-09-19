import { Component, useContext } from "solid-js";
import { TodoList } from "../models";
import { ListContext } from "./ContextManager";

export const DetailPane: Component = () => {
  /* const [_, currentItem] = useContext<[TodoList, TodoItem]>(ListContext);*/
  return (
    <>
      <details>
        {/** 
        <h1>{current_item.name}</h1>
        <p>{current_item.body}</p>
        */}
      </details>
    </>
  );
};
