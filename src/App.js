import React from "react";
import "./scss/app.scss";
import Header from "./components/header";
import Main from "../src/pages/main/main";
import PageNotFound from "./pages/404/404";
import {Routes, Route} from "react-router-dom";
import Cart from "./pages/cart/cart";

function App() {
const [searchValue, setSearchValue] = React.useState();
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Main searchValue={searchValue}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>

    </div>
  );
}

export default App;
