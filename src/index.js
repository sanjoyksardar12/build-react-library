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

const Didact={
  createElement
}

// const element = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", {},[ "bar"]),
//   Didact.createElement("b",{}, [])
// )

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b/>
  </div>);


const container = document.getElementById("root");

ReactDOM.render(element, container);




























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

