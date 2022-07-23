import React from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends React.Component {
  render() {
    return <button {...this.props} className="btn" style={this.context} /> 
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;