import React, { useEffect } from 'react';
import { Howl } from 'howler';


const MakeSound = ({music}) => {

    const sound = new Howl({
        src: [music],
        volume: 1.0, 
        preload: true
    });

    useEffect(() => {
            sound.play();
    }, []);



    return (
        <>
        </>
    );
};

export default MakeSound