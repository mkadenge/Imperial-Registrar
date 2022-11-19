import React from 'react'
import './Experience.css'
import {CgRadioChecked} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>

      
      

      <div className="container services__container">

        <article className="service">

          <div className="service__head">

            <h3>Business Registration.</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Registration of public companies.</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Registration of Limited Liability Company</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>
Registration of Limited Liability Partnership</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Registration of Non-Governmental Organisations.</p>
            </li>

            

            

          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className="service">

          <div className="service__head">

            <h3>Corporate Governance.</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Governance Audit.</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Board induction and training.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Board evaluations</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Updating of Board committee charters.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Corporate governance training.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Development of Board charters.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>
Develop and guide implementation of governance reports.</p>
            </li>

            

          </ul>
        </article>
        {/*END OF WEB DEV*/}

        <article className="service">

          <div className="service__head">

            <h3>Immigration Services</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>
Work permit application and renewal</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Special pass application</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Dependent Pass application for accompanying spouse, children or parent</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Immigration Support and Advisory services;</p>
            </li>

            

            

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services