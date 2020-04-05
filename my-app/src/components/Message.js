import React, {Component} from 'react'

class Message extends Component {

     constructor(){
         super()
         this.state = {
             message: 'ola viajante'
         }

    }

    changeMessage(){
        this.setState({
            message: 'valeu ai parsa'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage() }>ok</button>
            </div>
        )
    }
}
 export default Message