
import { render } from "@testing-library/react";
import React from "react";
import ChangeColorButton from "./ChangeColorButton";



class App extends React.Component {

        constructor() {
            super();
            this.state = {bg: "yellow"};
        }


        changeColorB = () => {
            this.setState(
                {
                    bg: "black"
                }
            );
        }

        changeColorR = () => {
            this.setState(
                {
                    bg: "red"
                }
            );
        }

        changeColorG = () => {
            this.setState(
                {
                    bg: "green"
                }
            );
        }




        render () {
            return (
                <div className="rutulys" style={{backgroundColor: this.state.bg}}>
                    <ChangeColorButton color="black" clickToChangeColor={this.changeColorB}></ChangeColorButton>
                    <ChangeColorButton color="red" clickToChangeColor={this.changeColorR}></ChangeColorButton>
                    <ChangeColorButton color="green" clickToChangeColor={this.changeColorG}></ChangeColorButton>
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