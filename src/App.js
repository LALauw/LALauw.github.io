import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/footer";

function App() {
  return [<Header />, <Wrapper />, <Footer />];
}

export default App;
