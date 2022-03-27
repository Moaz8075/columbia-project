import React from 'react'
import Layout1 from '../Layouts/Layout1'
import youtube from "../assets/images/youtube.png"
import "./WhoWeAre.css"
const MediaAndPatient = () => {
    return (
        <Layout1 color="grey-lighter" background="ellipse-pattern">
            <div className=' full-width '>
                <h2 className='mt-50'>Media & Patient Stories</h2>
                <div >
                    <img  src={youtube} alt="" />
                </div>
            </div>
        </Layout1>
    )
}

export default MediaAndPatient