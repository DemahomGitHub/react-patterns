import React, { Component } from "react";

class ChildrenPassThroughComponent extends Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
