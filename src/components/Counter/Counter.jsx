import React, { useState, useEffect } from 'react'
import useOptions from '../../store/options';
import MakeSound from '../makeSound/MakeSound';
import "./counter.css"



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
        setFinishTrue,
        setIsLastRestTrue,
        setIsLastRestFalse,
        isLast,
        setIsLastTrue,
        setIsLastFalse,
        setIsLastWorktrue,
        setIsLastWorkFalse,
        isLastWork,  
        isLastRest   } = useOptions();

    const [seconds, setSeconds] = useState(time);
    const [isPaused, setIsPaused] = useState(false);
    const [finalTitle, setFinalTitle] = useState("It's the last");


    const handleFinish = () => {
        setFinishTrue()
        setRoundsRestart()
        setIsWorkRestart()
        setIsRestRestart()
        setStartFalse()
        setTimeWork(0)
        setTimeRest(0)
        setCurrentRound(1)
        setIsLastRestFalse()
        setIsLastWorkFalse()
        setIsLastFalse()
    };




    useEffect(() => {

        let counter;



        if (currentRound <= rounds+1 && !isPaused) {


            counter = setInterval(() => {
                setSeconds((prevSeconds) => {
                    const newSeconds = prevSeconds - 1;

                    if(currentRound != rounds){
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
                    }

                    
                    if(currentRound == rounds){
                        setIsLastTrue()
                        if (newSeconds < 0) {
                            clearInterval(counter);
                            if (isWork) {
                                setIsRestTrue();
                                setFinalTitle("Breathe");
                                setIsWorkFalse();
                                setIsLastRestTrue()
                            }
                            
                            
                            if (isRest) {
                                let count = currentRound + 1;
                                setRoundsPlus(count);
                                setIsRestFalse();
                                setIsWorkTrue();
                            }
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
        <main className='counter'>
            {
                !isLast 
                ? <h1 className='counter__title'>¡{title}!</h1>
                : <h1 className='counter__title'>¡{finalTitle}!</h1>
            }



            <section className="counter__interface">
                <h4 className='counter__interface--rounds'>Rounds: {currentRound} / {rounds}</h4>
                <h1 className='counter__interface--seconds'>{seconds}</h1>

                <article className='counter__interface--btns'>
                    <button className='counter__interface--btn' onClick={handlePauseToggle}>
                        {isPaused ? 'Reanudar' : 'Pausar'}
                    </button>

                    <button className='counter__interface--btn' onClick={handleFinish}> Finish </button>
                </article>

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


        </main >
    )
}

export default Counter