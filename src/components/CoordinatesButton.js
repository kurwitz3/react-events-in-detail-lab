import React, {Component} from 'react'


class CoordinatesButton extends Component{
   
    buttonEvent = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }
    render(){
       return (
           <div>
             <button onClick={this.buttonEvent}></button>
           </div>
       )
    }
}

export default CoordinatesButton
