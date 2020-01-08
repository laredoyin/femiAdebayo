import React, { Component} from 'react';
import '../css/tailwind.css';
import profileImage from '../images/profile.png';


class Wallet  extends Component{
    render(){
        return(
            <div className="md:flex">
            <div className="mt-3 ml-1" style={{ marginRight: '0rem', marginTop: '2rem', marginLeft: '3rem' }}>       
    <img src ={profileImage}style={{width: '25%', borderRadius: '10rem'}} />
            
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
                 <div className=" mt-3" style={{marginLeft: '1rem', marginTop: '3rem' , marginBottom: '3rem'}}>
            <h1 className="ml-10" style={{fontWeight: '500',lineHeight:'2rem',fontSize:'0.8rem'}} >MY WALLET</h1>
            <div className="border w-32 md:w-full ml-10" style={{ marginTop: '0.2rem', borderColor: 'black'}}></div>
            <div className="md:flex mr-5 mt-10" style={{}}>
            <div className="border mt-5 rounded-lg pl-8 font-mono mr-8 ml-10 pt-1" style={{width:'12rem',height:'3.5rem',backgroundColor:' #ec268f',color:'#fff'}}><span className="text-center ml-8">₦0.00</span><br/>
             MONEY AVAILABLE</div>
             <div className="border mt-5 rounded-lg pl-8 font-mono mr-8 ml-10 pt-1" style={{width:'12rem',height:'3.5rem', backgroundColor:' #ec268f',color:'#fff'}}><span className="text-center ml-8">₦0.00</span><br/>
             MONEY ADDED</div>
            <div className="border mt-5 rounded-lg pl-8 font-mono mr-8 ml-10 pt-1" style={{width:'12rem',height:'3.5rem', backgroundColor:' #ec268f',color:'#fff'}}><span className="text-center ml-8">₦0.00</span><br/>
             MONEY SPENT</div>
             </div>  
            <div className="mt-20 md:text-center ml-10" style={{ marginLeft:'',fontSize:'1.5rem',color:'grey'}}>No activity yet</div>   
                   
              <div className="border  md:w:1/3 mt-20 font-mono px-8 py-3" style={{width:'60rem', height:'4rem',backgroundColor:'#dae1e7'}}>Earn up to ₦1,000 in your Wallet every time you refer someone new to Printivo. <span className="" style={{color:'#209fed'}}>Learn how it works .</span></div>     
                </div>
            
            </div>
            

                 
                 

                 
                 

        )
    }
}

export default Wallet;