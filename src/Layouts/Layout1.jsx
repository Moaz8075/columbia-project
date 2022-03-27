import React from 'react'
import { SideBar, Footer } from "../components/index";


const Layout1 = ({ color, background, children }) => {
    return (
        <div className={color ? `inline-flex full-width bg-${color}` : 'inline-flex full-width'}>
            <SideBar />
            <div className={background ? `full-width flex flex-col justify-between ${background}` : 'full-width flex flex-col justify-between '}>
                <div className=' content-div px-30'>
                    {children}
                </div>
                <Footer />
            </div>

        </div>




    )
}

export default Layout1