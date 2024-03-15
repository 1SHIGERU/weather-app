import './App.css';
import { useState } from 'react';

function App() {

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
                        <input type="text" placeholder="Enter your location" />     
                      </div>
                </div>     
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
                               
                      </div>
                </div>
                xxx
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
                               
                      </div>
                </div>
                xxx
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
                               
                      </div>
                </div>
                xxx
              </div>
            </label>
          </div>
        </div>
      </div>
  );
}

export default App;
