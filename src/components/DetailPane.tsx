import { Component, useContext } from "solid-js";
import { TodoItem } from "../models";

import { ListContext } from "./ContextManager";

export const DetailPane: Component = () => {
  // const [_, currentItem] = useContext<[{TodoList, ():TodoItem, TodoItem}, TodoItem]>(ListContext);
  return (
    <>
      <div> 
        <h1></h1>
        <p></p>
      </div>
    </>
  );
};
