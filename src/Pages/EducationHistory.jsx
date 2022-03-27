import React from 'react'
import Layout1 from '../Layouts/Layout1'
import "./EducationAndHistory.css"
import newyork from "../assets/images/newyork.svg"
import aospine from "../assets/images/aospine.svg"
import UBNS from "../assets/images/UBNS.svg"
import BETH from "../assets/images/BETH.svg"
import neuro from "../assets/images/neuro.svg"
import ortho from "../assets/images/ortho.svg"
import college from "../assets/images/college.svg"
const EducationHistory = () => {
    return (
        <Layout1>
            <h2>Educational History:</h2>
            <div className='global-2-col-grid'>
            <div class="timeline">
  <div class="container left">
    <div class="content">
      <h4>FELLOWSHIP</h4>
       <div>
           <img src={newyork} alt="" />
       </div>
       <div>
           <img src={aospine} alt="" />
       </div>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>RESIDENCY</h4>
      <div>
           <img src={UBNS} alt="" />
       </div>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>INTERNSHIP</h4>
      <div>
           <img src={BETH} alt="" />
       </div>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>MEDICAL SCHOOL</h2>
      <div>
           <img src={neuro} alt="" />
       </div>
       <div>
           <img src={ortho} alt="" />
       </div>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>COLLEGE</h4>
      <div>
           <img src={college} alt="" />
       </div>
    </div>
  </div>
</div>
<div>
<h2>RESIDENCY</h2>
<div>
           <img src={UBNS} alt="" />
       </div>
       <h5 className='text-grey-dark'>University at Buffalo, Neurosurgery (Buffalo, NY)
University of Pittsburgh, Neurological Surgery (Pittsburgh, PA)</h5>
</div>
            </div>
        </Layout1>
    )
}

export default EducationHistory