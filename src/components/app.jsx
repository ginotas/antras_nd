
import React from "react";
import ChangeColorButton from "./ChangeColorButton";


class App extends React.Component {

        constructor() {
            super();
            this.state = {
                bg: "yellow",
                in: "",
                width: "500px",
                height: "500px",
                skersmuo: "",
                radius: "50%",
            };
            
        }


        changeColorB = () => {
            this.setState(
                {
                    bg: "black",
                    in: "black"
                    
                }
            );
        }

        changeColorR = () => {
            this.setState(
                {
                    bg: "red",
                    in: "red"
                }
            );
        }

        changeColorG = () => {
            this.setState(
                {
                    bg: "green",
                    in: "green"
                }
            );
        }

        changeColor = (color) => {
            this.setState(
                {
                    bg: color,
                    in: color
                }
            );
        }

        inChange = (e) => {
            this.setState ({
                in: e.target.value,
                bg: e.target.value
                
            });
        }

       changeSkersmuo = (e) => {
           this.setState({
               skersmuo: parseInt(e.target.value),
               width: parseInt(e.target.value),
               height: parseInt(e.target.value)
           });
       }

       radiusChange = () => {
           this.setState(state =>
               {
                   let newRadius;
                if (state.radius == "50%") {
                    newRadius = "0%"
                } else if (state.radius == "0%") {
                    newRadius = "50%"
                } return (
                    {radius: newRadius}
                )
               }
           );
       }


        render () {
            return (
                <div className="rutulys" style={{backgroundColor: this.state.bg, width: this.state.width, height: this.state.height, borderRadius: this.state.radius}}>
                    <ChangeColorButton color="black" clickToChangeColor={this.changeColor}></ChangeColorButton>
                    <ChangeColorButton color="red" clickToChangeColor={this.changeColor}></ChangeColorButton>
                    <ChangeColorButton color="green" clickToChangeColor={this.changeColor}></ChangeColorButton>
                    <input className = "inputai" type="text" value= {this.state.in} onChange= {this.inChange} placeholder="iveskite spalva, pvz red" />
                    <input className = "inputai"  type="text" value= {this.state.skersmuo} onChange= {this.changeSkersmuo} placeholder="iveskite dydi, pvz 200"  />
                    <input className = "inputai"  type="checkbox" defaultunchecked={this.state.radius} onChange={this.radiusChange} />
                </div>
              
                );
            }
}


        export default App;


        /*
        
        ND2:

        Namuose tas pats apskritimas ir trys mygtukai. 
        Kiekvienas mygtukas atskiras komponentas ir atskira spalva nudažomas apskritimas
        
        Kokį mygtuką paspausime toks bus apskritimas
    
        
        */

         /*
        
        ND3:

        Padaryti tris kontroliuojamus inputus du text tipo ir vienas checkbox. 
        Vienas inputas turi keisti apskritimo spalvą, 
        kitas apskritimo skersmenį 
        ir trečias- kai pažymėtas turi pakeisti apskritimą į kvadratą
    
        
        */