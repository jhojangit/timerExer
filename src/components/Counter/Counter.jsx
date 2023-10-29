import React, { useState, useEffect } from 'react'
import useOptions from '../../store/options';
import bell from '../../assets/bell.mp3'
import rest from '../../assets/rest.mp3'
import CompleteCircuit from '../completeCircuit/CompleteCircuit';



const Counter = ({ time, title }) => {
    


    const { rounds, 
        setIsWorkFalse, 
        setIsWorkTrue, 
        setIsRestFalse, 
        setIsRestTrue, 
        setRoundsMinus, 
        isWork, 
        isRest, 
        setStartFalse,
        setFinish } = useOptions();

    const [seconds, setSeconds] = useState(time);
    const [isPaused, setIsPaused] = useState(false);















    useEffect(() => {

        let counter;

        if (rounds > 0 && !isPaused) {


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
            setFinish()
        }

        return () => clearInterval(counter);
    }, [isPaused]);


    const handlePauseToggle = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };

    const handleFinish = () => {
        setFinish()
    };




    const workSong = 'src/assets/bell.mp3'
    const restSong = 'src/assets/rest.mp3'




    return (
        <div>
            <h1>{title}</h1>

            <section className="work__interface">
                <h4>Rounds: {rounds}</h4>
                <h1>{seconds}</h1>
                <button onClick={handlePauseToggle}>
                    {isPaused ? 'Reanudar' : 'Pausar'}
                </button>

                <button onClick={handleFinish}> Finish here</button>

                
            </section>



            {

                isWork &&
                <section>
                    <CompleteCircuit song={workSong}/>
                </section>
            }

            {
                isRest &&

                <section>

                <CompleteCircuit song={restSong}/>


                </section>
            }


        </div >
    )
}

export default Counter