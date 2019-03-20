import React, { Component } from "react";
import "../styles.css";

const AppContext = React.createContext();

class ContextProvider extends Component {
  state = {
    number: 0,
    inc: () => {
      this.setState({ number: this.state.number + 1 });
    },
    dec: () => {
      this.setState({ number: this.state.number - 1 });
    },
    reset: () => {
      this.setState({ number: 0 });
    }
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default class ReactContextBoard extends Component {
  render() {
    return (
      <div className="Card">
        <h4>React Context API </h4>
        <ContextProvider>
          <DisplayPanel />
          <CommandPanel />
        </ContextProvider>
      </div>
    );
  }
}

const CommandPanel = () => (
  <div className="Card Red-Card">
    <AppContext.Consumer>
      {context => (
        <button onClick={context.inc} className="Button">
          Increment
        </button>
      )}
    </AppContext.Consumer>
    <AppContext.Consumer>
      {context => (
        <button onClick={context.dec} className="Button">
          Decrement
        </button>
      )}
    </AppContext.Consumer>
    <AppContext.Consumer>
      {context => (
        <button onClick={context.reset} className="Button">
          Reset
        </button>
      )}
    </AppContext.Consumer>
  </div>
);

const DisplayPanel = () => (
  <div className="Card Orange-Card">
    <AppContext.Consumer>{context => context.number}</AppContext.Consumer>
  </div>
);
