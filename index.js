import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Test } from "./components/Test";


class App extends React.Component { //måste extende React.Component
    //om den ska göra något som ska synas på skärmen måste man ha denna metoden
    render() {
      var user = {
           name: "Henke", 
           hobbies: ["Sports", "Training","Drinking beer"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10.col-xs-offset-1">
                    <Header homeLink="Home"/>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-xs-10.col-xs-offset-1">
                    <hr/>
                    <Test/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xMAs-10.col-xs-offset-1">
                    <hr/>
                    <Home name={"Henrik"} initialAge={24} user={user} >
                    <p>This is a paragraph! </p>
                    <hr/>
                    </Home>
                    </div>
                </div>
                
               
            </div>


        );

    }                       

}

render(<App/>, window.document.getElementById("app")); 