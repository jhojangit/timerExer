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


      console.log(timeWork);
      console.log(timeRest);
      console.log(rounds);
      console.log(currentRound);
      console.log(isWork);
      console.log(isRest);
      console.log(start);
      console.log(isFinish);
      
  return (
    <div className="App">

      {
        !start && isFinish &&  <Finish/> 
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
