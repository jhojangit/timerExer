import './App.css';
import useOptions from './store/options';
import Options from './components/options/Options';
import Counter from './components/Counter/Counter';
import MakeSound from './components/makeSound/MakeSound';


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
        !start && <MakeSound music={"/complete.mp3"}/>
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
