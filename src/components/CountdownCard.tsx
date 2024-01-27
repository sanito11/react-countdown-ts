import React from 'react'

interface CountdownCardProps {
    timeValue: string,
    timeUnit: string
}

const CountdownCard: React.FC<CountdownCardProps> = (props) => {
    const { timeValue, timeUnit } = props

    return (
        <div className='countdown-card'>
            <span>{timeValue || 0}</span>
            <p>{timeUnit}</p>
        </div>
    )
}

export default CountdownCard