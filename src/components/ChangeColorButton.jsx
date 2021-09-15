import React from "react";


class ChangeColorButton extends React.Component {


    render() {
        return (
        
            <button className="mygtukas" onClick={ () => this.props.clickToChangeColor(this.props.color)}>
                {this.props.color}
            </button>
        );
    }
}
  
    
export default ChangeColorButton;