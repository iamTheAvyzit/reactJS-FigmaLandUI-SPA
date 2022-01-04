import React from 'react'
import { Logo, Mac } from '../imports'
import './Header.css'

export const Header = () => {

    return (
        <div className='header' id='home'>
            <div className='navbar'>
                <img className='logo' src={Logo}/>  
                <a href='#home'>Home</a>
                <a href='#prdct'>Product</a>
                <a href='#pric'>Pricing</a>
                <a href='#abt'>About</a>
                <a href='#cntct'>Contact</a>
                <input className='email' type='email' placeholder='Your email here'/>
                <button>Subscribe</button>
            </div>
            <div className='header-group'>
                <p className='header-before'>At your fingertips</p>
                <p className='header-heading'>Lightning fast prototyping</p>
                <p className='header-after'>Most sketch tools are designed for teams. FigmaLand is designed for freelancers</p>
                <button>Try For Free</button>
                <img className='mac' src={Mac}/>
            </div>
        </div>
    )
}
