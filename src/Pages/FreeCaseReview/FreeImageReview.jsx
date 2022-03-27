import React from 'react'
import { CustomCard } from '../../components'
import Layout1 from '../../Layouts/Layout1'
import "./freeImageReview.css"
import { BsEye } from 'react-icons/bs'
const FreeImageReview = () => {
    return (
        <Layout1 color="grey-lighter">
            <div className='mt-70'>
                <h2 className='text-black'>Free Case Review / Schedule Online</h2>
            </div>
            <div className='grid grid-col-review'>
                <CustomCard borderRadius={"medium"} cardType={"large"} shadow="medium" width={"large"} onClick={"your-function"} >
                    <div className='flex flex-col align-text-center align-center '>
                        <BsEye color='grey' size={60} />
                        <h3 className='text-grey-dark margin-0 fw-700'>Preview</h3>
                        <h4 className='text-grey-dark fw-400 margin-0'>{`(Image Upload System)`}</h4>
                    </div>
                </CustomCard>
                <CustomCard borderRadius={"medium"} cardType={"large"} shadow="medium" width={"large"} onClick={"your-function"} >
                    <div className='flex flex-col align-text-center align-center '>
                        <BsEye color='grey' size={60} />
                        <h3 className='text-grey-dark margin-0 fw-700'>Preview</h3>
                        <h4 className='text-grey-dark fw-400 margin-0'>{`(Image Upload System)`}</h4>
                    </div>
                </CustomCard>
            </div>
        </Layout1 >
    )
}

export default FreeImageReview