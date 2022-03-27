import React from 'react'
import Layout1 from '../Layouts/Layout1'
import officesImage from "../assets/images/offices_image.svg"
import "./WhoWeAre.css"
const OfficesAndHospitals = () => {
    return (
        <Layout1 color="grey-lighter" background="ellipse-pattern">
            <div className='full-width my-1'>
                <h2 className='mt-50' > Offices & Hospitals</h2>
                <div className='global-2-col-grid'>
                    <div className='full-width h-60'>
                        <h5 className='text1 text-grey '>Click the link on the menu for a <u><a className='text-blue' href="">free case review</a></u> if you would like your imaging and case reviewed by a surgeon. Alternatively, <u><a className='text-blue' href="">request a telehealth </a></u>slot online to speak with a surgeon for a formal telehealth and imaging interview. Our office will call you to obtain your data and information after you schedule. Local patients can contact us via phone or email as above. A toll-free number is available for <u><a className='text-blue' href="">international patients.</a></u>
                            Outpatient Office Locations include Manhattan, Westchester, and Long Island sites. Call for availability.
                            Inpatient and surgical affiliations include hospitals in Manhattan, Westchester, Brooklyn, Long Island, Upstate NY, Florida, and Arkansas. Dr. Morr is often called by his colleagues to assist in a variety of cases. Dr. Morr insists on meeting his patients before surgery and seeing them after surgery. Surgical scheduling at all sites is therefore not available at all times. Call for availability of locations.
                            <p><b className='text-blue'>Our focused clinics include:</b></p>
                            <ul>
                                <li>The Clinic for Scoliosis, Deformity, & Complex Thoracolumbar Revision Surgery</li>
                                <li>The Clinic for Craniocervical & Cervicothoracic Junction Deformity</li>
                                <li>The Clinic for Cervical & Thoracic Myelopathy</li>
                                <li>The Clinic for Lumbar Failed Back & Post-Laminectomy Syndrome</li>
                                <li>The Clinic for Tumor Reconstruction Surgery</li>
                            </ul>
                            With combined neurosurgical and orthopedic proficiency, we evaluate and provide complex reconstructive care of the cranial base, cervical, thoracic, and lumbar spine, as well as lumbopelvic reconstruction and fixation.</h5>
                    </div>
                    <div>
                        <img className='human border-radius-5px' src={officesImage} alt="" />
                    </div>
                </div>
            </div>
        </Layout1>
    )
}

export default OfficesAndHospitals