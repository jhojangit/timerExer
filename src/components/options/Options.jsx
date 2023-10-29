import React from 'react'
import './options.css'
import useOptions from '../../store/options'

const Options = () => {

  const { setTimeWork, setTimeRest, setRounds, setIsWorkTrue, setStartTrue } = useOptions()



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


    if (timeSetNumber != 0 && timeSetNumber != 0 && roundsNumber != 0) {
      setIsWorkTrue()
      setStartTrue()
    }

  }




  return (
    <div>

      <h2>OPTIONS</h2>


      <form onSubmit={handleOptions}>
        <label> Time to work
          <input className='options__btn buttonApp'
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="timeWorkNumber"
            id="timeWorkNumber"
            required />
        </label>

        <label> Tiempo to rest
          <input className='options__btn buttonApp'
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="timeSetNumber"
            id="timeSetNumber"
            required />
        </label>

        <label> Rounds
          <input className='options__btn buttonApp'
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="roundsSetNumber"
            id="roundsSetNumber"
            required />
        </label>

        <input type="submit" value="SEND" />
      </form>
    </div>
  )
}

export default Options