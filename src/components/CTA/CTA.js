import React from 'react'
import { Girl } from '../imports'
import './CTA.css'

export const CTA = () => {
    return (
        <div className='cta-container'>
            <img src={Girl}/>
            <div className='cta-group'>
                <p className='cta-before'>At your fingertips</p>
                <p className='cta-header'>Mind Blowing fast prototyping</p>
                <p className='cta-desc'>Subscribe to our newsletter</p>
                <input placeholder='Your email here'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
