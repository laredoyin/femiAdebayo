import React from 'react';
import ReactDOM from 'react-dom';


//COMPONENTS
// import Header from './components/header'
// import Wallet from './components/mywallet';
// import Application from './application';

import BusinessCard from './components/businesscards'

function App(){
    return <div>
   
   {/* <Header/> */}
   {/* <Wallet/>  */}

   <BusinessCard/>
    </div>
}
ReactDOM.render(<App/>,document.getElementById('root'));