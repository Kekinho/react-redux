import './Card.css'
import React from 'react'

function getColor(props){
    if(props.red) return "Red"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.purple) return "Purple"
    if(props.grey) return "Grey"
    return ""
}

// eslint-disable-next-line
export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>

        <div className='Header'>
            <span className='Title'>{props.title}</span>
        </div>
        <div className='Content'>
            <span>{props.children}</span>
        </div>
        </div>
    )
}