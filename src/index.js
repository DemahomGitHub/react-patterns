import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 1. Function component
function MyFunctionComponent() {
  return (
    <div className="Card">
      <h3>React Patterns tutorial </h3>
      <div>This card is a function component</div>
    </div>
  );
}

// 2. Destructing props
function DestructingProps(props) {
  let { message } = props;
  return <div className="Card">{message}</div>;
}
DestructingProps.defaultProps = {
  message: "Destructing props default message"
};

// 3. JSX Spread attributes
function JSXSpreadAttributes({ message, ...restProps }) {
  return <div {...restProps}>{message}</div>;
}

// 4. Merge destructed props with other values
// Set className parameter as empty string to prevent passing undefined value
function MergeDestructedProposWithOtherValues({ className, ...props }) {
  let { text } = { ...props };
  let classNames = ["btn", className].join(" ");
  return (
    <div className="Card">
      <h5>Merge destructed with other values</h5>
      <button className={classNames}>{text}</button>
    </div>
  );
}

// 5. Conditonal Rendering
// IF statement: condition && <span>Rendered when condiontion = true </span>;
// UNLESS statement: condition && <span>Rendered when condiontion = false </span>;
// IF-ELSE statement: condition ? <span>Rendered when condiontion = true </span> : <span>Rendered when condiontion = false </span>
function ConditionalRendering({ name, age }) {
  return (
    <div className="Card">
      <h5>Conditional Rendering </h5>
      {age < 13 && <span>Hey {name}! You're still a child. </span>}
      {age < 18 ? (
        <span>Hey {name}! You're still a Teenager. </span>
      ) : (
        <span>Hey {name}! You're an adult. </span>
      )}
    </div>
  );
}

// 6. Children Types
// React can render children String or Array.
function ChildrenAsTypes() {
  return <div className="Card">This is a String as a child type</div>;
}

// 7. Array as children
function ArrayAsChildren() {
  let arr = ["Banana", "Orange", "Pineapple"];
  return (
    <div className="Card">
      <h5>My favorite fruits</h5>
      {arr.map(item => (
        <li>{item}</li>
      ))}
    </div>
  );
}

// 8. Function as children
// React component do not support functions as children

// 9. Render prop
function RenderPropComponent(props) {
  const UserProfile = ({ children }) => children(props);
  return (
    <div className="Card">
      <h5>Render prop component </h5>
      <UserProfile>
        {({ name, sex, age, revenu }) => (
          <div>
            <h4>User profile</h4>
            <div>Name: {name}</div>
            <div>Sex: {sex === "M" ? "Male" : "Female"}</div>
            <div>Age: {age}</div>
            <div>
              Annual Revenu: {revenu} ({revenu === "1M" && "Very rich"})
            </div>
          </div>
        )}
      </UserProfile>
    </div>
  );
}

// 10. Children pass-through
function ChildrenPassThroughCompoment(props) {
  return <div className="Card"> ljdflkd </div>;
}

function App() {
  return (
    <div>
      <MyFunctionComponent />
      <DestructingProps />
      <DestructingProps message="Destructing props custom message" />
      <JSXSpreadAttributes message="JSX Spread attributes" className="Card" />
      <MergeDestructedProposWithOtherValues
        text="This is a button"
        className="Button"
      />
      <ConditionalRendering name="John" age="25" />
      <ChildrenAsTypes />
      <ArrayAsChildren />
      <RenderPropComponent name="The Riche Guy" sex="M" age="32" revenu="1M" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
