// import React from 'react';
import ReactDOM from 'react-dom';

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b/>
//   </div>);
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}
function createElement(type, props, ...children) {
  debugger
  const returnObject = {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  }
  console.log(returnObject);
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  }
}

function render(element, container) {
  const dom = element.type === "TEXT_ELEMENT"
    ? document.createTextNode(" ")
    : document.createElement(element.type);

  const isProperty = key => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child =>
    render(child, dom)
  )
  container.appendChild(dom);
}


const Didact = {
  createElement,
  render
}

// const element = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null,[ "bar"]),
//   Didact.createElement("b")
// )

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
  <a >sanjoy</a>
  <b/>
  </div>);

console.log("element==", element);

const container = document.getElementById("root");

Didact.render(element, container);




























// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // const element = <h1 title="foo">Hello</h1>;

// // const element = React.createElement("h1", {title:"foo"}, "Hello");
// const element = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello"
//   }
// }


// const container = document.getElementById("root");
// // ReactDOM.render(element, container);

// const node = document.createElement(element.type);
// node["title"] = element.props.title;

// const text = document.createTextNode("");
// text["nodeValue"] = element.props.children;

// node.appendChild(text);

// container.appendChild(node);

