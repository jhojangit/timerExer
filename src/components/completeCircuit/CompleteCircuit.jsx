import React, { useEffect } from 'react';
import { Howl } from 'howler';



const CompleteCircuit = ({song}) => {
    const sound = new Howl({
        src: [song],
        volume: 0.5, 
    });

    useEffect(() => {
            sound.play();
    }, []);

    return (
        <>
        </>
    );
};

export default CompleteCircuit;