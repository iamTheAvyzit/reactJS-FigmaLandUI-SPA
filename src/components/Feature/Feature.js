import React from 'react'
import { Browser, Menu } from '../imports'
import './Feature.css'

const SideMenu = () => {
    return (
        <div className='list'>
            <img src={Menu}/>
            <p className='list-heading'>At your fingertips</p>
            <p className='list-desc'>FigmaLand helps you see how many more days you need to work to reach your financial goal. </p>
        </div>
    )
}

export const Feature = () => {
    return (
        <div className='feature' id='prdct'>
            <div className='feature-top-group'>
                <p className='feature-before'>At your fingertips</p>
                <p className='feature-heading'>Features</p>
                <p className='feature-after'>Most sketch tools are designed for teams. FigmaLand is designed for freelancers</p>
            </div>
            <div className='feature-mid-group'>
                <img className='browser' src={Browser}/>
                <div className='feature-side-menu'>
                    <SideMenu/>
                    <SideMenu/>
                </div>
            </div>
            <div className='feature-bottom-group'>
                <p className='feature-before'>At your fingertips</p>
                <p className='feature-heading'>Amazing fast prototyping</p>
                <p className='feature-after'>Most sketch tools are designed for teams. FigmaLand is designed for freelancers</p>
                <button className='buynow'>Buy now</button>
                <button className='tryfree'>Try for free</button>
            </div>
        </div>
    )
}
