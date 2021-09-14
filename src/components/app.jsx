
import { render } from "@testing-library/react";
import React from "react";
//import ChangeRed from "./components/ChangeRed";


class App extends React.Component {

        constructor() {
            super();
            this.state = {bg: "black"};
        }

        red = () => {

            this.setState(state => {
                return(
                    {bg: "red"}
                    )
            });
        };

        blue = () => {

            this.setState(state => {
                return(
                    {bg: "blue"}
                    )
            });

        };

        green = () => {
            
            this.setState(state => {
                return(
                    {bg: "green"}
                    )
            });

        };

        black = () => {
            
            this.setState(state => {
                return(
                    {bg: "black"}
                    )
            });

        };



    render() { 
        
        return (
            <div>
            <div className="rutulys" style={{backgroundColor: this.state.bg}}></div>
            <button className="mygtukas1" onClick={this.red}>Raudonas</button>
            <button className="mygtukas2" onClick={this.blue}>Melynas</button>
            <button className="mygtukas3" onClick={this.green}>Zalias</button>
            <button className="mygtukas4" onClick={this.black}>Juodas</button>
            </div>

    );

    }
}



        export default App;


        /*
        
        ND:

        Namuose tas pats apskritimas ir trys mygtukai. 
        Kiekvienas mygtukas atskiras komponentas ir atskira spalva nudažomas apskritimas
        
        Kokį mygtuką paspausime toks bus apskritimas
    
        
        */