import React from 'react'
import moove from "../../Image/companies/moove.png"
import SHR from "../../Image/companies/SHR.png"
import treepz from "../../Image/companies/treepz.png"
import kusnap from "../../Image/companies/kusnap.jpeg"
import riby from "../../Image/companies/riby.png"
import devcareer from "../../Image/companies/devcareer.png"
import "./cihww.scss"


const CompaniesIWorked = () => {
  return (
    <>
    <h6>Companies i worked for</h6>
    <div className='d-flex justify-content-between mt-3 allImages'>
        <img src={moove} alt="moove"/>
        <img src={SHR} alt="shr" className='nil'/>
        <img src={treepz} alt="treepz" className='nil'/>
        <img src={kusnap} alt="kusnap" className='kusnap'/>
        <img src={riby} alt="riby" className='riby'/>
        <img src={devcareer} alt="devcareer"/>
    </div>
    </>
  )
}

export default CompaniesIWorked