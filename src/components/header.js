import React,{ Component} from 'react';
import '../css/tailwind.css';
import  profileImage from '../images/profile.png';
class Header extends Component{
render(){
         return(   
 <div className="md:flex">
            <div className="mt-3 ml-5" style={{ marginRight: '8rem', marginTop: '2rem', marginLeft: '3rem' }}>       
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
             <div class=" md:template sm:template" style={{marginBottom:  '2rem'}}>
             <select class="md:hidden" style={{marginTop: '2rem' ,marginBottom: '-5rem' ,marginLeft: 'rem'}}>
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
                 <div classNameName=" mt-3" style={{marginLeft: '3rem', marginTop: '2rem' , marginBottom: '3rem'}}>
            <h1 className="" style={{fontWeight: '500'}} >MY PROFILE</h1>
            <div className="border w-32 md:w-64 lg:w-2/3" style={{ marginTop: '0.5rem', borderColor: 'black'}}>
           </div>
                     
                     <div className="md:flex" style={{marginRight:'5rem'}}>
                         <div className="mt-3 mb-5">
                     <div className="mt-1" style={{fontweight: '600', marginright: '12rem' ,width: 'auto'}}><b>ACCOUNT INFORMATION</b></div>
    
                            <div className=" mt-1" style={{fontWeight: '500',  fontSize: '0.9rem'}}><b>Name</b>: Adebayo Oluwafemi</div> 
            <div className=" mt-1" style={{fontWeight: '500',  fontSize: '0.9rem'}}><b>Email</b>: femi.adebayo1998@gmail.com</div>
            <div className=" mt-1" style={{fontWeight: '500',   fontSize: '.9rem'}}><b>Phone Number</b>: 09076526958</div>
            <div className=" mt-1" style={{fontWeight: '500',  fontSize: '.9rem'}}><b>Date of Birth</b>: 2nd june 1998</div>
            <div className=" mt-1" style={{fontWeight: '500',  fontSize: '.9rem'}}><b>Date Registered</b>: Dec 6 2019</div>
                 </div> 
                  
            <div className="mt-3 " style={{marginRight: '2rem'}}><b>SHIPPING INFORMATION</b><br />No Shipping Address has been added.</div> 
                         
                         
                     
             </div>
                     <div className="md:flex tope">
                     <div className="border" style={{width: '20rem',borderColor: 'black',  marginTop: '4rem', marginRight: '4rem'}}></div>
                     <div className="border" style={{width: '20rem', borderColor: 'black',marginTop: '4rem',marginRight: '4rem'}}></div>
                     </div>
                     <div className="border mb-5" style={{width: '3.5rem',  height: '3rem' , marginTop: '1rem',  marginLeft: 'rem',  marginRight: '53rem', backgroundColor:  '#ec268f', borderRadius: '0.5rem', marginBottom: '9rem', fontSize: '1.05rem'}}>
            <button style={{paddingTop: '0.7rem',  paddingLeft: '0.8rem',  color:'#fff'}}>Edit</button>
            </div>
                </div>
            
            </div>


         
        
        
        )
    }
}

export default Header;