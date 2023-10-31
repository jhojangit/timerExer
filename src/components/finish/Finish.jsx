import React from 'react'
import MakeSound from '../makeSound/MakeSound'
import useOptions from '../../store/options'


const Finish = () => {

    const { setFinishFalse } = useOptions()


    setTimeout(() => {
        setFinishFalse()
    }, "3000")

    
    return (
        <div>
            <h1>END</h1>
            <MakeSound music={"/complete.mp3"} />
        </div>
    )
}

export default Finish