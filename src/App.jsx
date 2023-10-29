import React, { useState, useEffect } from 'react';
import './App.css';
import useOptions from './store/options';
import Options from './components/options/Options';
import Counter from './components/Counter/Counter';
import Complete from './components/complete/complete';



function App() {


  const { timeWork } = useOptions()
  const { timeRest } = useOptions()
  const { rounds } = useOptions()
  const { isWork } = useOptions()
  const { isRest } = useOptions()
  const { start } = useOptions()




  return (
    <div className="App">

      {
        !start && <Complete/>
      }

      {
        !start && <Options />
        
      }


      {
        start && isWork && !isRest &&
        <Counter
          time={timeWork}
          timeWork={timeWork}
          timeRest={timeRest}
          title={"WORK"} />
      }

      {
        start && !isWork && isRest &&
        <Counter
          time={timeRest}
          timeWork={timeWork}
          timeRest={timeRest}
          title={"REST"} />
      }
    </div>
  );
};

export default App;
