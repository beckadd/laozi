import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  NavBar,
  TodoSelectPane,
  TodoList,
  DetailPane,
  NewTask,
  ListContext,
} from "./components/Components";

const App: Component = () => {
  return (
    <div>
      {/* Top Navbar and Title */}
      <NavBar />
      <ListContext>
        {/* Select Todo List */}
        <TodoSelectPane />
        {/* Detail Pane Component */}
        <DetailPane />
        {/* Todo List view Component (?) */}
        <TodoList />
        {/* Enter new Task Component */}
        <NewTask />
      </ListContext>
    </div>
  );
};

export default App;
