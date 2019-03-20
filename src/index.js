import React from "react";
import ReactDOM from "react-dom";
import ReactContextBoard from "./components/ReactContextProvider";

import "./styles.css";

// 1. Function component
function MyFunctionComponent() {
  return (
    <div className="Card Red-Card">
      <h3>React Patterns tutorial </h3>
      <div>This card is a function component</div>
    </div>
  );
}

// 2. Destructing props
function DestructingProps(props) {
  let { message } = props;
  return <div className="Card Yellow-Card">{message}</div>;
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
    <div className="Card Green-Card">
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
    <div className="Card Blue-Card">
      <h5>Conditional Rendering </h5>
      {age < 13 && <span>Hey {name}! You are still a child. </span>}
      {age < 18 ? (
        <span>Hey {name}! You are still a Teenager. </span>
      ) : (
        <span>Hey {name}! You are an adult. </span>
      )}
    </div>
  );
}

// 6. Children Types
// React can render children String or Array.
function ChildrenAsTypes() {
  return (
    <div className="Card Yellow-Card">This is a String as a child type</div>
  );
}

// 7. Array as children
function ArrayAsChildren() {
  let arr = ["Banana", "Orange", "Pineapple"];
  return (
    <div className="Card Purple-Card">
      <h5>My favorite fruits</h5>
      {arr.map((item, i) => (
        <li key={i}>{item}</li>
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
    <div className="Card LightBlue-Card">
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

// 10. Children pass-through - React Context (an alternative to React-Redux)
// The React Context Provider implements this pattern. Have a look at ReactContextProvider.js file

// Layout component

// Container Component

// Higher-order component
const DatatableBuilder = (Header, Body, Footer) =>
  class extends React.Component {
    render() {
      return (
        <div className="Card">
          <Header {...this.props} />
          <Body {...this.props} />
          <Footer {...this.props} />
        </div>
      );
    }
  };

const Header1 = ({ title }) => {
  return <h2 className="Card Red-Card"> {title} </h2>;
};

function Body1({ content }) {
  return <div className="Card Yellow-Card">{content}</div>;
}

function Footer1({ info }) {
  return <div className="Card Green-Card">{info}</div>;
}

function App() {
  const DataTable = DatatableBuilder(Header1, Body1, Footer1);
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
      <RenderPropComponent name="The Rich Guy" sex="M" age="15" revenu="1M" />
      <ReactContextBoard />
      <DataTable
        title="This is a header"
        content="This the body of the function"
        info="Hello INFO"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
