import React from "react";
import ThemedButton from "./ThemedButton.jsx";
import "./index.scss";
import { themes, ThemeContext } from "./themes-context.js";

class App extends React.Component {
  state = {
    theme: themes.light,
  }

  setTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.setTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.setTheme}>Default Theme</ThemedButton>
      </div>
    )
  }
}

export default App;

