// Import SnapUI from your npm package
import { createElement, render, createRouter } from 'aarambhjs';

// Create a simple virtual DOM node
function Home() {
    return createElement("div", null,
      createElement("h1", null, "Welcome to Aarambh.js!"),
      createElement("button", {
        onClick: () => router.navigate("/counter")
      }, "Go to Counter")
    );
  }

  function Counter() {
    let count = 0;
    let countRef;

    return createElement("div", null,
      createElement("h1", null, "Counter"),
      createElement("p", {
        ref: el => countRef = el
      }, "Count: 0"),
      createElement("button", {
        onClick: () => {
          count++;
          countRef.textContent = "Count: " + count;
        }
      }, "Increment"),
      createElement("button", {
        onClick: () => router.navigate("/")
      }, "Back")
    );
  }

  const router = createRouter({
    '/': Home,
    '/counter': Counter,
  }, 'app');
