import React, { useState } from 'react'
import './options.css'
import useOptions from '../../store/options'


const Options = () => {

  const { setTimeWork, setTimeRest, setRounds, setIsWorkTrue, setStartTrue, setPrecountTrue } = useOptions()

  const [valueWork, setValueWork] = useState(0);
  const [valueRest, setValueRest] = useState(0);
  const [valueRounds, setValueRounds] = useState(0);


  const handleOptions = (e) => {
    e.preventDefault()

    const timeWorkNumber = e.target.timeWorkNumber.value
    const timeSetNumber = e.target.timeSetNumber.value
    const roundsNumber = e.target.roundsSetNumber.value

    setTimeWork(timeWorkNumber)
    e.target.timeWorkNumber.value = ""

    setTimeRest(timeSetNumber)
    e.target.timeSetNumber.value = ""

    setRounds(roundsNumber)
    e.target.roundsSetNumber.value = ""

    if (timeSetNumber > 0 && timeSetNumber > 0 && roundsNumber > 0) {
      setPrecountTrue()
    }
  }

  const handleIncrementWork = (e) => {
    e.preventDefault()
    setValueWork(valueWork + 1);
  };

  const handleDecrementWork = (e) => {
    e.preventDefault()
    setValueWork(valueWork - 1);
  };

  const handleIncrementRest = (e) => {
    e.preventDefault()
    setValueRest(valueRest + 1);
  };

  const handleDecrementRest = (e) => {
    e.preventDefault()
    setValueRest(valueRest - 1);
  };

  const handleIncrementRounds = (e) => {
    e.preventDefault()
    setValueRounds(valueRounds + 1);
  };

  const handleDecrementRounds = (e) => {
    e.preventDefault()
    setValueRounds(valueRounds - 1);
  };




  const handleInputChangeWork = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValueWork(newValue);
  };

  const handleInputChangeRest = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValueRest(newValue);
  };

  const handleInputChangeRounds = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValueRounds(newValue);
  };


  return (
    <section className='options'>



      <form className='options__form' onSubmit={handleOptions}>

        <section className='options__section'>
          <p className='options__section--name'>Seconds to work</p>
          <button className='options__section--btn' onClick={handleDecrementWork}>-</button>
          <input
            type="number"
            pattern='[0-9]'
            max={99}
            min={1}
            id='timeWorkNumber'
            value={valueWork}
            onChange={handleInputChangeWork}
            className="options__section--input no-spin-buttons"
          />
          <button className='options__section--btn' onClick={handleIncrementWork}>+</button>
        </section>

        <section className='options__section'>
          <p className='options__section--name'>Seconds to rest</p>
          <button className='options__section--btn' onClick={handleDecrementRest}>-</button>
          <input
            type="number"
            pattern='[0-9]'
            max={99}
            min={1}
            id='timeSetNumber'
            value={valueRest}
            onChange={handleInputChangeRest}
            className="options__section--input no-spin-buttons"
          />
          <button className='options__section--btn' onClick={handleIncrementRest}>+</button>
        </section>


        <section className='options__section'>
          <p className='options__section--name'>Rounds</p>
          <button className='options__section--btn' onClick={handleDecrementRounds}>-</button>
          <input
            type="number"
            pattern='[0-9]'
            max={99}
            min={1}
            id='roundsSetNumber'
            value={valueRounds}
            onChange={handleInputChangeRounds}
            className="options__section--input no-spin-buttons"
          />
          <button className='options__section--btn' onClick={handleIncrementRounds}>+</button>
        </section>


        <input className='options__section--submit' type="submit" value="START" />
      </form>
    </section>
  )
}

export default Options