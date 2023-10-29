import React, { useState, useEffect } from 'react'
import useOptions from '../../store/options';
import bell from '../../assets/bell.mp3'
import rest from '../../assets/rest.mp3'



const Counter = ({ time, timeWork, timeRest, title }) => {


    const { rounds, 
        setIsWorkFalse, 
        setIsWorkTrue, 
        setIsRestFalse, 
        setIsRestTrue, 
        setRoundsMinus, 
        isWork, 
        isRest, 
        setStartFalse } = useOptions();

    const [seconds, setSeconds] = useState(time);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinish, setIsFinish] = useState(false);

    useEffect(() => {
        let counter;

        if (rounds > 0 && !isPaused) {
            counter = setInterval(() => {
                setSeconds((prevSeconds) => {
                    const newSeconds = prevSeconds - 1;

                    if (newSeconds <= 0) {
                        clearInterval(counter);
                        if (isWork) {
                            setIsRestTrue();
                            setIsWorkFalse();
                        }
                        if (isRest) {
                            let count = rounds - 1;
                            setRoundsMinus(count);
                            setIsRestFalse();
                            setIsWorkTrue();
                        }
                    }
                    return newSeconds;
                });
            }, 1000);
        }

        if (rounds === 0) {
            setIsRestFalse()
            setIsWorkFalse()
            setStartFalse()
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
                <h4>Rounds: {rounds}</h4>
                <h1>{seconds}</h1>
                <button onClick={handlePauseToggle}>
                    {isPaused ? 'Reanudar' : 'Pausar'}
                </button>
            </section>



            {

                isWork &&
                <section>

                    <audio autoPlay>
                        <source src={bell} type="audio/mp3" />
                        Tu navegador no soporta la reproducción de audio.
                    </audio>



                </section>
            }

            {
                isRest &&

                <section>

                    <audio autoPlay>
                        <source src={rest} type="audio/mp3" />
                        Tu navegador no soporta la reproducción de audio.
                    </audio>

                </section>
            }






        </div >
    )
}

export default Counter