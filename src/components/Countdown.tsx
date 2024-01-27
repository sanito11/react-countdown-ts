import React, { useEffect, useState } from 'react'
import CountdownCard from './CountdownCard'

type DateObject = {
    months: string,
    days: string,
    hours: string,
    minutes: string,
    seconds: string
}

const Countdown = () => {
    const [countdownValue, setCountdownValue] = useState<DateObject>({
        months: "",
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    })

    const dueDate: Date | any = new Date('01-28-2024')

    useEffect(() => {

        const timeInterval = setInterval(() => {
            const currentDate: Date | any = new Date()

            const remainingTime: number = Math.floor((dueDate - currentDate) / 1000)

            const seconds: number = Math.floor(remainingTime % 60)
            const minutes: number = Math.floor(remainingTime / 60 % 60)
            const hours: number = Math.floor(remainingTime / 60 / 60 % 60)
            const days: number = Math.floor(remainingTime / 60 / 60 / 60 % 24)
            const months: number = Math.floor(remainingTime / 60 / 60 / 60 / 24 % 12)


            setCountdownValue({
                months: months.toString(),
                days: days.toString(),
                hours: hours.toString(),
                minutes: minutes.toString(),
                seconds: seconds.toString()
            })
        }, 1000)

        return () => clearInterval(timeInterval)

    }, [])


    return (
        <>
            <CountdownCard timeValue={countdownValue?.months} timeUnit="Months" />
            <CountdownCard timeValue={countdownValue?.days} timeUnit="Days" />
            <CountdownCard timeValue={countdownValue?.hours} timeUnit="Hours" />
            <CountdownCard timeValue={countdownValue?.minutes} timeUnit="Minutes" />
            <CountdownCard timeValue={countdownValue?.seconds} timeUnit="Seconds" />

        </>
    )
}

export default Countdown