import React, { useState } from 'react'
import logo from "../../assets/images/logo.svg"
import "./sideBar.css"
import { IoMdCall } from 'react-icons/io'
import { CustomButton, CustomLink } from '../index'
import data from './data'
import { HiLocationMarker } from 'react-icons/hi'
import { FiInbox } from 'react-icons/fi'
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'




const SideBar = () => {
    const [aboutUsActive, setAboutUsActive] = useState(false)
    const onClickHandler = () => {
        setAboutUsActive(!aboutUsActive)
    }
    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar'>
                <img src={logo} alt="logo" />
                <button className='contact-btn my-1' > <div className='flex justify-center align-center'><IoMdCall className='mx-1' />212-305-7950</div></button>
                <div className='my-1'>
                    <CustomButton variant="outlined" >Patient Portal</CustomButton>
                </div>
                <div className='my-1'>
                    {data.map((value, index) => {
                        return (
                            <>
                                <CustomLink key={value.linkName} path={value.path} onClick={value.linkName === 'About Us' ? onClickHandler : null}>{value.linkName} {value.linkName === "About Us" ? aboutUsActive ? <MdOutlineExpandLess className='mx-1' /> : <MdOutlineExpandMore className='mx-1' /> : null}  </CustomLink>
                                {value.linkName === 'About Us' ?
                                    <div className={aboutUsActive ? 'mx-1 display-block' : "display-none"}>
                                        <CustomLink path={"/about-us/who-we-are"}>Who We Are</CustomLink>
                                        <CustomLink path={"/about-us/education-history"}>Education History</CustomLink>
                                        <CustomLink path={"/about-us/offices-and-hospitals"}>Offices and Hospitals</CustomLink>
                                        <CustomLink path={"/about-us/what-we-do"}>What We do</CustomLink>
                                    </div>
                                    : null}

                            </>

                        )
                    })}

                </div>
            </div>
            <div className='sidebar-footer'>
                <div className='flex my-1 align-center'>
                    <HiLocationMarker size='30px' />
                    <span className='mx-1'>Columbia University Irving Medical Center</span>
                </div>
                <div className='flex my-1 align-center'>
                    <FiInbox size='20px' />
                    <span className='mx-1'>contact@spinehelplin.com</span>
                </div>
                <div className='flex my-1 align-center'>
                    <IoMdCall size='20px' />
                    <span className='mx-1'>212-305-7950</span>
                </div>
            </div>


        </div >

    )
}

export default SideBar