import React from 'react'
import './Pricing.css'

export const Pricing = () => {
    return (
        <div className='pricing' id='pric'>
            <div>
                <p className='pricing-header'>Pricing</p>
                <p className='pricing-desc'>FigmaLand helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
            </div>
            <div className='pricing-list'>
                <p>30 - Days Free Trial</p>
                <p className='price'>$10</p><p className='month'>/ Month</p>
                <p>Most sketch tools are designed for teams. </p>
                <button>Start Free Trial</button>
            </div>
        </div>
    )
}
