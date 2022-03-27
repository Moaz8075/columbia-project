import React from 'react'
import Layout1 from '../Layouts/Layout1'
import whatwedo from "../assets/images/what_we_do.svg"
import "./WhoWeAre.css"
const WhatWeDo = () => {
    return (
        <Layout1 color="grey-lighter" background="ellipse-pattern">
            <div className=' full-width '>
                <h2 className='mt-50'>What We Do</h2>
                <div className='global-2-col-grid'>
                    <div className='full-width h-60' >
                        <h5 className='text1 text-grey '>Dr. Morr started his own practice at the beginning of 2022 so as to broaden his personal availability and institutional presence city- and nation-wide. With the creation of this new flexible and nimble platform, our new practice aims to provide all patients the most convenient, streamlined, and personalized experience. The practice has engaged hospitals, large practices, and individual physicians in a collaborative network leveraging multidisciplinary and interinstitutional relationships to optimize patient care.

                            We would love to help all patients with spine questions and conditions. Given the preponderance of well-trained surgeons and institutions in NYC, we have chosen to focus our efforts where we can be most impactful and helpful to patients and the surgical community. We focus primarily on complex spinal and craniospinal cases, second opinion evaluations, and cases requiring reconstructive revision. Feel free to contact us and we will help you find an appropriate trustworthy and conservative surgeon if you are fortunate enough to require a “simpler” surgery.

                            <p className='text-blue'><b>Our focused clinics include:</b></p>
                            The Clinic for Scoliosis, Deformity, and Complex Thoracolumbar Revision Surgery
                            The Clinic for Craniocervical & Cervicothoracic Junction Deformity
                            The Clinic for Cervical and Thoracic Myelopathy

                            With combined neurosurgical and orthopedic proficiency, we evaluate and provide complex reconstructive care of the cranial base, cervical, thoracic, and lumbar spine, as well as lumbopelvic reconstruction and fixation.

                            Click the link on the menu for a <u><a className='text-blue' href="">free case review</a></u> if you would like your imaging and case reviewed by a surgeon. Alternatively, <u><a className='text-blue' href="">request a telehealth </a></u> slot online to speak with a surgeon for a formal telehealth and imaging interview. Our office will call you to obtain your data and information after you schedule. Local patients can contact us via phone or email as above. A toll-free number is available for international patients.</h5>
                    </div>
                    <div>
                        <img className='human border-radius-5px' src={whatwedo} alt="" />
                    </div>
                </div>

            </div>
        </Layout1>
    )
}

export default WhatWeDo