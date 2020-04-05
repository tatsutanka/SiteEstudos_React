import React from 'react'

// function Greet() {
//     return <h1>Hello World</h1>
// }
const Greet = props => { 
    return (
        <div>
        <p>{props.children}</p>
        <h1>Hello { props.name }</h1>
        </div>
    )
}

export default Greet