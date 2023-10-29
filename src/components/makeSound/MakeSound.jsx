import React, { useEffect } from 'react';
import { Howl } from 'howler';



const MakeSound = ({song}) => {
    const sound = new Howl({
        src: [song],
        volume: 0.2, 
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