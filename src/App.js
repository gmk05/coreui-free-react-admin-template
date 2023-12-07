import React ,{useState} from "react";


import "./App.css"
import Header from "./../src/Header"
import Products_list from "./Products_list";
function App(){

  return (
    <div className="App">
    <div className="header">
        <h1>Welcome to our Product Page</h1>
      </div>
      
      <Header/>
      <Products_list/>
      </div>
    

  )
}
export default App;