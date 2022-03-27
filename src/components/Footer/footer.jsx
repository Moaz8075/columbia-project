import React from 'react'
import "./footer.css"

const footer = () => {
    return (
        <div className='footer'>
            <div><span className='mx-1' >© 2021 Columbia University</span></div>
            <div>
                <span className='mx-1'>Privacy Policy</span>|
                <span className='mx-1'>Terms & Conditions</span>|
                <span className='mx-1'>HIPAA</span>|
                <span className='mx-1'>General Information: 212-305-2862</span>

            </div>
        </div>
    )
}

export default footer