import React from 'react';
import ReactDOM from 'react-dom';


//COMPONENTS
import Header from './components/header'
import CorporatePricing from './components/corporatepricing'

function App(){
    return <div>
    
   {/* <Header/> */}
    <CorporatePricing/>
    </div>
}
ReactDOM.render(<App/>,document.getElementById('root'));