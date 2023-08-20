
import './App.css';
import CurentWeater from './components/current-weate/current-weather';
import Search from './components/search/search';
import { WEATHER_API_URL,WEATHER_API_KEY } from './components/search/api';
import { useState } from 'react';
import Forcecast from './components/forcecast/forcecast';

function App() {
  
  const [currentWeater, setCurrentWeater] = useState(null);
  const [forcecast, setForcecast] = useState(null);
  
  const handleOnSearchChange = (searchData)=>{
   
    const [lat,lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forcecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`); 
    
    Promise.all([currentWeatherFetch, forcecastFetch] )
     .then(async(response)=>{
       const weatherResponse = await response[0].json();
       const forcecastResponse =  await response[1].json();
       setCurrentWeater({city: searchData.label , ...weatherResponse})
       setForcecast({ city: searchData.label, ...forcecastResponse})
       
      })
      .catch((err)=> console.log(err));
  }
  
  console.log(currentWeater);
  console.log(forcecast); 
 
  return (
    <div className="App">
    
      <Search  onSearchChange={handleOnSearchChange}/>
     { currentWeater && <CurentWeater data={currentWeater}/>}
     { forcecast && <Forcecast data={forcecast}/>}
   
   
   
   
   </div>
  
  
  
  );


}

export default App;
