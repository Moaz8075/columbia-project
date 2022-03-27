import React, { useEffect, useState } from 'react'
import Layout1 from '../../Layouts/Layout1'
import mainImage from "../../assets/images/mainImage.svg"
import "./newsAndEvents.css"
import foxLogo from '../../assets/images/foxNewslogo.svg'

const NewsAndEvents = () => {
    const { innerWidth: width } = window;
    const [imgDisplay, setImgDisplay] = useState("flex-row")

    useEffect(() => {
        if (width < 769) {
            setImgDisplay('flex-col')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Layout1 color="grey-lighter" background="dna-pattern">
            <div className='full-width flex align-center  '>
                <div className={`news-grid align-center`}>
                    <div className='mx-1 text-black'>
                        <h1>Simon&nbsp;Morr,&nbsp;MD</h1>
                        <h3>Revision Neurosurgery Expert</h3>
                        <h3>5,000+ Successful Surgeries</h3>
                        <div className='py-1'>
                            <img className='fox-image-position' src={foxLogo} alt="news-logo" />
                            <button className='full-width bg-white shadow text-blue fw-400 fox-btn'>Featured In Fox News</button>
                        </div>
                    </div>
                    <div className={'overflow-hidden'}>
                        <img className='main-image-size' src={mainImage} alt="" />
                    </div>
                </div>
            </div>
        </Layout1>
    )
}

export default NewsAndEvents