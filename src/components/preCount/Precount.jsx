import React, { useState, useEffect } from 'react'
import "./precount.css"
import useOptions from '../../store/options'
import MakeSound from '../makeSound/MakeSound'





const Precount = () => {

    const {
        setIsWorkTrue,
        setStartTrue,
        setPrecountFalse

    } = useOptions()


    const [contador, setContador] = useState(5);


    useEffect(() => {
        const interval = setInterval(() => {
            setContador((prevContador) => prevContador - 1);

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []); 

    if(contador < 1){
        setPrecountFalse()
        setIsWorkTrue()
        setStartTrue() 
    }


    return (
        <div className='precount'>
            <p className='precount__text'>fight in</p>
            <p className='precount__count'>{contador}</p>

            <MakeSound music={"/precount.mp3"}/>
        </div>
    );
}

export default Precount