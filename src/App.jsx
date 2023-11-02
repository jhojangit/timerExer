import './App.css';
import useOptions from './store/options';
import Options from './components/options/Options';
import Counter from './components/Counter/Counter';
import Finish from './components/finish/Finish';


function App() {


    const { 
      timeWork,
      timeRest,
      rounds,
      currentRound,
      isWork,
      isRest,
      start,
      isFinish
      } = useOptions()


  return (
    <div className="app">

      <h1 className='app__title'>TimerExer</h1>

      {
        !start && isFinish &&  <Finish/> 
      }

      {
        !start && !isFinish&& <Options />
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
