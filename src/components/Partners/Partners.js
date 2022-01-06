import React from 'react'
import { AirBnB, Android, Apiary, Apple, Basecamp, Ibm, Meta } from '../imports'
import './Partners.css'

export const Partners = () => {
    return (
        <div className='partners' id='abt'>
            <p className='partners-header'>Partners</p>
            <p className='partners-desc'>Most sketch tools are designed for teams. FigmaLand is designed for freelancers</p>
            <div className='partners-icon'>
                <img src={Apple}/>
                <img src={AirBnB}/>
                <img src={Apiary}/>
                <img src={Meta}/>
                <img src={Android}/>
                <img src={Basecamp}/>
                <img src={Ibm}/>
            </div>
            <button>Try For Free</button>
        </div>
    )
}
