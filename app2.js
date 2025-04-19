import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading",},
//   "Namaste React 🚀"
// );

// to create JSX element in multiple lines, we need to wrap it in ()
// React Element
const heading = (
  <h1 className="heading" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => {
  <h1>This is functional component</h1>;
};

// if we have to write it in one line, we can write it like this too, without {} and return keyword
const HeadingComponent2 = () => <h1>React Functional Component</h1>;

//it can also be written like this without return keyword
const HeadingComponent3 = () => (
    <h1>React Functional Component</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
