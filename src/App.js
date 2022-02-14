import {useState} from 'react';
import {data} from './data'
import './App.css';

function App() {
  const [imageSelet ,setImageSelect] =useState(data[0].image)
  return (
    <div className="App">
    <h1>Gallery</h1>
    <div className="container">
      <img src ={imageSelet} className="big-image" alt="big" />
      <div className="gallery">
        {data.map((item ,i)=>{
          return (<div className="gallery-all">
            <img 
             key ={i} 
             src ={item.image} 
              className="single"
               alt="single"
               onClick={()=>setImageSelect(item.image)}
                />
            </div>

          )
        })}
        
      </div>

    </div>
    </div>
  );
}

export default App;
