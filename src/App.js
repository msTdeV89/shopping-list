import React, { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Options from "./components/Options";
import { ShoppingListContext } from "./context/context";

function App() {
  const { products, showAll } = useContext(ShoppingListContext);

  return (
    <div className='app'>
      <Header />
      <Options />
      <Main products={products} showAll={showAll} />
    </div>
  );
}

export default App;
