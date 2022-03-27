import React from 'react'
import './customCard.css'

const CustomCard = ({ children, borderRadius, cardType, shadow, text, width, onClick }) => {
    const cssObj = {
        borderRadiusKey: borderRadius || "small",
        cardTypeKey: cardType || "small",
        shadowKey: shadow || "small",
        widthKey: width || "large"
    }
    return (
        <div className={onClick ? 'flex flex-col lineBreak pointer' : 'flex flex-col lineBreak'} onClick={onClick ? onClick : null}>
            < div className={`flex justify-center align-center bg-white br-${cssObj.borderRadiusKey} type-${cssObj.cardTypeKey} shadow-${cssObj.shadowKey} width-${cssObj.widthKey}`
            } > {children}</div >
            {text ? <h4 className='text-grey-dark width-small align-text-center'>{text}</h4> : null}
        </div >



    )
}

export default CustomCard