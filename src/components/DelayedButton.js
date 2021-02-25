import React, {Component} from 'react'

class DelayedButton extends Component{

    buttonClick = (e) => {
        e.persist()
        setTimeout(() =>
           this.props.onDelayedClick(e),this.props.delay )
    }
    render(){
        return(
            <button  onClick={this.buttonClick}></button>
        )
    }
}

export default DelayedButton
