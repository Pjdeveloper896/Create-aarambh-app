// Import SnapUI from your npm package
import { createElement, render, createRouter } from 'aarambhjs';

// Create a simple virtual DOM node
const vdom = createElement('h1', { style: 'color: blue' }, 'Hello World from SnapUI!');

// Render and append to DOM
document.getElementById('app').appendChild(render(vdom));
