import React, {Component} from 'react'
import '../css/tailwind.css'
import Get1 from '../images/get1.png'
import Get2 from '../images/get2.png'
import Get3 from '../images/get3.png'
import Get4 from '../images/get4.png'
import tomato1 from '../images/tomato1.png'
import tomato2 from '../images/tomato2.png'
import tomato3 from '../images/tomato3.png'
class CorporatePricing extends Component{
    render(){
        return(
            <div>
             <div >
                 <img className="w-full " style={{height:'18rem'}} alt="decorative" src="https://printivo.s3.amazonaws.com/img/woodmark/banner1.png"/>
                 <div className="md:absolute md:-mt-48 -mt-64 ml-16 " style={{ }}>
                     <h1 className="md:text-3xl text-2xl" style={{marginTop:'-5rem'}}><b>Logo Design</b></h1>
                     <p class="mt-1 text-1xl">Let our team of professional graphic designers <br/>design 
                         a stunning and functional logo for 
                         your <br/>business.
                      </p>
            <p className="text-2xl mt-1" style={{color:'#ec268f'}}><b>FOR JUST ₦24,999.00</b>
            </p>
            <div className=" mt-2 ">
            <button className="border md:w-3/5 h-12 rounded-sm text-2xl px-8 mt-1 " style={{ backgroundColor: '#ec268f', color: 'white' }}>
            <span><b>Get Started</b></span>
            </button>
            </div>
                 </div>
             </div>

             <div className="md:flex  md:ml-5  ml-16">
                 <div className="md:mt-20 ml-10 mt-20 mr-5">
                 <p className="ml-20 mb-1 block" style={{color:'#ec268f'}}>Give us your logo brief</p>
                 <p>Provide our graphics design team with relevant <br/>
                 <span className="ml-3">information such as your business details,</span><br/>
                  <span className="ml-5">preferred colour(s) and style of logo.</span>
                  </p>
                 </div>
            <div className="md:mt-20 ml-10 mt-5 mr-5">
                 <p className="ml-20 mb-1 block" style={{color:'#ec268f'}}>Receive Options to review</p>
                 <p>Within 72 hours, You will get 2 different logo <br/>
                  <span className="ml-20">options to pick from.</span>
                  </p>
            </div>
            <div className="md:mt-20 ml-10 mt-5">
                 <p className="ml-20 mb-1 block" style={{color:'#ec268f'}}>Get final artwork</p>
                 <p>Your final Logo will be sent to you in all preferred formats.
                 </p>
            </div>
             </div>
             <div className="border w-full h-auto mt-10 " style={{backgroundColor:'#dae1e7'}}>
                 <h1 className="text-center text-3xl mt-5">What you will get</h1>
                 <div className="md:flex md:ml-5 ml-20">
            <div className="mt-8 ml-10">
                         <img src={Get1} alt="get1"className="ml-3"/>
                         <p className="mt-2 md:text-center md:ml-0 ml-3" style={{color:'#ec268f'}}>2 Logo design Options</p>
                         <p className="">Pick your preferred options from two<br/> <span className="ml-10">designs sent to you.</span></p>
            </div>
            <div className="mt-8 ml-10">
                         <img src={Get2} alt="get1"className="ml-3"/>
                         <p className="mt-2 md:text-center md:ml-0 ml-10 " style={{color:'#ec268f'}}>3 Revisions</p>
                         <p className="">Request up to 3 changes/revisons on<br/> <span className="ml-20">chosen option.</span></p>
            </div>
            <div className="mt-8  ml-10">
                         <img src={Get3} alt="get1"className="ml-5"/>
                         <p className="mt-2 md:text-center md:ml-0 ml-5" style={{color:'#ec268f'}}>4 File formats delivered</p>
                         <p className="">Once your logo is ready, you will receive<br/> <span className="ml-10">it in AI/CDR/PDF/PNG.</span></p>
            </div>
            <div className="mt-8 ml-10">
                         <img src={Get4} alt="get1"className="ml-10"/>
                         <p className="mt-2 md:text-center md:ml-0 ml-20" style={{color:'#ec268f'}}>Fast Turnaround</p>
                         <p className="">You will receive your first design within<br/> <span className="">You will receive your first design within.</span></p>
                     </div>
            </div>
            <div className=" mt-2 ">
              <button className="border  h-12 rounded-sm text-2xl px-8 mt-5 mb-10 mt-10 " style={{ backgroundColor: '#ec268f', color: 'white',marginLeft:'36%' }}>
                <span><b>Get Started</b></span>
              </button>
            </div>
             </div>
             <div>
                 <h1 className="text-center text-2xl mt-8 md:-ml-40">Order Your Logo Design</h1>
                 <div className="border md:w-1/2  md:ml-64 ml-16 md:mr-0 mr-16 h-auto" style={{ borderColor:'#01b0f0'}}>
                 <p className="mt-5 ml-8"><b>What Type of Logo Do You Prefer</b></p>
                 <p className="ml-8">Choose the type of logo which is suitable for your business.</p>
                 <div className="flex flex-wrap">
            <div>
             <img src={tomato1} alt="tomato1" className="md:w-32 w-16 mt-3 ml-5" style={{}}/>
                    <input type="radio" name="gender" value="male"  className="ml-5 mt-2"/><span className="ml-2" style={{color:'#ec268f',fontSize:'0.8rem'}}><b>Icon only Logo</b></span>
                     <p className="ml-5 text-sm" style={{fontSize:'0.7rem'}}>I want my logo to be an image, icon or<br/> a shape.</p>
            </div>
            <div>
                     <img src={tomato2} alt="tomato1" className="md:w-32 w-16 mt-3 ml-5" style={{}}/>
                     <input type="radio" name="gender" value="male"  className="ml-5 mt-2"/><span className="ml-2" style={{color:'#ec268f',fontSize:'0.8rem'}}><b>Icon only Logo</b></span>
                     <p className="ml-5 text-sm" style={{fontSize:'0.7rem'}}>I want my logo to be an image, icon or<br/> a shape.</p>
                     </div>
                     <div>
                     <img src={tomato3} alt="tomato1" className="md:w-32 w-16 mt-3 ml-5" style={{}}/>
                     <input type="radio" name="gender" value="male"  className="ml-5 mt-2"/><span className="ml-2" style={{color:'#ec268f',fontSize:'0.8rem'}}><b>Icon only Logo</b></span>
                     <p className="ml-5 text-sm" style={{fontSize:'0.7rem'}}>I want my logo to be an image, icon or<br/> a shape.</p>
                     </div>
            </div>
            <div>
                      <p className="mt-8 ml-5"><b>Select Logo Style</b></p>
                      <p className="ml-5" style={{fontSize:'0.7rem'}}>Choose a style that best describes your business</p>
            <div className="flex flex-wrap">
                          <div className="mr-8 mt-3">
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>conservative</b></div>
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Simple</b></div>
                              <div><input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Vintage</b></div>
                              <div><input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Abstract</b></div>
                          </div>
                          <div className="mr-8 mt-3">
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Playful</b></div>
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Complex</b></div>
                              <div><input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Artistic</b></div>
                         </div>
                 <div className="mr-8 mt-3">
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>professional</b></div>
                             <div> <input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Luxury</b></div>
                              <div><input type="radio" className="ml-5 mt-2 mr-1"  /><b style={{color:'#ec268f'}}>Nature</b></div>
                </div>
            </div>
            </div>
            <form>
                <div className="ml-5 mt-5">
                  <label for="fname" className="mt-3"><b>Tell us your preferred color(s)</b></label><br/>
    <input type="text" id="fname" name="color" placeholder="" required  className="border"  style={{width:'18rem'}}/><br/>
      <div className="mt-3">
          <label className="mt-3"><b>Logo Inspiration</b></label>
          </div >
                <p className=""style={{fontSize: '0.7rem',fontWeight: '500'}}><b>Attach an image that inspires your logo idea.</b></p>
       <input type="file" name="myFile" style={{marginTop: '1rem',marginBottom: '1rem'}} required className="border" style={{width:'18rem'}}/><br/>
<label for="lname" className="mt-3" style={{fontSize: '0.8rem'}}><b>Add a comment</b></label><br/>
      <input type="text" id="lname" name="lastname" className="border mb-5" placeholder="" style={{height:'10rem',width:'18rem',display:'inline-block'}} required /><br/>
      
      <div className="mt-5">
      <label for="lname"  ><b>Company / Brand Name</b></label><br/>
    <input type="text" id="lname" name="brand" placeholder="" required className="border mb-5" style={{width:'18rem'}}/><br/>
    </div>

     
    <label for="lname" className=""><b>Company / Brand Slogan</b></label><br/>
    <input type="text" id="lname" name="brand slogan" placeholder="" required className="border mb-5" style={{width:'18rem'}}/><br/>
      
       <label for="lname" className="mt-3"><b>Tell us your field or industry</b></label><br/>
    <input type="text" id="lname" name="field" placeholder="" required className="border mb-5" style={{width:'18rem'}}/><br/>
     <label for="lname" className="mt-3"><b>What product or services do you offer</b></label><br/>
    <input type="text" id="lname" name="" placeholder="" required className="border mb-5" style={{width:'18rem'}}/><br/>
   <label for="lname" className="mt-3"><b>Any Other Information?</b></label><br/>
    <input type="text" id="lname" name="" placeholder="" required className="border mb-5" style={{width:'18rem'}}/><br/>
               
    <div className=" mt-3">
        <button className="border  h-10 rounded mb-5" style={{ backgroundColor: '#ec268f', color: 'white',width:'10rem' }}>
                <span><b>Proceed To Cart</b></span>
        </button>
    </div>
            </div>
      </form>
                 </div>
             </div>
             
            </div>
        )
    }
}



export default CorporatePricing;