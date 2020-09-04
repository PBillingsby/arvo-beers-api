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
        <header className="beer-background-header">
          <h1 className="text-center">Arvo Beers</h1>
        </header>
        <div className="p-3 container">
          <button className="mx-auto" onClick={() => this.listBeers()}>
            Lets Start
          </button>
          {this.state.isClicked ? <Beers /> : null}
        </div>
      </>
    );
  }
}
export default App;

// window.history.back() .forward() for previous pages
