import './App.css';
import Summary from './Components/summary/summary';
import Result from './Components/result/result';

function App() {
  return (
    <div className="app__container">
      <Result
      score={76}
      remark={"Great"}
      description={"You scored higher than 65% of the people who have taken these tests."}
      />
      <Summary />
    </div>
  );
}

export default App;
