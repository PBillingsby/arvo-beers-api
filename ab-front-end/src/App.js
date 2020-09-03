import React from "react";
import Beers from "./container/Beers";
class App extends React.Component {
  state = {
    isClicked: false
  };
  listBeers() {
    this.setState({ isClicked: true });
  }
  render() {
    return (
      <>
        <header className="jumbotron">
          <h1 className="text-center">Arvo Beers</h1>
        </header>
        <div className="container">
          <button onClick={() => this.listBeers()}>Lets Start</button>
          {this.state.isClicked ? <Beers /> : null}
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
