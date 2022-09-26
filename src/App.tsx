import type { Component } from "solid-js";
import { NavBar } from "./components/Components";
import { UserContextProvider } from "./components/ContextManager";
const App: Component = () => {
  return (
    <div>
      <UserContextProvider>
        <NavBar />
      </UserContextProvider>
            {/*
      <ListContextProvider>
        <TodoSelectPane />
        <DetailPane />
        <TodoList />
        <NewTask />
      </ListContextProvider>
  */}
    </div>
  );
};

export default App;
