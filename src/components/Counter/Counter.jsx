import React, { useState, useEffect } from 'react'
import useOptions from '../../store/options';
import MakeSound from '../makeSound/MakeSound';



const Counter = ({ time, title }) => {
    


    const { rounds, 
        setIsWorkFalse,
        setIsWorkTrue, 
        setIsRestFalse, 
        setIsRestTrue, 
        setRoundsPlus,
        setTimeWork,
        setTimeRest, 
        isWork, 
        isRest, 
        currentRound,
        setCurrentRound,
        setRoundsRestart,
        setIsWorkRestart,
        setIsRestRestart,
        setStartFalse,
        isFinish,
        setFinishTrue } = useOptions();

    const [seconds, setSeconds] = useState(time);
    const [isPaused, setIsPaused] = useState(false);


    const handleFinish = () => {
        setFinishTrue()
        setRoundsRestart()
        setIsWorkRestart()
        setIsRestRestart()
        setStartFalse()
        setTimeWork(0)
        setTimeRest(0)
        setCurrentRound(1)
    };




    useEffect(() => {

        let counter;

        if (currentRound <= rounds+1 && !isPaused) {


            counter = setInterval(() => {
                setSeconds((prevSeconds) => {
                    const newSeconds = prevSeconds - 1;

                    if (newSeconds < 0) {
                        clearInterval(counter);
                        if (isWork) {
                            setIsRestTrue();
                            setIsWorkFalse();
                        }
                        if (isRest) {
                            let count = currentRound + 1;
                            setRoundsPlus(count);
                            setIsRestFalse();
                            setIsWorkTrue();
                        }
                    }
                    return newSeconds;
                });
            }, 1000);
        }

        if (currentRound > rounds) {
            handleFinish()
        }

        return () => clearInterval(counter);
    }, [isPaused]);


    const handlePauseToggle = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };






    return (
        <div>
            <h1>{title}</h1>

            <section className="work__interface">
                <h4>Rounds: {currentRound} / {rounds}</h4>
                <h1>{seconds}</h1>
                <button onClick={handlePauseToggle}>
                    {isPaused ? 'Reanudar' : 'Pausar'}
                </button>

                <button onClick={handleFinish}> Finish here</button>
            </section>



            {
                isWork  &&
                <section>
                    <MakeSound music={"/bell.mp3"}/>
                </section>
            }


            {
                isRest &&
                <section>
                    <MakeSound music={"/rest.mp3"}/>
                </section>
            }


        </div >
    )
}

export default Counter