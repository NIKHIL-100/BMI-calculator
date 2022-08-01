import React, { useState } from "react";
import './index.css';

function App() {

  // State
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [output, setoutput] = useState('')

  let calcBmi = (event) => {
    //prevent from submiting to server
    event.preventDefault()  

    if(weight === 0 || height ===0)
    {
      alert('please enter valid weight & height')
    }
    else{
      let bmi = (weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))

  

      //show message
      if(bmi < 25)
      {
        setoutput('Your BMI is: ' )
        setMessage('Your underweight')
      }
      else if(bmi >= 25 && bmi <= 30)
      {
        setoutput('Your BMI is: ')
        setMessage('Your Healthy')
      }
      else {
        setoutput('Your BMI is: ')
        setMessage('Your overweight')
      }
    }
  }


  //show img based on bmi
  let imgSrc ;


  if(bmi< 1){
    // imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEKqrPaG_AR6OzLgIZg3UaPSbLsYVFHUJiw&usqp=CAU'
    imgSrc='null'
  }
  else { 
    if(bmi < 25){
    imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8TLpI6I1YB4BX8oVA7eZ2EhVe4SJSV5Pvw&usqp=CAU'
    }
    else if(bmi >= 25 && bmi <=30)
    {
      imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKfqsVTQSVZLvE8u9P9LvdGTqK7L2hc9Htw&usqp=CAU'
    }
    else {
      imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Humb2NFYVJjjr3BtUD6ugxGK8nwo33b5_g&usqp=CAU'
    }
  }
 



  let reload = () => {
    window.location.reload()
  }

  return (
    <div class="app">
      <div className='container'>
        <h2 className='center'> BMI CALCULATOR</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label><b>Weight (Kg)</b> </label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label> <b>Height (cm)</b></label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn btn-grad" type="submit"> Submit </button>
            <button className="btn btn-outline" onClick={reload} type="submit"> Reload</button>
          </div>
        </form>


          <div className="center">
            {/* <h3 >Your BMI is: {bmi} </h3> */}
            <h3> {output}{bmi} </h3>
            <p> {message} </p>
          </div>

          <div className="img-container">
            <img src={imgSrc} alt=""></img>
          </div>
        
      </div>
    </div>
  );
}

export default App;
