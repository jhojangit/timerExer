import React from 'react'
import MakeSound from '../makeSound/MakeSound'
import useOptions from '../../store/options'
import "./finish.css"


const Finish = () => {

    const { setFinishFalse } = useOptions()


    setTimeout(() => {
        setFinishFalse()
    }, "4000")

    
    return (
        <div className='finish'>
            <h3 className='finish__text'>Congratulations! You've completed your workout! <br /> <br /> GREAT JOB! 💪👏</h3>
            <MakeSound music={"/complete.mp3"} />
        </div>
    )
}

export default Finish