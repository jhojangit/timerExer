import './App.css';
import useOptions from './store/options';
import Options from './components/options/Options';
import Counter from './components/Counter/Counter';
import Finish from './components/finish/Finish';
import Precount from './components/preCount/Precount';


function App() {


    const { 
      timeWork,
      timeRest,
      rounds,
      currentRound,
      isWork,
      isRest,
      start,
      isFinish,
      preCount
      } = useOptions()


  return (
    <div className="app">

      <h1 className='app__title'>TimerExer</h1>

      {
        !start && isFinish &&  <Finish/> 
      }

      {
        !start && !isFinish&& !preCount&& <Options />
      }

      {
        preCount && <Precount/>
      }


      {
        start && isWork && !isRest && !preCount &&
        <Counter
          time={timeWork}
          timeWork={timeWork}
          timeRest={timeRest}
          title={"WORK"} />
      }

      {
        start && !isWork && isRest && !preCount &&
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
