import React from "react";
import BeerForm from "./BeerForm";
import ListBeers from "./container/ListBeers";
function App() {
  return (
    <div className="container">
      <BeerForm />
      <ListBeers />
    </div>
  );
}

export default App;
