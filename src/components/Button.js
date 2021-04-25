import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text , textColor, onClick}) => {
    return (
        <button
        onClick = {onClick} 
        class='btn' 
        style={{backgroundColor: color , color : textColor}}>
            {text}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
export default Button
