import { Component, For, useContext } from "solid-js";
// import { todo_item, todo_list } from "../models";
import { ListContext } from "./ContextManager";

export const TodoList: Component = () => {
  const stuff = useContext(ListContext);
  return (
    <>
      {/* <For each={stuff}> {() => <ItemSummary {...} />}</For> */}
    </>
  );
};

const ItemSummary: Component<{name: string, body: string}> = (props) => {
  return <></>;
};
