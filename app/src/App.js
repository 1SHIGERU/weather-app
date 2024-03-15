import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [locations, setLocations] = useState(['', '', '', '']);
  const [weatherData, setWeatherData] = useState([null, null, null, null]);

  const handleLocationSearch = async (index) => {
    const location = locations[index];
    if (location.trim() !== '') {
      try {
        const data = await fetchWeatherData(location);
        if (data) {
          const updatedWeatherData = [...weatherData];
          updatedWeatherData[index] = data;
          setWeatherData(updatedWeatherData);
          console.log('Weather data:', data);
        } else {
          // Handle error or display a message
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle error or display a message
      }
    } else {
      // Handle empty location
    }
  };

  const handleLocationChange = (event, index) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = event.target.value;
    setLocations(updatedLocations);
  };
  
  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=072521a76bcf421da5c174329241503&q=${location}&days=1&aqi=no&alerts=no`);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardChange = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

  return (
    <div className="wrapper">
      <div className="container">   
        <div className='card1'>                 
            <input type="radio" className="xD" name="slide" id="c1" checked={selectedCard === 1} onChange={() => handleCardChange(1)}/>                    
            <label htmlFor="c1" className="card">              
               <div className="card_bottom">    
                <div className="row">            
                    <div className="icon">1</div>
                      <div className="description">   
                        <input type="text" placeholder="Enter your location" value={locations[0]} onChange={(event) => handleLocationChange(event, 0)} />
                        <button onClick={() => handleLocationSearch(0)}>Search</button>    
                      </div>
                </div>
                {weatherData[0]?.location?.name || ''}     
               </div>
            </label>
          </div>
          <div className='card2'>
            <input type="radio" name="slide" className="xD" id="c2" checked={selectedCard === 2} onChange={() => handleCardChange(2)} />
            <label htmlFor="c2" className="card">
              <div className="card_bottom">    
                <div className="row">            
                    <div className="icon">1</div>
                      <div className="description">   
                      <input type="text" placeholder="Enter your location" value={locations[1]} onChange={(event) => handleLocationChange(event, 1)} />
                        <button onClick={() => handleLocationSearch(1)}>Search</button>      
                      </div>
                </div>
                {weatherData[1]?.location?.name || ''}
              </div>
            </label>
          </div>
          <div className='card3'>
            <input type="radio" name="slide" className="xD" id="c3" checked={selectedCard === 3} onChange={() => handleCardChange(3)} />
            <label htmlFor="c3" className="card">
              <div className="card_bottom">    
                <div className="row">            
                    <div className="icon">1</div>
                      <div className="description">   
                      <input type="text" placeholder="Enter your location" value={locations[2]} onChange={(event) => handleLocationChange(event, 2)} />
                        <button onClick={() => handleLocationSearch(2)}>Search</button>        
                      </div>
                </div>
                {weatherData[2]?.location?.name || ''}
              </div>
            </label>
          </div>
          <div className='card4'>
            <input type="radio" name="slide" className="xD" id="c4" checked={selectedCard === 4} onChange={() => handleCardChange(4)}/>
            <label htmlFor="c4" className="card">
              <div className="card_bottom">    
                <div className="row">            
                    <div className="icon">1</div>
                      <div className="description">   
                      <input type="text" placeholder="Enter your location" value={locations[3]} onChange={(event) => handleLocationChange(event, 3)} />
                        <button onClick={() => handleLocationSearch(3)}>Search</button>
                          
                      </div>
                </div>
                {weatherData[3]?.location?.name || ''}
              </div>
            </label>
          </div>
        </div>
      </div>
  ); 
}

export default App;
