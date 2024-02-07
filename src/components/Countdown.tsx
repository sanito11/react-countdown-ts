import { useEffect, useState } from 'react'
import CountdownCard from './CountdownCard'

type DateObject = {
    years: string,
    months: string,
    days: string,
    hours: string,
    minutes: string,
    seconds: string
}

const Countdown = () => {

    const [countdownValue, setCountdownValue] = useState<DateObject>({
        years: "",
        months: "",
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    })

    let dueDate: Date | any = new Date("01-28-2024")

    useEffect(() => {

        const timeInterval = setInterval(() => {
            const currentDate: Date | any = new Date()

            const remainingTime: number = (dueDate - currentDate)

            if (remainingTime < 1) return clearInterval(timeInterval)

            const remainingSeconds: number = Math.floor(remainingTime / 1000) % 60;
            const remainingMinutes: number = Math.floor(remainingTime / 1000 / 60) % 60;
            const remainingHours: number = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
            const remainingDays: number = Math.floor(remainingTime / 1000 / 60 / 60 / 24) % 30.5;
            const remainingMonths: number = Math.floor(remainingTime / 1000 / 60 / 60 / 24 / 30.5) % 12;
            const remainingYears: number = Math.floor(remainingTime / 1000 / 60 / 60 / 24 / 30.5 / 12);

            setCountdownValue({
                years: remainingYears.toString(),
                months: remainingMonths.toString(),
                days: remainingDays.toString(),
                hours: remainingHours.toString(),
                minutes: remainingMinutes.toString(),
                seconds: remainingSeconds.toString()
            })
        }, 1000)

        return () => clearInterval(timeInterval)

    }, [])


    return (
        <>
            <CountdownCard timeValue={countdownValue?.years} timeUnit="Years" />
            <CountdownCard timeValue={countdownValue?.months} timeUnit="Months" />
            <CountdownCard timeValue={countdownValue?.days} timeUnit="Days" />
            <CountdownCard timeValue={countdownValue?.hours} timeUnit="Hours" />
            <CountdownCard timeValue={countdownValue?.minutes} timeUnit="Minutes" />
            <CountdownCard timeValue={countdownValue?.seconds} timeUnit="Seconds" />

        </>
    )
}

export default Countdown