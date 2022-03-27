import React from 'react'
import Layout1 from '../Layouts/Layout1'
import { CustomCard } from '../components/index'

const PatientEmrPortal = () => {
    return (
        <Layout1 color="grey-lighter">
            <div className='mt-70'>
                <h2 className='text-black'>Patient EMR Portal</h2>
            </div>
            <CustomCard borderRadius={"small"} cardType={"large"} shadow="medium" >
                {/* |<iframe width={"100%"} height={"90%"} title="iframe from practice fusion"></iframe> */}
                <h4 className='text-grey-dark'>iFrame from Practice Fusion</h4>
            </CustomCard>
        </Layout1 >
    )
}

export default PatientEmrPortal