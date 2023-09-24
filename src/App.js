import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListRange from "./components/ListRange";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="main col-10 offset-1">
        <ListRange />/
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;