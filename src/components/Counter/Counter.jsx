import React, { useState, useEffect } from 'react'
import useOptions from '../../store/options';
import bell from '../../assets/bell.mp3'
import rest from '../../assets/rest.mp3'



const Counter = ({ time, timeWork, timeRest, title }) => {

    
    const { rounds } = useOptions()
    const { setIsWorkFalse } = useOptions()
    const { setIsWorkTrue } = useOptions()
    const { setIsRestFalse } = useOptions()
    const { setIsRestTrue } = useOptions()
    const { setRoundsMinus } = useOptions()
    const { isWork } = useOptions()
    const { isRest } = useOptions()
    const { setStartFalse } = useOptions()
    
    
    

    const [seconds, setSeconds] = useState(time);
    
    useEffect(() => {
        if (rounds > 0) {

            const counter = setInterval(() => {
                setSeconds((prevSeconds) => {
                    const newSeconds = prevSeconds - 1;

                    if (newSeconds <= 0) {

                        clearInterval(counter);
                        if (isWork) {
                            setIsRestTrue()
                            setIsWorkFalse()
                        }

                        if (isRest) {
                            let count = rounds - 1
                            setRoundsMinus(count)
                            setIsRestFalse()
                            setIsWorkTrue()
                        }
                    }

                    return newSeconds;
                });
            }, 1000);
            
            
            return () => clearInterval(counter);
        }
        setStartFalse()
        setIsRestFalse()
        setIsWorkFalse()

    }, []);









    return (
        <div>
            <h1>{title}</h1>

            <section className="work__interface">
                <h4>Rounds:    {rounds}   </h4>
                <h1>{seconds}</h1>
            </section>

            {
                isWork &&
                <audio autoPlay>
                    <source src= {bell} type="audio/mp3" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>
            }

            {
                isRest &&
                <audio autoPlay>
                    <source src={rest} type="audio/mp3" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>
            }

{/* 
            {
                finish && (
                    <div>
                    <h1>You did</h1>
                <audio autoPlay>
                    <source src="public\complete.mp3" type="audio/mp3" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>
                </div>
                    )
            }
 */}


        </div >
    )
}

export default Counter