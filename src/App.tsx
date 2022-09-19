import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";

import {
  NavBar,
  TodoSelectPane,
  TodoList,
  DetailPane,
  NewTask
} from "./components/Components";
import { ListContextProvider } from "./components/ContextManager";

const App: Component = () => {
  return (
    <div>
      <NavBar />
      <ListContextProvider>
        <TodoSelectPane />
        <DetailPane />
        <TodoList />
        <NewTask />
      </ListContextProvider>
    </div>
  );
};

export default App;
