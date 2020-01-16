import React from 'react';
import ReactDOM from 'react-dom';


//COMPONENTS
import Header from './components/header'
import Sell from './components/sellonprintivo'

function App(){
    return <div>
    
  <Sell/>
    
    </div>
}
ReactDOM.render(<App/>,document.getElementById('root'));