import React from 'react'
import Layout1 from '../Layouts/Layout1'
import Image1 from "../assets/images/Image1.svg"
import bottom1 from "../assets/images/bottom 1.svg"
import bottom2 from "../assets/images/bottom 2.svg"
import bottom3 from "../assets/images/bottom 3.svg"
import "./WhoWeAre.css"

const WhoWeAre = () => {
    return (
        <Layout1 color="grey-lighter" background="ellipse-pattern">
            <div className='full-width '>
                <h2 className='mt-50'> Who we are</h2>
                <div className='global-2-col-grid'>
                    <div className='full-width h-60'>
                        <h5 className='text1 text-grey '>Dr. Morr is a neurosurgeon who is dual-trained in neurosurgical and orthopedic spine surgery. He provides comprehensive microscopic neurosurgical and reconstructive orthopedic spinal care with special focus on advanced degeneration, tumors, infections, traumatic fractures and complex deformities—including kyphosis and scoliosis. He has a keen interest in conditions of the cranio-cervical junction and base of the skull, including Chiari malformation, basilar invagination and Syrinx/Syringomyelia. He also cares for patients with a variety of brain conditions including tumors and trauma.
                            After completing his tenure as Chief Resident of the neurosurgery service, he was invited to stay on as Assistant Professor of Neurosurgery at the University at Buffalo, where he focused on Spine Surgery, Brain Trauma, and Brain Tumors. As a neurosurgeon, Dr. Morr was sponsored for a fellowship by the North American spine division of the AO Foundation (Arbeitsgemeinschaft für Osteosynthesefragen), one of the most storied, transformative, and influential Orthopedic research and education organizations founded in 1958 in Switzerland. He returned to his hometown of New York City to receive further
                            fellowship training in orthopedic complex spinal deformity and scoliosis surgery from a team of world famous orthopedic and neurosurgical spine surgeons at Columbia University. After completing this fellowship, he was promoted to Assistant Professor of Neurosurgery at Columbia University Medical Center where he remained for several years performing complex surgeries and training post-doctoral fellow and resident trainees at Columbia University’s renowned neurosurgical and orthopedic training programs. Dr. Morr started his own practice at the beginning of 2022 so as to broaden his institutional availability city- and nation-wide. With the creation of this new flexible and nimble platform, our new practice aims to provide all patients the most convenient, streamlined, and personalized experience. The practice has engaged hospitals, large practices, and individual physicians in a collaborative network leveraging multidisciplinary and interinstitutional relationships to optimize patient care.
                            He favors a minimally invasive and conservative approach whenever possible, but often sees patients who have had previous surgery and require extensive revision and reconstruction. He is trained and comfortable with advanced new robotic and navigated techniques, as well as radiosurgery when the best option is &quot;knifeless surgery”.
                        </h5>
                    </div>
                    <div>
                        <img className='human border-radius-5px' src={Image1} alt="" />
                    </div>
                </div>

                <div>
                    <img className='bottom' src={bottom1} alt="" />
                    <img className='bottom' src={bottom2} alt="" />
                    <img className='bottom' src={bottom3} alt="" />
                </div>
            </div>
        </Layout1>
    )
}

export default WhoWeAre