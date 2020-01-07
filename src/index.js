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
  nextUnitOfWOrk = {
    dom: container,
    props:{
      children: [element]
    }
  };

  // const dom = element.type === "TEXT_ELEMENT"
  //   ? document.createTextNode(" ")
  //   : document.createElement(element.type);

  // const isProperty = key => key !== "children";

  // Object.keys(element.props)
  //   .filter(isProperty)
  //   .forEach(name => {
  //     dom[name] = element.props[name];
  //   });

  // element.props.children.forEach(child =>
  //   render(child, dom)
  // )
  // container.appendChild(dom);
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

let nextUnitOfWOrk = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWOrk && !shouldYield) {
    nextUnitOfWOrk = performUnitOfWork(nextUnitOfWOrk);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  //TODO add dom node
  // todo create new fibers
  // todo return next unit of works

  if(!fiber.dom){
    fiber.dom = createDom(fiber);
  }
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }

  const elements = fibers.props.children;
  let index = 0;
  let prevSibling = null;
  while (index < elements.length) {
    let element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null
    }

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber
    }
    prevSibling = newFiber;
    index++;
  }

  if(fiber.child){
    return fiber.child;
  }
  let nextFiber = fiber;
  while(nextFiber){
    if(nextFiber.sibling){
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }


}


// /** @jsx Didact.createElement */
// const element = (
//   <div style="background: salmon">
//     <h1>Hello World</h1>
//     <h2 style="text-align:right">from Didact</h2>
//   </div>);

/** @jsx Didact.createElement */
const element = (
  <div>
    <h1>
      <p>paragraph</p>
      <a>anchor</a>
    </h1>
    <h2 />
  </div>);


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

