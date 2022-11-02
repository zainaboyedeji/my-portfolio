import React from 'react'
import moove from "../../Image/companies/moove.png"
import SHR from "../../Image/companies/SHR.png"
import treepz from "../../Image/companies/treepz.png"
import kusnap from "../../Image/companies/kusnap.jpeg"
import riby from "../../Image/companies/riby.png"
import devcareer from "../../Image/companies/devcareer.png"
import "./CompaniesIWorked.scss"


const CompaniesIWorked = () => {
  return (
    <>
    <h3>Companies I Worked With</h3>
    <div className='d-flex justify-content-between mt-3 allImages'>
        <img src={moove} alt="moove" className='moove'/>
        <img src={SHR} alt="shr" className='shr'/>
        <img src={treepz} alt="treepz" className='treepz'/>
        <img src={kusnap} alt="kusnap" className='kusnap'/>
        <img src={riby} alt="riby" className='riby'/>
        <img src={devcareer} alt="devcareer" className='dev'/>
    </div>
    </>
  )
}

export default CompaniesIWorked