import React, {Component} from 'react'
import '../css/tailwind.css'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'
import work4 from '../images/work4.png'

class Sell extends Component{
    render(){
        return(
          <div>
              <div>
         <div>
             <img src="https://printivo.com/img/designer-bg.jpg" alt="imagebanner" className="w-full"/>
         </div>
         <div className="md:-mt-64 -mt-40">
             <h1 className="md:text-4xl text-2xl text-center " style={{color:'white'}}>SELL YOUR DESIGNS TO PRINTIVO CUSTOMERS</h1>
             <div className=" mt-2 md:ml-64 ml-20 md:pl-20">
            <button className="border md:w-56 w-40 rounded-lg md:text-2xl text-lg px-8 mt-1 md:ml-64 ml-20 text-sm" style={{ backgroundColor: '#00AFEF', color: 'white',height:'4rem' }}>
            <span>Get Started</span>
            </button>
            </div>
         </div>
         </div>
         <div className="md:mt-40 mt-20">
             <h1 className="text-3xl text-center font-medium" style={{color:'#ec268f'}}>
                 GET PAID FOR DOING WHAT YOU LOVE TO DO.
            </h1>
            <p className="text-center">
            Create awesome designs on Printivo and earn a royalty each time our customers make use of your designs. Printivo’s design<br/>
             market place let you upload your design and texts to our print products and you earn 15% of the value of the order each time a<br/>
             customer make use of your designs. It’s your digital design shop. <b>It’s 100% FREE.</b>
             </p>
         </div>
         <div className="border mt-5 ml-8 md:w-9/10 mr-3" style={{borderColor:'#cccccc'}}></div>
         <div className="md:flex">
             <div>
                 <h1 className="text-2xl mt-20 ml-20" style={{color:'#ec268f'}}>HOW TO GET STARTED. ITS FREE!</h1>
                 <div className="flex">
                 
        <div className="md:ml-20 ml-3 mt-8" style={{height:'35px',width:'35px',textAlign:'center',paddingTop:'5px',borderRadius:'35px',background: 'rgb(68, 68, 68)',color:'white'}}>1</div>
        <div>
        <p className="mt-8 mx-3 text-base"><span className="text-lg">Open a FREE Printivo Store </span>
              Tell us about your store,<br/>
               the email address you would like to use to access<br/> 
               your account. Click on "Register" and we will<br/> send you an email once your
               store has been created.
        </p>
        </div> 
                 </div>

                 <div className="flex">
                 
        <div className="md:ml-20 ml-3 mt-8" style={{height:'35px',width:'35px',textAlign:'center',paddingTop:'5px',borderRadius:'35px',background: 'rgb(68, 68, 68)',color:'white'}}>2</div>
        <div>
       <p className="mt-8 mx-3 text-base"><span className="text-lg">Create your designs </span>
       Choose a product that<br/> you want to add a design to. Next, upload your<br/>
        images or create text using the printivo designer tool.<br/> Arrange and resize 
        the different elements <br/>of your design as desired.
        </p>
        </div> 
                 </div>

                 <div className="flex">
                 
        <div className="md:ml-20 ml-3 mt-8" style={{height:'35px',width:'35px',textAlign:'center',paddingTop:'5px',borderRadius:'35px',background: 'rgb(68, 68, 68)',color:'white'}}>3</div>
        <div>
        <p className="mt-8 mx-3 text-base"><span className="text-lg">Post your design for sale </span>
              Once you are satisfied<br/> with how your design looks, click "Post for sale.” Our<br/>
               team will review and approve your design to go live on <br/>the website.
        </p>
        </div> 
                 </div>

                 <div className="flex">
                 
        <div className="md:ml-20 ml-3 mt-8" style={{height:'35px',width:'35px',textAlign:'center',paddingTop:'5px',borderRadius:'35px',background: 'rgb(68, 68, 68)',color:'white'}}>4</div>
        <div>
        <p className="mt-8 mx-1 text-base"><span className="text-lg">Start making money! </span>
        Each time your design sells, <br/>you earn money. You will receive 15% of the
         total sum paid<br/> on your design. No need to manage inventory or worry with<br/> 
         customer service. Just create designs and we’ll do the rest!
        </p>
        </div> 
                 </div>
             </div>

             <div>
                 <div>
             <h1 className="text-2xl mt-20 md:ml-40 ml-20" style={{color:'#ec268f'}}>REQUEST TO JOIN THE PROGRAM</h1>
             </div>
             <div className="border md:w-full w-4/10 mt-10 md:mx-40   md:mr:0 mr-8 ml-8  mb-10" style={{height:'35rem'}}>
              <div className="my-5 mx-8">
                 <lable className="font-medium" style={{color:'rgb(68, 68, 68)'}}>Store name</lable><br/>
                 <input type="text" value="" placeholder="storename"  className="border mt-2 pl-5 rounded-lg w-full h-10"/>
             </div> 
             <div className="my-5 mx-8">
                 <lable className="font-medium" style={{color:'rgb(68, 68, 68)'}}>Your store Url</lable><br/>
                 <input type="text" value="" placeholder="Your store url"  className="border mt-2 pl-5 rounded-lg w-full h-10"/>
             </div>
             <div className="my-5 mx-8">
                 <lable className="font-medium" style={{color:'rgb(68, 68, 68)'}}>Store Description</lable><br/>
                 <input type="text" value="" placeholder="store description"  className="border mt-2 pl-5 rounded-lg w-full h-32 pb-20"/>
             </div>

             <div className="my-5 mx-8">
                 <lable className="font-medium" style={{color:'rgb(68, 68, 68)'}}>Email Address</lable><br/>
                 <input type="text" value="" placeholder="email address"  className="border mt-2 pl-5 rounded-lg w-full h-10"/>
             </div>   
             <div className="flex justify-center mt-3">
              <button className="border  h-10 rounded-lg mb-5" style={{ backgroundColor: 'rgb(0, 179, 242)', color: 'white',width:'7rem' }}>
                <span><b>Register</b></span>
              </button>
            </div>
             </div>
             </div>
         </div>

         <div>
             <h1 className="text-2xl mt-20 md:ml-40 ml-20 text-center mr-3" style={{color:'#ec268f'}}>HOW IT WORKS</h1>
             <div className="md:flex md:ml-20">
                 <div className="my-10 md:ml-10 ml-32">
                     <img src={work1} alt="work1" className="ml-20" />
                     <p className="mt-3">Choose a product and create your <br/>design on it. Our team reviews and <br/><span className="ml-20">approve</span></p>
                 </div>
                 <div className="my-10  md:ml-10 ml-32">
                     <img src={work2} alt="work2" className="ml-20" />
                     <p className="mt-3">Customers likes your designs,<br/> customises it and use it to order print <br/><span className="ml-20">products</span></p>
                 </div>
                 <div className="my-10  md:ml-10 ml-32">
                     <img src={work3} alt="work3" className="ml-20" />
                     <p className="mt-3">We process the print order, handle<br/> customer services and ship to the <br/><span className="ml-20">customer’s door step.</span></p>
                 </div>
                 <div className="my-10  md:ml-10 ml-32 ">
                     <img src={work4} alt="work4" className="ml-20" />
                     <p className="mt-3">We send your payment for your<br/> percentage of the sale at the end of the<br/><span className="ml-20">month.</span></p>
                 </div>
                 </div>

                 <div className="mt-10">
                     <img src="https://printivo.com/img/designer-bg2.jpg"  className="w-full"/>

                 </div>
         </div>
        </div>
        )
    }
}

export default Sell;