import React, {Component } from 'react';
import '../css/tailwind.css';
import profileImage from '../images/profile.png'
class Address extends Component{
render(){
   
    return(
        <div className="md:flex">
            <div className="mt-3 ml-5" style={{ marginRight: '8rem', marginTop: '2rem', marginLeft: '3rem' }}>       
    <img src ={profileImage}  alt = 'image' style={{width: '25%', borderRadius: '10rem'}} />
            
            <h1 className="mt-3" style={{fontSize: '0.8rem'}}><b>Adebayo Oluwafemi</b></h1>
            <div className="border" style={{width: '15rem', borderColor: 'black', marginRight: '3rem',marginTop: '1rem'}}></div>
            <div className="hidden md:block">
           <a href="profile2.html" style={{color:'#ec268f',fontWeight: '600', lineHeight: '2rem' , fontSize: '0.8rem'}}>PROFILE</a><br/>
            
             <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>ADDRESSES</a><br/>
            <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>MY WALLET</a><br/>
             <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>REWARD</a><br/>
             <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>ORDER HISTORY</a><br/>
            <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>SAVED DESIGNS</a><br/>
             <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>DESIGN REQUEST</a><br/>
            <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>CHANGE PASSWORD</a><br/>
             <a href="/" style={{fontWeight: '600', lineHeight: '2rem', fontSize: '0.8rem'}}>SET UP STORE</a><br/>
             </div>
             <div className=" md:template sm:template" style={{marginBottom:  '2rem'}}>
             <select className="md:hidden" style={{marginTop: '2rem' ,marginBottom: '-5rem' ,marginLeft: 'rem'}}>
                 <option value="profile" href="profile.html" >PROFILE</option>
                       <option value="address" href="address.html" >ADDRESS</option>
                       <option value="wallet" href="" >MY WALLET</option>
                       <option value="reward" href="" >REWARD</option>
                       <option value="order-history" href="order%20history.html" >ORDER HISTORY</option>
                       <option value="saved-design" href="" >SAVED DESIGN</option>
                       <option value="design-request" href="" >DESIGN REQUEST</option>
                  <option value="change-pass" href="password.html" >CHANGE PASSWORD</option>
                       <option value="change-request" href="" >CHANGE REQUEST</option>
                       <option value="set-up-store" href="" >SET UP STORE</option>
                 </select>
             </div>
            </div>
                 <div className=" mt-3" style={{marginLeft: '3rem', marginTop: '2rem' , marginBottom: '3rem'}}>
            <h1 className="" style={{fontWeight: '600',lineHeight:'2rem',fontSize:'0.8rem'}} >ADDRESSES</h1>
            <div className="border w-32 md:w-64 lg:w-2/3" style={{ marginTop: '0.3rem', borderColor: 'black'}}>
           </div>
                     
                     <div className="md:flex" style={{marginRight:'5rem'}}>
                         <div className="mt-3 mb-5">
                         <button className="borderm mt-5 rounded pb-2 mb-5" style={{width:'8rem', height:'2.5rem',color:'#fff',fontWeight:'500',backgroundColor:' #ec268f'}}>Add Address<b style={{fontSize:'1.3rem'}}>+</b> </button>
                     <div className="mt-5 text-center  " style={{fontWeight: '400', marginRight: '12rem' ,width: 'auto',fontSize:'1.5rem', color:'grey'}}><b>You have not added any Addresses.</b></div>
    
                         </div>
             </div>


             </div>
             </div>
                  
    )

}
}


export default Address;