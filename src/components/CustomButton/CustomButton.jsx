import React from 'react'
import "./customButton.css"

const CustomButton = ({ disabled, fullWidth, variant, children, onClick }) => {
    return (
        <button disabled={disabled && disabled !== false ? true : false} className={variant ? variant : null} onClick={onClick} >{children}</button>
    )
}

export default CustomButton