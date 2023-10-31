import React, {useState} from 'react'
import './options.css'
import useOptions from '../../store/options'


const Options = () => {

  const { setTimeWork, setTimeRest, setRounds, setIsWorkTrue, setStartTrue } = useOptions()

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

    if (timeSetNumber != 0 && timeSetNumber != 0 && roundsNumber != 0) {
      setIsWorkTrue()
      setStartTrue()
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
    <div>

      <h2>OPTIONS</h2>


      <form onSubmit={handleOptions}>


        <p>Time to work</p>
          <button onClick={handleDecrementWork}>-</button>
            <input
              type="number"
              id='timeWorkNumber'
              value={valueWork}
              onChange={handleInputChangeWork}
              className="no-spin-buttons" 
            />
          <button onClick={handleIncrementWork}>+</button>


          <p>Time to rest</p>
          <button onClick={handleDecrementRest}>-</button>
            <input
              type="number"
              id='timeSetNumber'
              value={valueRest}
              onChange={handleInputChangeRest}
              className="no-spin-buttons" 
            />
          <button onClick={handleIncrementRest}>+</button>


          <p>Rounds</p>
          <button onClick={handleDecrementRounds}>-</button>
            <input
              type="number"
              id='roundsSetNumber'
              value={valueRounds}
              onChange={handleInputChangeRounds}
              className="no-spin-buttons" 
            />
          <button onClick={handleIncrementRounds}>+</button>


        <input type="submit" value="SEND" />
      </form>
    </div>
  )
}

export default Options