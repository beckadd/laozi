import { Component, For, createSignal } from "solid-js";
import "./styles/Button.module.css";

export const Button: Component<{ count: number }> = (props) => {
  const [current, setCurrent] = createSignal("foo");

  return (
    <>
      <button
        classList={{ selected: current() === "foo" }}
        onClick={() => setCurrent("foo")}
      >
        foo
      </button>
      <button
        classList={{ selected: current() === "bar" }}
        onClick={() => setCurrent("bar")}
      >
        bar
      </button>
      <button
        classList={{ selected: current() === "baz" }}
        onClick={() => setCurrent("baz")}
      >
        baz
      </button>
    </>
  );
};
