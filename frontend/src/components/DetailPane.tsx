import { Component, useContext } from "solid-js";
import { TodoList } from "../models";
import { ListContext } from "./ContextManager";

export const DetailPane: Component = () => {
  const list = useContext<TodoList>(ListContext);
  return <></>;
};
