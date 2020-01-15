import React, { Component } from 'react'
import resellerimage from '../images/reseller.png'
import '../css/tailwind.css'
class Reseller extends Component{
    render(){
        return(
            <div className="md:mx-20 mx-8 my-10">
                <div className="md:flex">
                    <div>
                        <img src={resellerimage} alt="reseller" className="md:mr-20 mr-5" />
                        <div  className="mt-5 ml-1">
                        <ul style={{color:'rgb(68, 68, 68)'}}>
                           <li>✔  Ship directly to your customers nationwide</li>
                           <li>✔  Free sample pack when you join</li>
                           <li>✔  Special resellers exclusive deals</li>
                           <li>✔  Dedicated account executive</li>
                        </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl text-center mb-2 md:mt-0 mt-5 font-medium" style={{color:'rgb(68, 68, 68)'}}>Request to Join the program</h1>
                    <div className="border h-auto md:w-7/10 w-2/10">
                     <div className="md:flex flex-wrap mx-8 md:mt-8">
                         <div className="mr-3 mt-3 ">
                     <label for="firstname" className="font-medium " style={{color:'rgb(68, 68, 68)'}}  >FirstName</label><br/>
                    <input type="text" value="" placeholder="Firstname" required className="border mt-2 rounded pl-3 md:w-64 w-full"  style={{height:'2rem'}}/>
                    </div>
                    <div className="mt-3">
                     <label for="lastname" className="font-medium" style={{color:'rgb(68, 68, 68)'}} >LastName</label><br/>
                    <input type="text" value="" placeholder="Lastname" required className="border mt-2 rounded pl-3 md:w-64 w-full"  style={{height:'2rem'}}/>
                    </div>
                     </div>
                     <div className="ml-8 mt-3 md:mr-8 mr-10">
                     <label for="firstname" className="font-medium" style={{color:'rgb(68, 68, 68)'}} >Email Address</label><br/>
                    <input type="text" value="" placeholder="Email Address" required className="border mt-1 rounded pl-3 w-full "
                    style={{
                    height:'2rem'}}/>
                    </div>
                    <div className="ml-8 mt-3 md:mr-8 mr-10">
                     <label for="firstname" className="font-medium"style={{color:'rgb(68, 68, 68)'}}  >Phone Number</label><br/>
                    <input type="text" value="" placeholder="phone number" required className="border mt-1 rounded pl-3  w-full "  style={{height:'2rem'}}/>
                    </div><br/>
                    <div className="ml-8 mt-2 md:mr-8 mr-10">
                   <label className="font-medium" style={{color:'rgb(68, 68, 68)'}}>Monthly-stipend:</label><br/>
                    <select className="  border rounded-lg w-full" style={{height: '2rem',marginBottom:'0.5rem'}}>
                      <option value="text" style={{color:'rgb(68, 68, 68)'}}>#10,000-#50,000</option>
                      <option value="text" style={{color:'rgb(68, 68, 68)'}}>#50,000-#100,000</option>
                      <option value="text" style={{color:'rgb(68, 68, 68)'}}>#100,000-#150,000</option>
                       <option value="text" style={{color:'rgb(68, 68, 68)'}}>#150,000-#200,000</option>
                    </select>
                    </div>
                    <div className="text-center">
                        <p className="text-1xl font-medium" style={{color:'rgb(68, 68, 68)'}}><span className="line-through">#20,000.00</span>    for 12 months
                         </p>
                        <p className="text-xs">Free till June 30th, 2021</p>
                    </div>
                    <div className="flex justify-center mt-3">
              <button className="border  h-10 rounded mb-5" style={{ backgroundColor: 'rgb(0, 179, 242)', color: 'white',width:'7rem' }}>
                <span><b>SIGN UP</b></span>
              </button>
            </div>
            </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-3xl mt-8" style={{color:"#ec268f"}}>What Resellers Say</h1>
                </div>
                <div className="md:flex">
               <div className="mt-5 md:mr-8 mr-3">
                   <p className="text-center" style={{color:'rgb(68, 68, 68)'}}>Printing and shipping to my clients is no longer a<br/>
                    concern. I now focus on my designs and just order<br/>
                     <span className="ml-5" style={{color:'rgb(68, 68, 68)'}}>on Printivo to ship directly to clients.</span><br/>
                   <span className="ml-5" style={{color:'rgb(68, 68, 68)'}}><b>- Ayomidotun Ifadeyi, Graphic Artist</b></span></p>
               </div>
               <div className="mt-5 md:mr-8 mr-3" style={{color:'rgb(68, 68, 68)'}}>
                   <p className="text-center"style={{color:'rgb(68, 68, 68)'}}>I can focus on the core of my business which is<br/>
                    event planning and just print and ship gift items to<br/>
                    <span  className="ml-5" style={{color:'rgb(68, 68, 68)'}}> my clients directly without Printivo's branding</span><br/>
                     <span className="ml-10" style={{color:'rgb(68, 68, 68)'}}><b>- Toun Komaiya, Event planner</b></span></p>
               </div>
               <div className="mt-5 ">
                   <p className="text-center" style={{color:'rgb(68, 68, 68)'}}>I can focus on the core of my business which is<br/>
                    event planning and just print and ship gift items to<br/>
                    <span  className="ml-5" style={{color:'rgb(68, 68, 68)'}}> my clients directly without Printivo's branding</span><br/>
                     <span className="ml-10" style={{color:'rgb(68, 68, 68)'}}><b>- Toun Komaiya, Event planner</b></span></p>
               </div>
                </div>
            </div>
        )
    }
}
export default Reseller;