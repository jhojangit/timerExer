import React, { useState } from 'react'
import './options.css'
import useOptions from '../../store/options'
import SelectNumber from '../selectNumber/SelectNumber'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Options = () => {

  const { setTimeWork, setTimeRest, setRounds, setPrecountTrue } = useOptions()



    // Desestructura options y actualiza los estados globales. 
  const handleOptions = (options) => {
    const nWork = options.TimeWork
    const nRest = options.TimeRest
    const nRounds = options.roundsOptions


    setTimeWork(nWork)
    setTimeRest(nRest)
    setRounds(nRounds)

    if (nWork === 0 ) {
      toast("Working time must be greater than 0");
    } 
    if (nRest === 0 ) {
      toast("Rest time must be greater than 0");
    } 
    if (nRounds === 0 ) {
      toast("Rounds must be greater than 0");
    } 



    
    if (nWork > 0 && nRest > 0 && nRounds > 0) {
      setPrecountTrue()
    } 
    return
  }



  // Selección y actualiza el valor de cada opción
  const [workSeconds,   setWorkSeconds]   = useState(0);
  const [workMinutes,   setWorkMinutes]   = useState(0);
  const [restSeconds,   setRestSeconds]   = useState(0);
  const [restMinutes,   setRestMinutes]   = useState(0);
  const [roundsOptions, setRoundsOptions] = useState(0);



  // Convierte los minutos a segundos - agrega los datos a un objeto y lo envía a HandleOptions
  const selected = () => {

    

    const TimeWork = workMinutes * 60 + workSeconds
    const TimeRest = restMinutes * 60 + restSeconds


    const options = {
      TimeWork: TimeWork,
      TimeRest: TimeRest,
      roundsOptions: roundsOptions
    }

    

    handleOptions(options)

  }

;





  return (
    <section className='options'>

          <p className='options__section--name'>Time to Work </p>

        <section className='options__section'>
          <SelectNumber nSelected={setWorkMinutes} time={"min"}/> 
          <SelectNumber nSelected={setWorkSeconds} time={"sec"}/> 
        </section>



          <p className='options__section--name'>Time to rest</p>

        <section className='options__section'>
          <SelectNumber nSelected={setRestMinutes} time={"min"}/> 
          <SelectNumber nSelected={setRestSeconds} time={"sec"}/> 

        </section>



          <p className='options__section--name'>Rounds</p>

        <section className='options__section'>
          <SelectNumber nSelected={setRoundsOptions}/>
        </section>


        <button 
          onClick={selected}
          className='options__section--submit'>
          START
        </button>


        <ToastContainer />
    </section>
  )
}

export default Options