import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Icon } from '@iconify/react';

const Timer = ({configs, timer, setCurrentTimer, currentTimer}) => {
    const [remainingTime, setRemainingTime] = useState(timer*60)
    const [isPaused, setIsPaused] = useState(true)
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        if(remainingTime !== 0 && !isPaused){
            const timeout = setTimeout(()=> setRemainingTime(prevRemainingTime => prevRemainingTime-1), 1000)
            return () => clearTimeout(timeout)
        } else if (remainingTime === 0) {
            currentTimer === configs.timers.length - 1 ? setIsFinished(true) : setCurrentTimer(currentTimer+1)
        }
    }, [remainingTime, isPaused])

    useEffect(() => {
        setRemainingTime(timer*60)
    }, [currentTimer, configs])

    const handleReset = () => {
        setIsPaused(true)
        setCurrentTimer(0)
        setRemainingTime(timer*60)
        setIsFinished(false)
    }

    return (
        <div className="p-6 rounded-full md:w-96 md:h-96 h-72 w-72 shadow-custom">
            <CircularProgressbarWithChildren 
                value={remainingTime}
                maxValue={timer*60}
                strokeWidth={5} 
                background={true} 
                styles={
                    buildStyles({
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.5,
                        trailColor: "#1E2140",
                        pathColor: configs.color,
                        backgroundColor: "#1E2140",
                    })
                }
            >
                {
                    isFinished ?
                        <>
                            <span className='mb-10 text-4xl text-white md:text-6xl'>Complete</span>
                            <button className='text-3xl text-white transition-all ease-in-out md:text-5xl hover:scale-110' onClick={() => handleReset()}>Reset</button>
                        </>
                    : 
                        <>
                            <span className='mb-10 text-5xl text-white md:text-7xl'>
                                {Math.floor((remainingTime/ 60) % 60).toString().padStart(2, '0')}:{Math.floor(remainingTime % 60).toString().padStart(2, '0')}
                            </span>
                            <button className='text-4xl text-white transition-all ease-in-out md:text-6xl hover:scale-110' onClick={() => setIsPaused(!isPaused)}><Icon icon={`${isPaused ? "ph:play-fill" : "ph:pause-fill"}`}/></button>
                        </>
                }
            </CircularProgressbarWithChildren>
        </div>
    )
}
export default Timer