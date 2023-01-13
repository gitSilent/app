import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentDate ,setCurrentDate] = useState("");


  useEffect(()=>{

    async function toFetch(){
      fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=saint-petersburg&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=UJG657NTLVWXTRGDV5L9H78WB")
      .then((response)=>{
        return response.json()
      })
      .then((res)=>{
        console.log(res)
        let keys = Object.keys(res.locations)
        console.log(keys)
        let curDate = new Date(res.locations[keys[0]].values[0].datetimeStr)
        console.log(curDate)
        console.log(res.locations[keys[0]].values[0].datetimeStr)
        console.log(curDate.getFullYear())
        console.log(curDate.toLocaleString('en-US', { month: 'long' }))
        console.log(curDate.getDate())
  
        setCurrentDate(`${curDate.getDate()} ${curDate.toLocaleString('en-US', { month: 'long' })} ${curDate.getFullYear()}`)
      })
    }

    toFetch()


  },[])

  return (
    <div className="App">
        <p>{currentDate}</p>
    </div>
  );
}

export default App;
