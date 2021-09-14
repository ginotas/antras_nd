
import React from "react";
import ChangeRed from "./components/ChangeRed";


class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: "green"};
    }

    changeColor = () => {
         
          this.setState(state => {
              let color;
              if (state.bg == "green") {
                  color = "red";
              } else if (state.bg == "red") {
                  color = "green";
              }
              return(
              {bg: color}
              )
          });
    }

render () {
    return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <ChangeRed clickToChangeColor={this.changeColor}></ChangeRed>
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