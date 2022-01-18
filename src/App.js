import {useState} from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);


  function calculate(e) {
    e.preventDefault();
    let alcoholLevel = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10
    let gramsLeft = grams - (burning * time);
    if (gender == 'male') {
      alcoholLevel = gramsLeft / (weight * 0.7)
    } else {
      alcoholLevel = gramsLeft / (weight * 0.6) 
    }
    if (alcoholLevel < 0) {
      alcoholLevel = 0;
    }

    setResult(alcoholLevel);
  }

  return (
    <body>
    <form onSubmit={calculate}>
    <h3>Calculating alcohol blood level</h3>

    <div className="form-group">
    <label>Weight</label>
      <input name="weight" type="number" step="1"
      className="form-control"
      value={weight}
      onChange={e => setWeight(e.target.value)}
      ></input>
    </div>

    <div>
      <label>Bottles</label>
      <input name="bottles" type="number" step="1"
      className="form-control"
      value={bottles}
      onChange={e => setBottles(e.target.value)}
      ></input>
    </div>

    <div>
      <label>Time</label>
      <input name="time" type="number" step="1"
      className="form-control"
      value={time}
      onChange={e => setTime(e.target.value)}
      ></input>
    </div>

    <div>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    
    <div>
      <output className="form-control">{result.toFixed(2)}</output>
    </div>

    <button class="btn btn-dark">Calculate</button>
    </form>
    </body>
    
  );
}

export default App;
