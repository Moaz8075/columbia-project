import React from 'react'
import { NavLink } from 'react-router-dom'
import "./customlink.css"

const CustomLink = ({ path, onClick, children }) => {
    return (
        <div className='my-1'>
            <NavLink onClick={onClick ? onClick : null} className={({ isActive }) =>
                isActive ? "active" : "normalLink"
            } to={path}>{children}</NavLink>
        </div>

    )
}

export default CustomLink