import React from 'react'
import complete from '../../assets/complete.mp3'

const Complete = () => {
  return (
    <div>
        <audio  autoPlay >
            <source src={complete} type="audio/mp3" />
            Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  )
}

export default Complete