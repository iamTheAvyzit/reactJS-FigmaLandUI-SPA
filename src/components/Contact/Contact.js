import React from 'react'
import { fbFill, inFill, MailIcon, Map, MapIcon, MobileIcon, twFill } from '../imports'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact' id='cntct'>
            <p className='contact-header'>Contact Us</p>
            <p className='contact-desc'>Most sketch tools are designed for teams. FigmaLand is designed for freelancers</p>
            <div className='social-icons'>
                <img src={fbFill}/>
                <img src={inFill}/>
                <img src={twFill}/>
            </div>
            <img className='map' src={Map}/>
            <div className='address-icons'>
                <p><img src={MapIcon}/>6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
                <p><img src={MobileIcon}/>(843) 555-0130</p>
                <p><img src={MailIcon}/>willie.jennings@example.com</p>
            </div>
        </div>
    )
}
