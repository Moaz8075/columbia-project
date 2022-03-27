import React from 'react'
import { CustomCard } from '../../components'
import Layout1 from '../../Layouts/Layout1'
import spineImg from "../../assets/images/jspSpine.svg"
import cureusImg from "../../assets/images/cureus.svg"
import reviewImg from "../../assets/images/review.svg"
import patientImg from "../../assets/images/focus.svg"



import "./researchPage.css"

const ResearchAndPublications = () => {
    return (
        <Layout1 color="grey-lighter">
            <div className='mt-70'>
                <h2 className='text-black'>{"Research & Publications"}</h2>
            </div>
            <div className='grid grid-col' >
                <CustomCard borderRadius={"large"} cardType={"small"} shadow="medium" text={"Global Alignment"}  >
                    <img src={spineImg} alt="jspSpine" />
                </CustomCard>

                <CustomCard borderRadius={"large"} cardType={"small"} width="small" shadow="medium" text="Open Access Original Article" >
                    <img src={cureusImg} alt="jspSpine" />
                </CustomCard>
                <CustomCard borderRadius={"large"} cardType={"small"} width="small" shadow="medium" text={"Minimally Invasive"} >
                    <img src={reviewImg} alt="jspSpine" />
                </CustomCard>
                <CustomCard borderRadius={"large"} cardType={"small"} width="small" shadow="medium" text={"State of The Union"} >
                    <img src={spineImg} alt="jspSpine" />
                </CustomCard>
                <CustomCard borderRadius={"large"} cardType={"small"} width="small" shadow="medium" text={"Patient Variables"} >
                    <img src={patientImg} alt="jspSpine" />
                </CustomCard>
            </div>



        </Layout1 >
    )
}

export default ResearchAndPublications