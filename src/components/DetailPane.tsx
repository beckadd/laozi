import { Component, useContext } from "solid-js";
import { TodoList } from "../models";
import { ListContext } from "./ContextManager";

export const DetailPane: Component<{name: string, body: string}> = (props) => {
  /* const [_, currentItem] = useContext<[TodoList, TodoItem]>(ListContext);*/
  return (
    <>
      <div> 
        <h1>{props.name}</h1>
        <p>{props.body}</p>
      </div>
    </>
  );
};
